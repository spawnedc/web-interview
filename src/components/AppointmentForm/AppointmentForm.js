import PropTypes from 'prop-types'
import React from 'react'
import {
  FaNotesMedical,
  FaRegClock,
  FaRegImages,
  FaStethoscope,
  FaVideo,
} from 'react-icons/fa'
import { getAvailableSlots } from '../../services/api'
import { Pills } from '../Pills/Pills'
import './AppointmentForm.scss'

class AppointmentForm extends React.Component {
  static propTypes = {
    appointment: PropTypes.object.isRequired,
    appointmentSlots: PropTypes.shape({
      all: PropTypes.array,
      available: PropTypes.array,
    }),
    consultantTypes: PropTypes.array,
    onSubmit: PropTypes.func.isRequired,
    setAppointmentSlots: PropTypes.func.isRequired,
    setAppointmentType: PropTypes.func.isRequired,
    setConsultantType: PropTypes.func.isRequired,
    setSelectedSlot: PropTypes.func.isRequired,
    setAppointmentNotes: PropTypes.func.isRequired,
    userId: PropTypes.number,
  }

  static defaultProps = {
    consultantTypes: [],
  }

  componentDidMount() {
    getAvailableSlots()
      .then(slots => this.props.setAppointmentSlots(slots))
      .catch(e => {
        console.error(e)
      })
  }

  onConsultantTypeClick = consultantType => {
    this.props.setConsultantType(consultantType)
  }

  onAppointmentSlotClick = appointmentSlot => {
    this.props.setSelectedSlot(appointmentSlot)
  }

  onAppointmentTypeClick = appointmentType => {
    this.props.setAppointmentType(appointmentType)
  }

  onNotesChange = event => {
    this.props.setAppointmentNotes(event.target.value)
  }

  canSubmitForm = () => {
    const { appointment } = this.props

    return (
      appointment.consultantType &&
      appointment.selectedSlot &&
      appointment.appointmentType
    )
  }

  submitForm = async event => {
    event.preventDefault()
    const { appointment, userId } = this.props
    const { notes, selectedSlot, appointmentType } = appointment
    const data = {
      userId,
      dateTime: selectedSlot.time,
      notes,
      appointmentType,
      type: `${appointment.consultantType} appointment`,
    }

    this.props.onSubmit(data)
  }

  render() {
    const { appointment, appointmentSlots, consultantTypes } = this.props

    return (
      <form onSubmit={this.submitForm} className="appointmen-form">
        <div className="form-sections-wrapper">
          <fieldset className="form-section">
            <legend className="form-section-title">
              <span className="form-section-icon">
                <FaStethoscope />
              </span>
              <span className="form-section-title-label">Consultant Type</span>
            </legend>
            <div className="form-section-content">
              <Pills
                name="consultant-type"
                items={consultantTypes}
                onItemClick={this.onConsultantTypeClick}
                selectedItem={appointment.consultantType}
              />

              {appointment.consultantType && (
                <small className="selected-consultant-type">{`Babylon ${
                  appointment.consultantType
                }`}</small>
              )}
            </div>
          </fieldset>

          {appointment.consultantType && (
            <fieldset className="form-section">
              <legend className="form-section-title">
                <span className="form-section-icon">
                  <FaRegClock />
                </span>
                <span className="form-section-title-label">
                  Date &amp; Time
                </span>
              </legend>
              <div className="form-section-content">
                <Pills
                  name="date-time"
                  items={appointmentSlots.available}
                  getItemDisplayValue={slot => slot.displayValue}
                  onItemClick={this.onAppointmentSlotClick}
                  selectedItem={appointment.selectedSlot}
                />
              </div>
            </fieldset>
          )}

          {appointment.selectedSlot && (
            <fieldset className="form-section">
              <legend className="form-section-title">
                <span className="form-section-icon">
                  <FaVideo />
                </span>
                <span className="form-section-title-label">
                  Appointment Type
                </span>
              </legend>
              <div className="form-section-content">
                <Pills
                  name="appointment-type"
                  items={appointment.selectedSlot.appointmentType}
                  onItemClick={this.onAppointmentTypeClick}
                  selectedItem={appointment.appointmentType}
                />
              </div>
            </fieldset>
          )}

          <fieldset className="form-section">
            <legend className="form-section-title">
              <span className="form-section-icon">
                <FaNotesMedical />
              </span>
              <span className="form-section-title-label">Notes</span>
            </legend>
            <div className="form-section-content">
              <textarea
                onChange={this.onNotesChange}
                className="appointment-notes"
                placeholder="Describe your symptoms"
              />
            </div>
          </fieldset>

          <fieldset className="form-section">
            <legend className="form-section-title">
              <span className="form-section-icon">
                <FaRegImages />
              </span>
              <span className="form-section-title-label">Attach a photo</span>
            </legend>
            <div className="form-section-content">
              <input type="file" />
            </div>
          </fieldset>
        </div>

        <button
          disabled={!this.canSubmitForm()}
          className="button"
          type="submit"
        >
          Book
        </button>
      </form>
    )
  }
}

export default AppointmentForm
