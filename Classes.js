class House {
  constructor(color='Not filled', floors = 'Not specified'){
    this.color = color;
    this.floors = floors;
  }
  getFlooring(){
    return 'Wooden Floor'
  }
  
}

const house1 = new House('blue', 9);
const house2 = new House()
console.log(house1,house2)

console.log(house1.floors)
console.log(house2.getFlooring())
