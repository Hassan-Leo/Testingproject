let data=require("../Ecert.postman_collection.json");
let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");

chai.should();
chai.use(chaihttp);

auth="Authorization"
raw={"email":"hassansiddiqi0@gmail.com","password":"123123"}
raw1= {"email":"muhammadaamir.aj1@gmail.com","password":"123123"}

token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDY5Y2I2MTI2NDk4YzE3ODRhOTY3OTciLCJlbWFpbCI6Imhhc3NhbnNpZGRpcWkwQGdtYWlsLmNvbSIsIm5hbWUiOiJIYXNzYW4gQWhtZWQiLCJyb2xlcyI6WyJJc3N1ZXIiLCJBZG1pbiJdLCJvcmdfaWQiOiI2MDYwNmQ4Zjk1NDVhZjM0NTg5ZDY1MDciLCJpYXQiOjE2MjAwNDk4MTUsImV4cCI6MTYyMDIyMjYxNX0.tY2MNsfJ84VosJK-waGQJK3HhKEFXK-0mtX9T8Lw75g"
token1="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmRjZDk1NDVhZjM0NTg5ZDY1MDgiLCJlbWFpbCI6Im11aGFtbWFkYWFtaXIuYWoxQGdtYWlsLmNvbSIsIm5hbWUiOiJNdWhhbW1hZCBBYW1pciIsInJvbGVzIjpbIklzc3VlciIsIkFkbWluIl0sIm9yZ19pZCI6IjYwNjA2ZDhmOTU0NWFmMzQ1ODlkNjUwNyIsImlhdCI6MTYyMDA0ODU4NiwiZXhwIjoxNjIwMjIxMzg2fQ.wgL5o1qJPoNRDQX8Z6kSaYQ2nODCNRVpZsPp-6iwhBE"

describe("Testing GET api Organization for Unauthorized Access", ()=> {
    describe("When admin or issuer user access the data", ()=> {
        it("(Admin)To check the response of the request", (done)=>{
            chai.request(data.item[16].name)
            .get("")
            .set(auth, token1)
            .end((err,resp)=> {
                expect(resp).to.have.status(403);
                expect(resp).to.not.have.status(200);
                expect(resp.body).to.be.empty;
                if(err != null){
                    console.log(err)
                }
            })
            done();
        })
        it("(Issuer)To check the response of the request", (done)=>{
            chai.request(data.item[16].name)
            .get("")
            .set(auth, token)
            .end((err,resp)=> {
                expect(resp).to.have.status(403);
                expect(resp).to.not.have.status(200);
                expect(resp.body).to.be.empty;
                if(err != null){
                    console.log(err)
                }
            })
            done();
        })
    })
})