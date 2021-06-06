let token_data=require("./Fetchtoken");
let data=require("./Ecert.postman_collection.json");
let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");

chai.should();
chai.use(chaihttp);
token2="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDY5Y2I2MTI2NDk4YzE3ODRhOTY3OTciLCJlbWFpbCI6Imhhc3NhbnNpZGRpcWkwQGdtYWlsLmNvbSIsIm5hbWUiOiJIYXNzYW4gQWhtZWQiLCJyb2xlcyI6WyJJc3N1ZXIiLCJBZG1pbiJdLCJvcmdfaWQiOiI2MDYwNmQ4Zjk1NDVhZjM0NTg5ZDY1MDciLCJpYXQiOjE2MjA1NTQ4ODYsImV4cCI6MTYyMDcyNzY4Nn0.ord4zB4OPk8-zzgaR4qwsaxaihkWE44N1pkaYWvXTGg"
/*for (i=0;i<data.item.length;i++){
console.log(data.item[i].name)
console.log(data.item[i].request.method)
console.log(i)
console.log("Next")
}*/
/* raw={"email":"muhammadrafay151@gmail.com","password":"123123"}
a=token_data.gettoken(raw.email,raw.password);
token="Bearer "+a
console.log(token); */
/* describe("",()=>{
    it("TEstig code",(done) => {
        chai.request(data.item[11].name)
            .get("/6097e6babdddc11f4c2d76f5")
            .set(auth, token2)
            .end((err,resp)=> {
                if(resp.body.empty != false){
                    console.log(resp.status);
                    console.log(resp.body);
                    console.log("has data");
                }
                else{
                    console.log("no data")
                }
            })
        done();
    })
}) */

auth="Authorization"
token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNzNlNGIyYmVmZTQ4NDg4NGMyMTAiLCJlbWFpbCI6Iml5YXFvb2I2MkBnbWFpbC5jb20iLCJuYW1lIjoiTXVoYW1tYWQgSXNtYWlsIiwicm9sZXMiOlsiSXNzdWVyIiwiQWRtaW4iXSwib3JnX2lkIjoiNjA2MDZkMGE5NTQ1YWYzNDU4OWQ2NTA1IiwiaWF0IjoxNjIxMjUxMzQ1LCJleHAiOjE2MjE0MjQxNDV9.KflJIrX08v0jotyp3iizH5cdnREhcrRv_c6VN_MMPaI"
const object_data=[];
chai.request(data.item[7].name)
.get("")
.set(auth,token)
.end((err,resp)=>{
    console.log(resp)
    object_data.push(resp);
})
console.log(object_data);

