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
}

const dog = new Animal('tiger', 'dog', 'ghew ghew')
const cat = new Animal('puchung', 'cat', 'mew mew');

console.log(dog.sound);
console.log(cat.sound);