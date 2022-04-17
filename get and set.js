// Only change code below this line
class Thermostat{
  constructor(temperature){
    this.temperature = temperature;
  }

  get CelsiusTemp(){
    return 5/9 * (this.temperature - 32)
  }

  set CelsiusTemp(newCelsius){
    this.temperature = newCelsius * 9.0 / 5 + 32
  }

}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log(thermos);
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp)
