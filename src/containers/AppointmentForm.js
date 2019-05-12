import { connect } from 'react-redux'
import {
  setAppointmentNotes,
  setAppointmentType,
  setConsultantType,
  setSelectedSlot,
} from '../actions/appointment'
import { setAppointmentSlots } from '../actions/appointmentSlots'
import AppointmentForm from '../components/AppointmentForm/AppointmentForm'

const mapStateToProps = state => ({
  appointment: state.appointment,
  appointmentSlots: state.appointmentSlots,
  consultantTypes: state.consultantTypes,
  userId: state.user.id,
})

const mapDispatchToProps = dispatch => ({
  setAppointmentSlots: slots => dispatch(setAppointmentSlots(slots)),
  setConsultantType: type => dispatch(setConsultantType(type)),
  setSelectedSlot: slot => dispatch(setSelectedSlot(slot)),
  setAppointmentType: type => dispatch(setAppointmentType(type)),
  setAppointmentNotes: notes => dispatch(setAppointmentNotes(notes)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentForm)
