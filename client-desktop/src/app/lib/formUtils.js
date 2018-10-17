function isValidEmail(email) {
  const validEmailRegEx = /[a-zA-Z0-9_\-.]+@[a-zA-Z0-9_\-.]+\.[a-zA-Z]{2,5}/i;
  return validEmailRegEx.test(email);
}

function isValidPassword(password) {
  return password.length > 3;
}

export { isValidEmail, isValidPassword };
