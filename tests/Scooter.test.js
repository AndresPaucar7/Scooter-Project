const Scooter = require('../src/Scooter')

describe('scooter methods', () => {
  let scooter;

  beforeEach(() => {
    scooter = new Scooter('Station A');
  });

  test("Throw error if person tries to take out bike and charge isn't full", () => {
    scooter.charge = 10;
    expect(() => scooter.rent('John')).toThrowError("Bike needs charge");
  });

  test("Use method to set dock station", () => {
    const user = "Andres";
    scooter.user = user;
    scooter.dock("Station A");
    expect(scooter.user).toBeNull();
    expect(scooter.station).toEqual("Station A");
  });

  test("Take a broken bike and use requestRepair to fix it", () => {
    scooter.isBroken = true;
    scooter.requestRepair();
    setTimeout(() => {
      expect(scooter.isBroken).toBeFalsy();
    }, 3100);
  });
});
