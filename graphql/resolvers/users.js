const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { UserInputError } = require('apollo-server')

const { SECRET_KEY } = require('../../config')
const { validateRegisterInput, validateLoginInput } = require('../../utils/validators')
const User = require('../../models/User')


const generateToken = (user) => {
  return  jwt.sign({
    id: user.id,
    email: user.email,
    username: user.username
  }, SECRET_KEY, {expiresIn: '1h'})

}

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

    async login(_, {username, password}){
      const { valid, errors } = validateLoginInput(username, password);


      const user = await User.findOne({username})

      if(!user){
        errors.general = 'User not found';
        throw new UserInputError('User not found', {errors})
      }

      const match = await bcrypt.compare(password, user.password)

      if(!match){
        errors.general = 'Wrong Username/Password';
        throw new UserInputError('Wrong Username/Password', {errors})
      }

      const token = generateToken(user)

      return {
        ...user._doc,
        id: user._id,
        token
      }

    },
    async register(_, { registerInput: {username, email, password, confirmPassowrd}}){
      
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
        confirmPassowrd,
        createdAt: new Date().toISOString()
      })

      const res = await newUser.save()

      const token = generateToken(res)

      console.log()

      return {
        ...res._doc,
        id: res._id,
        token
      }

    }
  }
}

