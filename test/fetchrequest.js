const fetch = require("node-fetch");

/*var data= {
    "email":"muhammadrafay151@gmail.com",
    "password":"123123"
}

fetch('http://certifis.herokuapp.com/api/account/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
}).then(res => res.json())
  .then(json => console.log(json));*/

 
var requestOptions = {
  method: 'GET',
  headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWFpbCI6Im11aGFtbWFkcmFmYXkxNTFAZ21haWwuY29tIiwibmFtZSI6IlJhZmF5Iiwicm9sZXMiOlsiU3VwZXJBZG1pbiJdLCJpYXQiOjE2MTgxNjg2MjMsImV4cCI6MTYxODM0MTQyM30.V8nzsm3xlmPuO-YtEjLrpiHyUW5tBW2YaERocTRZrQg"},
  redirect: 'follow'
};
  
fetch("http://certifis.herokuapp.com/api/users", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));