// Setup
let j= 0;

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line

for (let i=0; i<contacts.length; i++){
  

console.log(contacts[i].firstName +" "+ contacts[i].hasOwnProperty(prop) )
  
  if (contacts[i].firstName == name && contacts[i].hasOwnProperty(prop)){        
        j=1;     
  }
    else if (contacts[i].firstName != name){
      j=2;      
    }
    else if(!(contacts[i].hasOwnProperty(prop))){
      j=3;
    }
 console.log(j)
  switch(j){
    case 1: return contacts[i][prop];
    case 2: return "No such contact";
    case 3: return "No such property";
      
  }
  
}

 
  


  // Only change code above this line
}




output = lookUpProfile("Kristian", "lastName");
console.log(output + " 54");