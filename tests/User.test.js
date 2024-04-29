const User = require('../src/User')

const user = new User('Joe Bloggs', 'test123', 21)

// User tests here
describe('User property tests', () => {
  // test username
  test('username should be a string', () => {
    expect(typeof user.username).toBe('string')
  })
  // test password
  test("Password should be string", () => {
    expect(typeof user.password).toBe("string");
  });
  // test age
  test("Age should be int", () => {
    expect(typeof user.age).toBe('number');
  });
})

describe('logging and log out', () => {
// test login
test("Should log in user", () => {
  user.login('test123')
  user.logout();
  expect(user.loggedIn).toBe(false);
})
// test logout

test('Should not throw error if user is not logged in', () => {
  expect(() => {
    user.logout();
    }).not.toThrow(); 
  });
});