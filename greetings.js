let userName = ' ';
let greeting = '';
const greetings = ['Bonjour', 'Hola', 'Ni Hao', 'Konnichiwa', 'Hello'];
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

userName ? console.log(`${randomGreeting}, ${userName}`) : console.log(`${randomGreeting}`);