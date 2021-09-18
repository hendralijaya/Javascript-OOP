function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}
User.prototype.login = function () {
  this.online = true;
  console.log(`${this.email} has logged in`);
};
User.prototype.logout = function () {
  this.online = false;
  console.log(`${this.email} has logged out`);
};

function Admin(...args) {
  User.apply(this, args);
  this.role = `Super Admin`;
}
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (u) {
  users = users.filter((user) => user.email != u.email);
};

let userOne = new User("budi@gmail.com", "Budi");
let userTwo = new User("bagus@gmail.com", "Bagus");
let admin = new Admin("admin@gmail.com", "admin");

users = [userOne, userTwo, admin];
