function logData(data) {
    console.log('Data:', data);
}

logData({ key: 'value' });

let count = 0;
count += 1;

const unusedVarTS = 'I am not used';

async function fetchData(){
    return Promise.resolve('Hello TypeScript');
}

fetchData().then(message => console.log(message));

const greeting = "Hello, TypeScript Lint!";

class Example {
    private name;

    constructor(name) {
        this.name = name;
    }

    public getName(){
        return this.name;
    }
}

const example = new Example('Test');
console.log(example.getName());