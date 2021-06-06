const fetch = require("node-fetch");
const api_urls=require("./Ecert.postman_collection.json");
var obj =null;
url =api_urls.item[7].name
/* async function gettoken(email, pass) {
  var data1 = {
    "email": email,
    "password": pass
  }
  res = await fetch('http://certifis.herokuapp.com/api/account/login', {
    method: 'POST',
    body: JSON.stringify(data1),
    headers: { 'Content-Type': 'application/json' }
  })
  obj=res.json()
  return obj.token
}
module.exports.gettoken=gettoken; */
async function getapi(url) {
  // Storing response
  const response = await fetch(url, {
    method:'GET',
    headers:{
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNzNlNGIyYmVmZTQ4NDg4NGMyMTAiLCJlbWFpbCI6Iml5YXFvb2I2MkBnbWFpbC5jb20iLCJuYW1lIjoiTXVoYW1tYWQgSXNtYWlsIiwicm9sZXMiOlsiSXNzdWVyIiwiQWRtaW4iXSwib3JnX2lkIjoiNjA2MDZkMGE5NTQ1YWYzNDU4OWQ2NTA1IiwiaWF0IjoxNjIxMjUxMzQ1LCJleHAiOjE2MjE0MjQxNDV9.KflJIrX08v0jotyp3iizH5cdnREhcrRv_c6VN_MMPaI'
    }
  });
  // Storing data in form of JSON
  obj=response.json()
  return obj
}
// Calling that async function
getapi(api_urls);

