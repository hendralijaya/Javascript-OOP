let userOne = {
  email: "budi@gmail.com",
  name: "budi",
  login() {
    console.log(`${this.email} has logged in`);
  },
  logout() {
    console.log(`${this.email} has logged out`);
  },
};

console.log(userOne.name);
