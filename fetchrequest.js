const fetch = require("node-fetch");
const url_data =require("./Ecert.postman_collection.json")
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


/*var requestOptions = {
  method: 'GET',
  headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWFpbCI6Im11aGFtbWFkcmFmYXkxNTFAZ21haWwuY29tIiwibmFtZSI6IlJhZmF5Iiwicm9sZXMiOlsiU3VwZXJBZG1pbiJdLCJpYXQiOjE2MTg1ODY2NDgsImV4cCI6MTYxODc1OTQ0OH0.D8MQZ5ijG2MWxRLvpE-pJc8riUnLYwBu0Gppvg50k-o"},
  redirect: 'follow'
};
  
fetch("http://certifis.herokuapp.com/api/organization", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));*/



/*var data1= {
  "email":"muhammadrafay151@gmail.com",
  "password":"123123"
}

fetch('http://certifis.herokuapp.com/api/account/active?flag=0', {
  method: 'PUT',
  body: JSON.stringify(data1),
  headers: { 'Content-Type': 'application/json' }
}).then(res => res.json())
.then(result => {
  console.log('Success:', result)})
.catch(err => {
  console.error('Error:', err)
});*/

var requestOptions = {
  method: 'GET',
  headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNzNlNGIyYmVmZTQ4NDg4NGMyMTAiLCJlbWFpbCI6Iml5YXFvb2I2MkBnbWFpbC5jb20iLCJuYW1lIjoiTXVoYW1tYWQgSXNtYWlsIiwicm9sZXMiOlsiSXNzdWVyIiwiQWRtaW4iXSwib3JnX2lkIjoiNjA2MDZkMGE5NTQ1YWYzNDU4OWQ2NTA1IiwiaWF0IjoxNjE5NjI1ODg4LCJleHAiOjE2MTk3OTg2ODh9.nkSdxVogDZrbpr37S9CFU77jJSs4rz_HdMpy3jkWTcY"},
  redirect: 'follow'
};
  
fetch(url_data.item[3].name, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
