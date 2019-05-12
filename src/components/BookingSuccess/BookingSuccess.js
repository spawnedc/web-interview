import React from 'react'
import PropTypes from 'prop-types'

import { FaRegClock, FaStethoscope, FaVideo } from 'react-icons/fa'

const BookingSuccess = function(props) {
  const { appointment } = props

  return (
    <div className="booking-success">
      <h2>Horray! Your appointment is booked!</h2>
      <ul>
        <li>
          <FaRegClock /> {appointment.dateTime}
        </li>
        <li>
          <FaStethoscope /> {appointment.type}
        </li>
        <li>
          <FaVideo /> {appointment.appointmentType}
        </li>
      </ul>
    </div>
  )
}

BookingSuccess.propTypes = {
  appointment: PropTypes.object.isRequired,
}

export default BookingSuccess
