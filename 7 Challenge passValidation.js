// function isValidPassword(password, username) {
//   // check password
//   if (password.length >= 8 && password.indexOf(username) === -1 && password.indexOf(' ') === -1)
//     return true;
//   else
//     return false;
// }

function isValidPassword(password, username) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;

  if (tooShort || hasSpace || tooSimilar)
    return false;

  return true;
}

console.log(isValidPassword('teseekrai123', 'eekrain'));