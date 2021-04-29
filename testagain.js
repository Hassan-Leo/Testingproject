let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");
let data_url= require("./Ecert.postman_collection.json")
chai.should();
chai.use(chaihttp);

token_1="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWF"
auth="Authorization"
token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNzNlNGIyYmVmZTQ4NDg4NGMyMTAiLCJlbWFpbCI6Iml5YXFvb2I2MkBnbWFpbC5jb20iLCJuYW1lIjoiTXVoYW1tYWQgSXNtYWlsIiwicm9sZXMiOlsiSXNzdWVyIiwiQWRtaW4iXSwib3JnX2lkIjoiNjA2MDZkMGE5NTQ1YWYzNDU4OWQ2NTA1IiwiaWF0IjoxNjE5NzA3NTE5LCJleHAiOjE2MTk4ODAzMTl9.HWCD6Aat6SGTQaJIgwNrTzJjfsz969G4oGeZGPgOfZo"
server="http://certifis.herokuapp.com/api/certificate/"
raw= {"email":"iyaqoob62@gmail.com","password":"123123"}

describe("Checking Errors",()=>{
    it("To check response has all the required property",()=>{
        chai.request(data_url.item[3].name)
        .get("")
        .set(auth, token)
        .end((err, resp)=>{
            resp.body.should.have.keys("list","totalcount");
            for(i=0;i<resp.body.totalcount;i++){
                resp.body.list[i].should.have.keys("issuedby","publish","issue_date","docType","_id","title","description","name","email","instructor_name","template_id","expiry_date","updatedby","__v");
            }
        })
    });
});