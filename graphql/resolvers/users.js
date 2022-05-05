const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { UserInputError } = require('apollo-server')

const { SECRET_KEY } = require('../../config')
const { validateRegisterInput } = require('../../utils/validators')
const User = require('../../models/User')


module.exports = {
  Query: {
    async getUsers(){
      try {
        const users = await User.find()
        return users
      } catch(error){
        throw new Error(error)
      }
    }
  },
  Mutation: {
    async register(_, { registerInput: {username, email, password, confirmPassowrd}}, context, info){
      
      // hash password and create auth token
      
      // Todo: Validate data (server validation)
      const { valid, errors } = validateRegisterInput(username, email, password, confirmPassowrd)

      if(!valid){
        throw new UserInputError('Errors', { errors })
      }

      // check for user dupliactes
      const user = await User.findOne({ username })
      if(user) throw new UserInputError('Username Taken', {
        errors: { username: 'This username is taken' }
      })

      password = await bcrypt.hash(password, 12)

      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString()
      })

      const res = await newUser.save()

      const token = jwt.sign({
        id: res.id,
        email: res.email,
        username: res.username
      }, SECRET_KEY, {expiresIn: '1h'})

      return {
        ...res._doc,
        id: res._id,
        token
      }

    }
  }
}