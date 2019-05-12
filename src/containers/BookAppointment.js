import { connect } from 'react-redux'
import BookAppointment from '../components/BookAppointment/BookAppointment'
import bookingStatus from '../constants/bookingStatus'
import {
  startBooking,
  resetBooking,
  bookingSuccess,
  bookingFailure,
} from '../actions/booking.js'

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
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookAppointment)
