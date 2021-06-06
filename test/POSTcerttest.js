let data=require("../Ecert.postman_collection.json");
let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");
const token_data=require("../Fetchtoken");

chai.should();
chai.use(chaihttp);
auth="Authorization"
token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNzNlNGIyYmVmZTQ4NDg4NGMyMTAiLCJlbWFpbCI6Iml5YXFvb2I2MkBnbWFpbC5jb20iLCJuYW1lIjoiTXVoYW1tYWQgSXNtYWlsIiwicm9sZXMiOlsiSXNzdWVyIiwiQWRtaW4iXSwib3JnX2lkIjoiNjA2MDZkMGE5NTQ1YWYzNDU4OWQ2NTA1IiwiaWF0IjoxNjIxMjUxMzQ1LCJleHAiOjE2MjE0MjQxNDV9.KflJIrX08v0jotyp3iizH5cdnREhcrRv_c6VN_MMPaI"
var object_data;
chai.request(data.item[7].name)
.get("")
.set(auth,token)
.end((err,resp)=>{
    object_data=resp;
})
console.log(object_data);