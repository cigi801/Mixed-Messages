let userName = ' ';

const greetings = ['Bonjour', 'Hola', 'Ni Hao', 'Konnichiwa', 'Hello'];
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];



userName = prompt('What is your name?');

function greet(name)
{
    return randomGreeting + ' ' + userName + "!";
}

console.log(greet(userName));