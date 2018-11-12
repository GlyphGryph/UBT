import React from 'react'
import PropTypes from 'prop-types'
import Birthday from './Birthday'
import CreditCard from './CreditCard'

const Person = (props) => (
  <div> 
    <h1>IMPORTANT INTERNAL INFORMATION:</h1>
    <img url={props.photo}/>
    <div>Name: {props.surname}, {props.name}</div>
    <div>Gender: {props.gender}</div>
    <div>Region: {props.region}</div>
    <div>Phone: {props.phone}</div>
    <div>Email: {props.email}</div>
    <div>Password: {props.password} [Aside: Should you really be able to see these, though?]</div>
  </div>
)

Person.propTypes = {
  name: PropTypes.object.isRequired,
  surname: PropTypes.object.isRequired,
  gender: PropTypes.object.isRequired,
  region: PropTypes.object.isRequired,
  phone: PropTypes.object.isRequired,
  email: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired,
  photo: PropTypes.object.isRequired

}

export default Person
