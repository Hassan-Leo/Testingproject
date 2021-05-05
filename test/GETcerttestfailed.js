let data=require("../Ecert.postman_collection.json");
let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");
const token_data=require("../Fetchtoken");

chai.should();
chai.use(chaihttp);
auth="Authorization"
raw={"email":"muhammadrafay151@gmail.com","password":"123123"}
token ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWFpbCI6Im11aGFtbWFkcmFmYXkxNTFAZ21haWwuY29tIiwibmFtZSI6IlJhZmF5Iiwicm9sZXMiOlsiU3VwZXJBZG1pbiJdLCJpYXQiOjE2MjAxNTk1OTUsImV4cCI6MTYyMDMzMjM5NX0.4ugBHTEUtv1hYdqtJruPikIiaCFguhzh2rCySAUFeK8"

describe("The error policies for the Single certificate checking",()=> {
  describe("To check details of forbidden access",()=> {
    it("To Check the status got",(done) => {
      chai.request(data.item[3].name)
        .get("")
        .set(auth,token)
        .end((err, resp) => {
          resp.should.have.status(403);
          resp.should.not.have.status(200);
          resp.body.should.be.empty;      
        })
        done();
    })
  })
})