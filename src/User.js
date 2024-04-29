class User {
  constructor(username, password, age) {
      this.username = username;
      this.password = password;
      this.age = age;
      this.loggedIn = false; // Initially, user is not logged in
  }

  login(password) {
    if(passowrd === this.password){
      this.loggedIn = true;
      console.log(`${this.username} Logged in`)
    } else {
      throw new Error('Incorrect password');
    }
  }
  logout() {
    this.loggedIn = false;
    console.log(`User ${this.username} has been logged out.`);
  }
}

module.exports = User
