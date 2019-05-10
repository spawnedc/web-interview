import PropTypes from 'prop-types'
import React from 'react'
import { FaRegClock, FaStethoscope, FaVideo } from 'react-icons/fa'
import { getAvailableSlots } from '../../services/api'
import { Pills } from '../Pills/Pills'
import User from '../User'
import './BookAppointment.scss'

class BookAppointment extends React.Component {
  static propTypes = {
    appointment: PropTypes.object.isRequired,
    appointmentSlots: PropTypes.shape({
      all: PropTypes.array,
      available: PropTypes.array,
    }),
    consultantTypes: PropTypes.array,
    setAppointmentSlots: PropTypes.func.isRequired,
    setAppointmentType: PropTypes.func.isRequired,
    setConsultantType: PropTypes.func.isRequired,
    setSelectedSlot: PropTypes.func.isRequired,
  }

  static defaultProps = {
    consultantTypes: [],
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

  componentDidMount() {
    getAvailableSlots()
      .then(slots => this.props.setAppointmentSlots(slots))
      .catch(e => {
        console.error(e)
      })
  }

  render() {
    const { appointment, appointmentSlots, consultantTypes } = this.props

    return (
      <section className="book-appointment">
        <h1 className="section-title">New Appointment</h1>

        <User />

        <form className="appointmen-form">
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
                <p>{`Babylon ${appointment.consultantType}`}</p>
              )}
            </div>
          </fieldset>

          {appointmentSlots.available.length > 0 && (
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
        </form>

        <div style={{ maxWidth: 600, margin: '24px auto' }}>
          <div>
            <strong>Notes</strong>
            <textarea />
          </div>
          <div>
            <button
              className="button"
              onClick={() => {
                /* TODO: submit the data */
              }}
            >
              Book appointment
            </button>
          </div>
        </div>
      </section>
    )
  }
}

export default BookAppointment
