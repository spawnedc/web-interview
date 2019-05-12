import { connect } from 'react-redux'
import { resetAppointment } from '../actions/appointment'
import {
  bookingFailure,
  bookingSuccess,
  resetBooking,
  startBooking,
} from '../actions/booking.js'
import BookAppointment from '../components/BookAppointment/BookAppointment'
import bookingStatus from '../constants/bookingStatus'

const mapStateToProps = state => ({
  booking: state.booking,
  isIdle: state.booking.status === bookingStatus.IDLE,
  isInProgress: state.booking.status === bookingStatus.IN_PROGRESS,
  isSuccess: state.booking.status === bookingStatus.SUCCESS,
  isFailure: state.booking.status === bookingStatus.FAILURE,
})

const mapDispatchToProps = dispatch => ({
  startBooking: () => dispatch(startBooking()),
  resetBooking: () => dispatch(resetBooking()),
  bookingSuccess: appointment => dispatch(bookingSuccess(appointment)),
  bookingFailure: error => dispatch(bookingFailure(error)),
  resetAppointment: () => dispatch(resetAppointment()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookAppointment)
