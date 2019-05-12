import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'
import { FaRegClock, FaStethoscope, FaVideo } from 'react-icons/fa'
import { LONG_DATE_TIME } from '../../constants/dateTimeFormats'
import './BookingSuccess.scss'

const BookingSuccess = props => {
  const { appointment } = props

  const dateTime = moment(appointment.dateTime).format(LONG_DATE_TIME)

  return (
    <div className="booking-success">
      <h2>Horray! Your appointment is booked!</h2>
      <ul className="booking-details">
        <li className="booking-detail">
          <span className="booking-detail-icon">
            <FaRegClock />
          </span>
          <span className="booking-detail-label">
            <time dateTime={appointment.dateTime}>{dateTime}</time>
          </span>
        </li>
        <li className="booking-detail">
          <span className="booking-detail-icon">
            <FaStethoscope />
          </span>
          <span className="booking-detail-label">{appointment.type}</span>
        </li>
        <li className="booking-detail">
          <span className="booking-detail-icon">
            <FaVideo />
          </span>
          <span className="booking-detail-label">
            {appointment.appointmentType}
          </span>
        </li>
      </ul>

      <button
        className="button"
        type="button"
        onClick={props.onBookNewAppointment}
      >
        Book another appointment
      </button>
    </div>
  )
}

BookingSuccess.propTypes = {
  appointment: PropTypes.object.isRequired,
  onBookNewAppointment: PropTypes.func.isRequired,
}

export default BookingSuccess
