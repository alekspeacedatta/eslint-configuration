function logData(data: any) {
    console.log('Data:', data);
}

logData({ key: 'value' });

let count = 0;
count += 1;

const unusedVarTS = 'I am not used';

async function fetchData(): Promise<string> {
    return Promise.resolve('Hello TypeScript');
}

fetchData().then(message => console.log(message));

const greeting: string = "Hello, TypeScript Lint!";

class Example {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const example = new Example('Test');
console.log(example.getName());