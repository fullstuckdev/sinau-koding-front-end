// Currying untuk Validasi Form
function validateField(rules) {
    return function(value) {
        return rules.every(rule => rule(value));
    };
}

// Contoh aturan validasi
const isNotEmpty = value => value.trim() !== "";
const isEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const minLength = length => value => value.length >= length;

// Contoh penggunaan
const validateEmail = validateField([isNotEmpty, isEmail]);
const validatePassword = validateField([isNotEmpty, minLength(6)]);

console.log("Valid Email:", validateEmail("test@example.com")); // true
console.log("Invalid Email:", validateEmail("invalid-email")); // false
console.log("Valid Password:", validatePassword("secure123")); // true
console.log("Invalid Password:", validatePassword("123")); // false
