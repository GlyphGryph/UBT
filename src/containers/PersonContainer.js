import { connect } from 'react-redux'
import Person from '../components/Person'

const mapStateToProps = state => {
  return {
    ...state // This is bad and lazy, should REALLY be explicit here
  }
}

const PersonContainer = connect(
  mapStateToProps
)(Person)

export default PersonContainer
