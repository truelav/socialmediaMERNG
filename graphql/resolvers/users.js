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
  }
}