const greetings = ['Bonjour', 'Hola', 'Ni Hao', 'Konnichiwa', 'Hello', 'Zdravstvuyte', 'Salve', 'Guten Tag', 'Olá', 'Namaskar'
    'Aloha', 'Dia dhuit'
];
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];



function greet() {
    let txtName = document.getElementById("txtName");
    let txtOutput = document.getElementById("txtOutput");
    let name = txtName.value;
    if (name == "") {
        txtOutput.value = '';
        return false;
    } else {
        txtOutput.value = randomGreeting + ", " + name + "!";
        return true;
    }
}

console.log(greet(name));