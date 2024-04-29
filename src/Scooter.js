class Scooter {
  constructor(station){
    this.station = station;    
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;      
  }
  
  rent(user){
    if(this.charge > 20 && !this.isBroken){
      this.station = null;
      this.user = user;

      console.log(`${this.user} has taken bike out of station
                    serial number: ${this.serial}`);
    } else {
      if(this.charge <= 20){
        throw new Error("Bike needs charge"); // Throw Error object
      } else {
        throw new Error("Bike needs repair"); // Throw Error object
      }
    }
  }

  dock(station){
    this.station = station;
    this.user = null;

    console.log(`${this.user} has returned bike to station number ${this.station}`)
  }

  startRecharge(){
    console.log(`Scooter #${this.serial} has began recharging`)
    const chargeIncrement = 10;    
    const maxCharge = 100;
    const timer = 1000;

    const rechargeTimer = setInterval(() => {
      if(this.charge < maxCharge){
        this.charge += chargeIncrement;

        if(this.charge > maxCharge){
          this.charge = maxCharge;
        }

        console.log(`Scooter #${this.serial} at ${this.charge}%`)
        
      } else {
        clearInterval(rechargeTimer);
        console.log(`Scooter #${this.serial} fully charged`)
      }
    }, timer);
  }

  requestRepair(){
    const timer = 3000;
    console.log(`Scooter #${this.serial} is under repair`)

    setTimeout(() => {
      this.isBroken = false;
      console.log(`Scooter #${this.serial} successfully repaired`)
    }, timer);
  }
}

Scooter.nextSerial = 1;

module.exports = Scooter;