// 5kyu

/* You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters. */

/* validate('djI38D55'), 'djI38D55 - Expected true'
!validate('a2.d412'), 'a2.d412 - Expected false'
!validate('JHD5FJ53'), 'JHD5FJ53 - Expected false' */

// 패스워드 확인
// 3가지 실패

function validate(password) {
  let n = password;
  let lowerCase = n.toLowerCase();
  let upperCase = n.toUpperCase();
  if (lowerCase === n || upperCase === n || n.length < 6) {
    return false;
  }
  return n.split("").some(el => typeof Number(el) === "number");
}

// 정규식

function validate(password) {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
}
