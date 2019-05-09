import PropTypes from 'prop-types'
import React from 'react'
import { FaRegClock, FaStethoscope, FaVideo } from 'react-icons/fa'
import { getAvailableSlots } from '../services/api'
import { Pills } from './Pills'

export default class AppointmentSelector extends React.Component {
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

  render() {
    const { appointment, appointmentSlots, consultantTypes } = this.props

    return (
      <div className="appointment-selector">
        <div className="appointment-section">
          <div className="appointment-section-title">
            <FaStethoscope /> Consultant Type
          </div>
          <Pills
            items={consultantTypes}
            onItemClick={this.onConsultantTypeClick}
          />
          {appointment.consultantType && (
            <p>Babylon {appointment.consultantType}</p>
          )}
        </div>

        {appointmentSlots.available.length > 0 && (
          <div className="appointment-section">
            <div className="appointment-section-title">
              <FaRegClock /> Date &amp; Time
            </div>
            <Pills
              items={appointmentSlots.available}
              getItemDisplayValue={slot => slot.time}
              onItemClick={this.onAppointmentSlotClick}
            />
          </div>
        )}

        {appointment.selectedSlot && (
          <div className="appointment-section">
            <div className="appointment-section-title">
              <FaVideo /> Appointment Type
            </div>
            <Pills
              items={appointment.selectedSlot.appointmentType}
              onItemClick={this.onAppointmentTypeClick}
            />
          </div>
        )}
      </div>
    )
  }
}
