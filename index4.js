var someObject={
"2": {
  "nome": "sou1",
  "email": "adsa@lala.com",
  "gênero": "masculino",
  "id": 1,
  "pos": 0
},
"3": {
  "nome": "sou1",
  "email": "adsa@lala.com",
  "gênero": "masculino",
  "id": 1,
  "pos": 1
}};
console.log(Object.keys(someObject)[0]);
  delete someObject[Object.keys(someObject)[0]];
  console.log(someObject);