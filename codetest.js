let data=require("../Testingproject/Ecert.postman_collection.json");
let token_data=require("./Fetchtoken");

var ab
for (i=0;i<data.item.length;i++){
console.log(data.item[i].name)
console.log(data.item[i].request.method)
console.log(i)
console.log("Next")
}
/* raw={"email":"muhammadrafay151@gmail.com","password":"123123"}
a=token_data.gettoken(raw.email,raw.password);
a.then(resp => resp.json)
.then(json => {
    ab=json;
});
token="Bearer "+ab
console.log(token); */

