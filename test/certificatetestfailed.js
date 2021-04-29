let data=require("../Ecert.postman_collection.json");
let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");

chai.should();
chai.use(chaihttp);
auth="Authorization"
token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNzNlNGIyYmVmZTQ4NDg4NGMyMTAiLCJlbWFpbCI6Iml5YXFvb2I2MkBnbWFpbC5jb20iLCJuYW1lIjoiTXVoYW1tYWQgSXNtYWlsIiwicm9sZXMiOlsiSXNzdWVyIiwiQWRtaW4iXSwib3JnX2lkIjoiNjA2MDZkMGE5NTQ1YWYzNDU4OWQ2NTA1IiwiaWF0IjoxNjE5NzA4MTE4LCJleHAiOjE2MTk4ODA5MTh9.vZevnyZoRYsXHEwz7-aC5bJJlV1Z95zZbOCmtmt4tsA"

describe("The error policies for the Single certificate checking",()=> {
    describe("To check details of forbidden access",()=> {
        it("To Check the status got",() => {
            
        })
    })
})