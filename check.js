
class DVD {
  constructor(name, director, releaseYear) {
    this.name = name;
    this.releaseYear = releaseYear;
    this.director = director;
  }

  stringify() {
    return this.name + ', directed by ' + this.director + ', released in ' + this.releaseYear;
  }


}


const avatar = new DVD('Avatar', 'Sam Daniels', 2002)
console.log(avatar)
console.log(avatar.stringify())





// class Person {

//   constructor(name) {
//     this.name = name;
//   }

//   introduce() {
//     console.log(`Hello, my name is ${this.name}`);
//   }

// }

// const otto = new Person('Otto');
// const tam = new Person('Tam')

// otto.introduce();
// tam.introduce()