function validate({userName, password, confirmPassword}) {
  const errors = {};
  const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  if(!userName) {
    errors.userNameBlank = 'Please enter your username.';
  }

  if(!password) {
    errors.passwordBlank = 'Please enter your password.';
  }

  if(!confirmPassword) {
    errors.confirmPasswordBlank = 'Please enter your confirm password.';
  }

  if(!passwordRegExp.test(password)) {
    errors.invalidPassword = 'Minimum of eight characters, at least one letter, one number and one special character';
  }

  if(password && password !== confirmPassword) {
    errors.confirmPassword = 'Confirm password must match password.';
  }

  return errors;
}

export default validate;