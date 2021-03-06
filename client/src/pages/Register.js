import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const Register = (props) => {

  const [errors, setErrors] = useState({})
  const [values, setValues] = useState({
    username: 'dawdawd',
    email: 'dwadawd@mail.com',
    password: 'pass1',
    confirmPassword: 'pass1'
  })
  const [addUser, { data, loading, error }] = useMutation(REGISTER_USER)
   
  const onSubmit = (event) => {
    event.preventDefault()
    // console.log(event.target.name)
    // registerUser()
    addUser({variables: {username: values.username, email: values.email, password: values.password, confirmPassword: values.confirmPassword}})
  }

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const registerUser = () => { 
    addUser({variables: {values}})
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col items-center">
        {/* <div className="lg:w-2/3 md:w-2/3 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
          <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
        </div> */}
        <div className="lg:w-2/3 md:w-2/3 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
          <form className="" onSubmit={onSubmit}>
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
            <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Username</label>
              <input onChange={onChange} type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input onChange={onChange}  type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
              <input onChange={onChange}  type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Confirm Password</label>
              <input onChange={onChange}  type="password" id="confirmPassowrd" name="confirmPassowrd" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

const REGISTER_USER  = gql`
  mutation{
    register(
      registerInput: {
        username: "myuser1"
        password: "password1"
        confirmPassword: "password1"
        email: "myemail@gmail.com"
      }
    ){
      username
      email
      id
      createdAt
      token
    }
  }
`

export default Register