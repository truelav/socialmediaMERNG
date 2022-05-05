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
    register(_, args, context, info){
      // Todo: Validate data (server validation)
      // check for user dupliactes
      // hash password and create auth token
    }
  }
}