function validate({userName, password}) {
  const errors = {};

  if(!userName) {
    errors.userNameBlank = 'Please enter your username.';
  }

  if(!password) {
    errors.passwordBlank = 'Please enter your password.';
  }

  return errors;
}

export default validate;