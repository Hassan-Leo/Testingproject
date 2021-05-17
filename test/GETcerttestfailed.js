let data=require("../Ecert.postman_collection.json");
let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");
const token_data=require("../Fetchtoken");

chai.should();
chai.use(chaihttp);

auth="Authorization"
raw={"email":"muhammadrafay151@gmail.com","password":"123123"}
token ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmRjZDk1NDVhZjM0NTg5ZDY1MDgiLCJlbWFpbCI6Im11aGFtbWFkYWFtaXIuYWoxQGdtYWlsLmNvbSIsIm5hbWUiOiJNdWhhbW1hZCBBYW1pciIsInJvbGVzIjpbIklzc3VlciIsIkFkbWluIl0sIm9yZ19pZCI6IjYwNjA2ZDhmOTU0NWFmMzQ1ODlkNjUwNyIsImlhdCI6MTYyMDIwNTE5MCwiZXhwIjoxNjIwMzc3OTkwfQ.FDLdQmunI-LiuksOFmLF-YXfAnq7UJJXJ-7ya44wlNU"

describe("The error policies for the Single certificate checking",()=> {
  describe("To check details of forbidden access",()=> {
    it("To Check the status 403 got superadmin access data",(done) => {
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
    it("To Check the status 403 got unauthorized user access data",(done) => {
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