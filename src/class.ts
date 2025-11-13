//oop -- class - object


//blue print
class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
        this.name = name
        this.species = species
        this.sound = sound
    }

    makeSound() {
        console.log(`${this.name} is making ${this.sound}`);
    }
}

const dog = new Animal('tiger', 'dog', 'ghew ghew')
const cat = new Animal('puchung', 'cat', 'mew mew');

console.log(dog.sound);
dog.makeSound();
cat.makeSound();




//parameter property shorthand
// class Animal {


//     constructor(public name: string, public species: string, public sound: string) {

//     }

//     makeSound() {
//         console.log(`${this.name} is making ${this.sound}`);
//     }
// }

// const dog = new Animal('tiger', 'dog', 'ghew ghew')
// const cat = new Animal('puchung', 'cat', 'mew mew');

// console.log(dog.sound);
// dog.makeSound();
// cat.makeSound();


