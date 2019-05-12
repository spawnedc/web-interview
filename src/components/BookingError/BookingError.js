import React from 'react'
import PropTypes from 'prop-types'

const BookingError = function(props) {
  const { error } = props

  return (
    <div className="booking-error">
      <h2>Oh no!</h2>
      <p>There was a problem while booking your appointment:</p>
      <p>{error}</p>
    </div>
  )
}

BookingError.propTypes = {
  error: PropTypes.string.isRequired,
}

export default BookingError
