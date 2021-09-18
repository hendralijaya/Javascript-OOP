class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }
  login() {
    console.log(`${this.email} has logged in`);
    return this;
  }
  logout() {
    console.log(`${this.email} has logged out`);
    return this;
  }
  updateScore() {
    this.score++;
    console.log(`${this.email} score is now ${this.score}`);
    return this;
  }
}

let userOne = new User("budi@gmail.com", "Budi");
let userTwo = new User("bagus@gmail.com", "Bagus");

userOne.login().updateScore().updateScore().logout();
