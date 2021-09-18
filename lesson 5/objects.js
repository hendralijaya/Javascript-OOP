class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
}

let userOne = new User("budi@gmail.com", "Budi");
let userTwo = new User("bagus@gmail.com", "Bagus");

console.log(userOne);
console.log(userTwo);
