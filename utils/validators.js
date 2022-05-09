module.exports.validateRegisterInput = (username, email, password, confirmPassword) => {
  const errors = {}

  if(username.trim() === ''){
    errors.username = "Username must not be empty"
  }

  if(email.trim() === ''){
    errors.email = "email must not be empty"
  } else {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!email.match(regEx)){
      errors.email = "Email must be have a valid form xxx@xxxmail.com"
    }
    if(password === ''){
      errors.password = "Password myst not be empty"
    } 
    // else if (password !== confirmPassword){
    //   console.log(password, confirmPassword)
    //   errors.password = 'Password and confirm password does not match'
    // }
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  }

}

module.exports.validateLoginInput = (username, password) => {
  const errors = {}

  if(username.trim() === ''){
    errors.username = "Username must not be empty"
  }

  if(password.trim() === ''){
    errors.password = "Password must not be empty"
  }
}