import { connect } from 'react-redux'
import {
  setConsultantType,
  setSelectedSlot,
  setAppointmentType,
} from '../actions/appointment'
import { setAppointmentSlots } from '../actions/appointmentSlots'
import AppointmentSelector from '../components/AppointmentSelector'

const mapStateToProps = state => ({
  appointment: state.appointment,
  appointmentSlots: state.appointmentSlots,
  consultantTypes: state.consultantTypes,
})

const mapDispatchToProps = dispatch => ({
  setAppointmentSlots: slots => dispatch(setAppointmentSlots(slots)),
  setConsultantType: type => dispatch(setConsultantType(type)),
  setSelectedSlot: slot => dispatch(setSelectedSlot(slot)),
  setAppointmentType: type => dispatch(setAppointmentType(type)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentSelector)
