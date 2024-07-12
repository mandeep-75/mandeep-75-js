class Animal {
  constructor(name, sound, age) {
    this.name = name;
    this.sound = sound;
    this.age = age;
  }
  greet() {
    console.log(
      `${this.name} says ${this.sound} and is ${this.age} years old. ${this.breed}`
    );
  }
}

class Dog extends Animal {
  constructor(name, sound, age, breed) {
    super(name, sound, age);
    this.breed = breed;
  }
}
const jkimal = new Animal("karan", "cat", 34234);
const karan = new Dog("karan", "dog", 32, "libera");

jkimal.greet();
