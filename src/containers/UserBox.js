import { connect } from 'react-redux'
import { setUserData } from '../actions/user'
import User from '../components/User/User'

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  setUserData: userData => dispatch(setUserData(userData)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
