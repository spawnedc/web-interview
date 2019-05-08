import React from 'react'
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
    this.setState({
      filteredSlots: this.state.availableSlots.filter(slot =>
        slot.consultantType.includes(consultantType)
      ),
      selectedConsultantType: consultantType,
      selectedAppointmentType: null,
      selectedAppointment: null,
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
    const { filteredSlots, consultantTypes, selectedAppointment } = this.state

    return (
      <div className="appointment-selector">
        <Pills
          items={consultantTypes}
          onItemClick={this.onConsultantTypeClick}
        />

        <Pills
          items={filteredSlots}
          getItemDisplayValue={slot => slot.time}
          onItemClick={this.onAppointmentSlotClick}
        />

        {selectedAppointment && (
          <Pills
            items={selectedAppointment.appointmentType}
            onItemClick={this.onAppointmentTypeClick}
          />
        )}
      </div>
    )
  }
}
