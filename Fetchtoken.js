const fetch = require("node-fetch");
var obj =[];
var data= {
    "email":"iyaqoob62@gmail.com",
    "password":"123123"
}

fetch('http://certifis.herokuapp.com/api/account/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
}).then(res => res.json())
  .then(data => obj.push(data));

console.log(obj)
