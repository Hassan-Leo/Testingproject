let data=require("../Ecert.postman_collection.json");
let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");
const token_data=require("../Fetchtoken");

chai.should();
chai.use(chaihttp);
auth="Authorization"

raw= {"email":"iyaqoob62@gmail.com","password":"123123"}
raw1={"email": "hassansiddiqi0@gmail.com", "password":"123123"}

token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWFpbCI6Im11aGFtbWFkcmFmYXkxNTFAZ21haWwuY29tIiwibmFtZSI6IlJhZmF5Iiwicm9sZXMiOlsiU3VwZXJBZG1pbiJdLCJpYXQiOjE2MTg1ODU0OTgsImV4cCI6MTYxODc1ODI5OH0.tDWO5PrvlfyTeMz0pJuYNh46ULIY7osCXRuB3_O_7jU"
token1="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDY5Y2I2MTI2NDk4YzE3ODRhOTY3OTciLCJlbWFpbCI6Imhhc3NhbnNpZGRpcWkwQGdtYWlsLmNvbSIsIm5hbWUiOiJIYXNzYW4gQWhtZWQiLCJyb2xlcyI6WyJJc3N1ZXIiLCJBZG1pbiJdLCJvcmdfaWQiOiI2MDYwNmQ4Zjk1NDVhZjM0NTg5ZDY1MDciLCJpYXQiOjE2MjAyMDAxNjMsImV4cCI6MTYyMDM3Mjk2M30.fmkPHsPCpgRRCgVZa-l3PGE_8p917-tVA02QoraT-iI"

describe("Testing Batch Api for data retrival",()=> {
    describe("Testing GET request for Authorized personnel",()=> {
        it("To check the status of the response",(done)=> {
            chai.request(data.item[7].name)
            .get("")
            .set(auth,token1)
            .end((err,resp)=> {
                expect(resp).to.have.status(200);
                expect(resp.body).to.not.be.empty;
                expect(resp.body).to.be.a('Object');
                expect(resp).to.not.have.status(403);
            });
            done();
        });
        it("To check the structure(properties) of the object obtained", (done)=> {
            chai.request(data.item[7].name)
            .get("")
            .set(auth,token1)
            .end((err,resp)=>{
                expect(resp.body).to.have.ownProperty("list");
                expect(resp.body).to.have.property("totalcount");
                if (resp.body.totalcount>0){
                    for (i=0;i<resp.body.totalcount;i++){
                        expect(resp.body.list[i]).to.have.all.keys("createdby","publish","created_date","_id","batch_name","title","description","instructor_name","logo","signature","template_id","updatedby","__v");
                        expect(resp.body.list[i].createdby).to.have.keys("name","email","org_name","org_id");
                        expect(resp.body.list[i].publish).to.have.keys("status","processing");
                    }
                }
            })
            done();
        });
        it("To check the datatypes of the properties in the responsne object", (done)=> {
            chai.request(data.item[7].name)
            .get("")
            .set(auth,token1)
            .end((err,resp)=> {
                expect(resp.body).to.have.ownProperty("list").to.be.a('Array');
                expect(resp.body).to.have.property("totalcount").to.be.a("number");
                if (resp.body.totalcount>0){
                    for (i=0;i<resp.body.totalcount;i++){
                        expect(resp.body.list[i].createdby).to.have.keys("name","email","org_name","org_id").to.be.string;
                        expect(resp.body.list[i].publish).to.have.property("status").to.be.a('boolean');
                        expect(resp.body.list[i].publish).to.have.property("status").to.be.a('boolean');
                        expect(resp.body.list[i].publish).to.have.property("status").to.be.a('boolean');
                    }
                }
            })
            done();
        });
    })
})