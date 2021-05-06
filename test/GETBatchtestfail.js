let data=require("../Ecert.postman_collection.json");
let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");
const token_data=require("../Fetchtoken");

chai.should();
chai.use(chaihttp);
auth="Authorization"

token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M3OGExMTRiZThkMjQ4MDYiLCJlbWFpbCI6Im11aGFtbWFkcmFmYXkxNTFAZ21haWwuY29tIiwibmFtZSI6IlJhZmF5Iiwicm9sZXMiOlsiU3VwZXJBZG1pbiJdLCJpYXQiOjE2MjAyMTE4ODYsImV4cCI6MTYyMDM4NDY4Nn0.FfjtlSf-p7ahMiSrSQVU66TRTPv4vXS1vBUWZqhxGvk"

describe("Testing the GET Batch retrival Data for Unauthorzied access",()=> {
    describe("When a user access data be Superadmin or other user",()=> {
        it("To check the status of the response",(done)=> {
            chai.request(data.item[7].name)
            .get("")
            .set(auth,token)
            .end((err,resp)=> {
                resp.should.have.status(403);
                resp.should.not.have.status(200);
                expect(resp.body).to.be.empty;
            });
            done();
        })
    })
})