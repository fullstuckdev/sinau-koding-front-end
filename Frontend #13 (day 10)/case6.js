// let name = 'jono'

// const displayName = () => {
//     console.log(name)
// }

// displayName

function creatingGreeting(greetingPrefix) {
  return function (name) {
    return `${greetingPrefix} ${name}!`;
  };
}

const sayHello = creatingGreeting("Hello");

console.log(sayHello("Budi"));
