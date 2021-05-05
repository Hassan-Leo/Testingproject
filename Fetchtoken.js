const fetch = require("node-fetch");
var obj =null;

async function gettoken(email, pass) {
  var data1 = {
    "email": email,
    "password": pass
  }
  res = await fetch('http://certifis.herokuapp.com/api/account/login', {
    method: 'POST',
    body: JSON.stringify(data1),
    headers: { 'Content-Type': 'application/json' }
  })
  obj=await res.json()
  return obj.token
}
module.exports.gettoken=gettoken;

