import PropTypes from 'prop-types'
import React from 'react'
import AppointmentForm from '../../containers/AppointmentForm'
import UserBox from '../../containers/UserBox'
import { bookAppointment } from '../../services/api'
import BookingError from '../BookingError/BookingError'
import BookingSuccess from '../BookingSuccess/BookingSuccess'
import './BookAppointment.scss'

class BookAppointment extends React.Component {
  static propTypes = {
    booking: PropTypes.object.isRequired,
    startBooking: PropTypes.func.isRequired,
    resetBooking: PropTypes.func.isRequired,
    bookingSuccess: PropTypes.func.isRequired,
    bookingFailure: PropTypes.func.isRequired,
    isIdle: PropTypes.bool.isRequired,
    isInProgress: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    isFailure: PropTypes.bool.isRequired,
    resetAppointment: PropTypes.func.isRequired,
  }

  onSubmit = async data => {
    const { startBooking, bookingSuccess, bookingFailure } = this.props

    try {
      startBooking()
      const newAppointment = await bookAppointment(data)
      bookingSuccess(newAppointment)
    } catch (e) {
      bookingFailure(e.message)
    }
  }

  onBookNewAppointment = () => {
    this.props.resetAppointment()
    this.props.resetBooking()
  }

  render() {
    const { booking, isIdle, isInProgress, isSuccess, isFailure } = this.props
    const { appointment, error } = booking

    return (
      <section className="book-appointment">
        <h1 className="section-title">New Appointment</h1>

        <UserBox userId={1} />

        {isSuccess && (
          <BookingSuccess
            appointment={appointment}
            onBookNewAppointment={this.onBookNewAppointment}
          />
        )}

        {isFailure && <BookingError error={error} />}

        {isInProgress && <h2>Hold on. We are booking your appointment...</h2>}

        {isIdle && <AppointmentForm onSubmit={this.onSubmit} />}
      </section>
    )
  }
}

export default BookAppointment
