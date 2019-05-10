import PropTypes from 'prop-types'
import React from 'react'
import { getUser } from '../../services/api'
import './User.scss'

class User extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    userId: PropTypes.number.isRequired,
    setUserData: PropTypes.func.isRequired,
  }

  componentDidMount() {
    getUser(this.props.userId).then(user => this.props.setUserData(user))
  }

  render() {
    const { user } = this.props
    if (user) {
      const { avatar, firstName, lastName } = user
      const userName = `${firstName} ${lastName}`

      return (
        <div className="user">
          <img className="user-image" src={avatar} alt={userName} />
          <div className="user-name">{userName}</div>
        </div>
      )
    }

    return null
  }
}

export default User
