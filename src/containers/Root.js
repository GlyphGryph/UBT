import React, { Component } from 'react'
import { Provider } from 'react-redux'
import App from './App'
import { newDataStore } from '../store'

const dataStore = newDataStore()
window.dataStore = dataStore

export default class Root extends Component {
  render() {
    return (
      <Provider store={dataStore}>
        <App />
      </Provider>
    )
  }
}
