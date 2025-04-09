const validate = (type) => (rule) => (value) => {
  if (type === "required") {
    return value.trim().length > 0 || "Wajib diisi";
  }

  if (type === "minLength") {
    return value.length >= rule || `Minimal ${rule} karakter`;
  }

  if (type === "email") {
    return value.includes("@") || "Email tidak valid";
  }

  return true
};


const required = validate('required')()
const minLength = validate('minLength')
const isEmail = validate('email')()

const username = 'taufik'
const password = '123456'
const email = 'taufikmul@gmail.com'

console.log(required(username))
console.log(minLength(6)(password))
console.log(isEmail(email))