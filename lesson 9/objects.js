function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
  this.login = function () {
    console.log(`${this.email} has logged in`);
  };
}

let userOne = new User("budi@gmail.com", "Budi");
let userTwo = new User("bagus@gmail.com", "Bagus");

console.log(userOne);
userTwo.login();
