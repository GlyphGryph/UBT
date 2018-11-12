import { createStore, compose } from 'redux'
import { rootDataReducer } from '../reducers'

const defaultState = {
  "name":"Gaspard",
  "surname":"Barthelemy",
  "gender":"male",
  "region":"France",
  "age":21,
  "title":"mr",
  "phone":"(605) 375 6003",
  "birthday":{
    "dmy":"06\/07\/1997",
    "mdy":"07\/06\/1997",
    "raw":868180007
  },
  "email":"gaspard-97@example.com",
  "password":"Barthelemy97*$",
  "credit_card":{
    "expiration":"5\/22",
    "number":"8373-6524-9605-1543",
    "pin":1842,
    "security":556
  },
  "photo":"https:\/\/uinames.com\/api\/photos\/male\/3.jpg"
}

const newDataStore = ()=>{
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootDataReducer,
    defaultState
    // Just in case we want to add some middleware later, hah...
  )
  return store
}

export { newDataStore }
