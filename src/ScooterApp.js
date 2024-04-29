// require the User and Scooter classes - see where they can be used in ScooterApp.js
const Scooter = require("./Scooter");
const User = require('./User');

class ScooterApp {
  // ScooterApp code here
  constructor() {
    this.stations = {
        "Station A": [],
        "Station B": [],
        "Station C": []
    };
    this.registeredUsers = {};
  }

  registeredUsers(username, password, age){
    if(age<18){
        throw new Error("Must be 18 or older to register");
    }
    if(this.registeredUsers[username]){
        throw new Error("User has already been registered");
    }
    const newUser = new User(username, password, age);
    this.registeredUsers[username] = newUser;
    console.log(`New user ${username} has been registered`);
    return newUser;
}

  loginUser(username, password) {
    const user = this.registeredUsers[username];
    if (!user || user.password !== password) {
        throw new Error("Password and/or user does not match");
    }
    user.login(password);
}

logoutUser(username) {
    const user = this.registeredUsers[username];
    if (user) {
      user.logout();
    }
    console.log("Logged out!")
  }

  createScooter(stations){
    if (!this.stations[station]) {
      throw new Error('No such station');
    }

    const scooter = new Scooter(station);
    console.log('Created new scooter');
    return scooter;
  }

  dockScooter(scooter, station) {
    if (!this.stations.hasOwnProperty(station)) {
        throw new Error('No such station');
    }
    if (this.stations[station].includes(scooter)) {
        throw new Error('Scooter already at station');
    }
    this.stations[station].push(scooter);
    console.log('Scooter is docked.');
  }

  rentScooter(scooter, user){
    if (scooter.isRented()) {
      throw new Error('Scooter already rented');
    }
    let found = false;
    for (const station of Object.values(this.stations)) {
      const index = station.indexOf(scooter);
      if (index !== -1) {
          station.splice(index, 1);
          found = true;
          break;
      }
      scooter.rent(user);
      console.log('Scooter is rented.');
    }
  }

  print() {
    console.log("\nRegistered Users:");
    for (const usernames in this.registeredUsers) {
        const user = this.registeredUsers[usernames];
        console.log(`Username: ${user.usernames}, Age: ${user.age}`); // Change user.usernames to user.username
    }

    console.log("\nStations:");
    for (const station in this.stations) {
        const numberOfScoots = this.stations[station].length;
        console.log(`${station}: ${numberOfScoots} scooter${numberOfScoots !== 1 ? 's' : ''}`);
    }
  }
}  

module.exports = ScooterApp
