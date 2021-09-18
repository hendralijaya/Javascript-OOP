class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(`${this.email} has logged in`);
  }
  logout() {
    console.log(`${this.email} has logged out`);
  }
}

let userOne = new User("budi@gmail.com", "Budi");
let userTwo = new User("bagus@gmail.com", "Bagus");

console.log(userOne);
console.log(userTwo);
userOne.login();
userTwo.logout();
