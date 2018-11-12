import React from 'react'
import { connect } from 'react-redux'
import PersonContainer from '../containers/PersonContainer'

class App extends React.Component{
  render(){
    return (
      <div>
        <PersonContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
