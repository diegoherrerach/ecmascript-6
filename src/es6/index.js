function newFunction(name, age, country){
    var name = name || 'Diego';
    var age = age || 37
    var country = country || 'PERU'
    console.log(name, age, country);
}
//es6
function newFunction2(name = 'Diego', age=27, country='PERU'){
    console.log(name, age, country);
};
newFunction2();
newFunction2('Walter', '32', 'MX');

let hello ="hello";
let world ="World";
let epicPhrase=hello + ' '+world;
console.log(epicPhrase);
let epicPhrase2= `${hello} ${world}`
console.log(epicPhrase2);

let lorem = "Esta es cualquier frase para practicar \n" + "Otra frase epica que necesitamos."

let lorem2 = `Otra frase epica que necesitamos
ahora es otra frase epica`;
console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'Diego',
    'age': 26,
    'country': 'PE'
}
console.log(person.name, person.age);

let {name, age}=person;
console.log(name, age);

let team1 = ['Diego', 'Ricardo', 'Juan'];
let team2 = ['Valeria','Jessica','Camila'];

let education=['David', ...team1, ...team2];
console.log(education);

{
    var globalVar = "Global Var";
}

{
    let globalLet='Global Let';
    console.log(globalLet);
}
console.log(globalVar);

const a = 'b';
a='a';

let name = 'Diego';
let age = 26;
//es5
obj = { name: name, age:age};
//es6
obj2 = {name, age};
console.log(obj2);

const names = [
    {
        name = 'Diego',
        age = 26
    },
    {
        name = 'Yessica',
        age = 24
    }
]
let listOfNames = names.map(function (item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...
}

const square = num =>  num*num;

const helloPromise = () =>{
    return new Promise((resolve, reject)=>{
        if (true){
            resolve('Hey!')
        }else{
            reject('Ups!!')
        }
    });
}
helloPromise().then(response=> console.log(response)).then(()=>console.log('hola')).catch(error => console.log(error));

class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA =valueA;
        this.valueB =valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(2, 2));

import {hello} from './module';
hello();

function* helloWorld() {
    if (true){
        yield 'hello,';
    }if(true){
        yield 'world';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

