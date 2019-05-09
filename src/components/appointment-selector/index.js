import React from 'react'
import { FaRegClock, FaVideo, FaStethoscope } from 'react-icons/fa'
import { getAvailableSlots } from '../../services/api'
import { Pills } from '../pills'

export class AppointmentSelector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      availableSlots: [],
      filteredSlots: [],
      consultantTypes: [],
      selectedAppointmentType: null,
      selectedConsultantType: null,
      selectedAppointment: null,
    }
  }

  componentDidMount() {
    getAvailableSlots()
      .then(json => this.parseAvailableSlots(json))
      .catch(e => {
        console.error(e)
      })
  }

  onConsultantTypeClick = consultantType => {
    const filteredSlots = this.state.availableSlots.filter(slot =>
      slot.consultantType.includes(consultantType)
    )
    this.setState({
      filteredSlots,
      selectedConsultantType: consultantType,
      selectedAppointmentType: null,
      selectedAppointment: filteredSlots.length === 1 ? filteredSlots[0] : null,
    })
  }

  onAppointmentTypeClick = appointmentType => {
    this.setState({ selectedAppointmentType: appointmentType })
  }

  onAppointmentSlotClick = appointmentSlot => {
    this.setState({ selectedAppointment: appointmentSlot })
  }

  parseAvailableSlots = slots => {
    const consultantTypes = slots.reduce(
      (acc, curr) => [...acc, ...curr.consultantType],
      []
    )
    this.setState({
      availableSlots: slots,
      consultantTypes: [...new Set(consultantTypes)].sort(),
    })
  }

  render() {
    const {
      filteredSlots,
      consultantTypes,
      selectedAppointment,
      selectedConsultantType,
    } = this.state

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
          {selectedConsultantType && <p>Babylon {selectedConsultantType}</p>}
        </div>

        {filteredSlots.length > 0 && (
          <div className="appointment-section">
            <div className="appointment-section-title">
              <FaRegClock /> Date &amp; Time
            </div>
            <Pills
              items={filteredSlots}
              getItemDisplayValue={slot => slot.time}
              onItemClick={this.onAppointmentSlotClick}
            />
          </div>
        )}

        {selectedAppointment && (
          <div className="appointment-section">
            <div className="appointment-section-title">
              <FaVideo /> Appointment Type
            </div>
            <Pills
              items={selectedAppointment.appointmentType}
              onItemClick={this.onAppointmentTypeClick}
            />
          </div>
        )}
      </div>
    )
  }
}
