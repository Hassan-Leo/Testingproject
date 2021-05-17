let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");
let data_url= require("./Ecert.postman_collection.json")
chai.should();
chai.use(chaihttp);

token_1="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWFpbCI6Im11aGFtbWFkcmFmYXkxNTFAZ21haWwuY29tIiwibmFtZSI6IlJhZmF5Iiwicm9sZXMiOlsiU3VwZXJBZG1pbiJdLCJpYXQiOjE2MjAwNDcyMzEsImV4cCI6MTYyMDIyMDAzMX0.ni04-5q_KU9yTIyzKTfQw_QaPaMCR1DB0efIM-Nt0z8"
auth="Authorization"
token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNzNlNGIyYmVmZTQ4NDg4NGMyMTAiLCJlbWFpbCI6Iml5YXFvb2I2MkBnbWFpbC5jb20iLCJuYW1lIjoiTXVoYW1tYWQgSXNtYWlsIiwicm9sZXMiOlsiSXNzdWVyIiwiQWRtaW4iXSwib3JnX2lkIjoiNjA2MDZkMGE5NTQ1YWYzNDU4OWQ2NTA1IiwiaWF0IjoxNjIwMjE4NDQ2LCJleHAiOjE2MjAzOTEyNDZ9.5fNKuAGuQ8uh27mBgz3WknM3wqTW4eZTmIwp8s4NZIU"
token2="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDY5Y2I2MTI2NDk4YzE3ODRhOTY3OTciLCJlbWFpbCI6Imhhc3NhbnNpZGRpcWkwQGdtYWlsLmNvbSIsIm5hbWUiOiJIYXNzYW4gQWhtZWQiLCJyb2xlcyI6WyJJc3N1ZXIiLCJBZG1pbiJdLCJvcmdfaWQiOiI2MDYwNmQ4Zjk1NDVhZjM0NTg5ZDY1MDciLCJpYXQiOjE2MjAyMDAxNjMsImV4cCI6MTYyMDM3Mjk2M30.fmkPHsPCpgRRCgVZa-l3PGE_8p917-tVA02QoraT-iI"
raw= {"email":"iyaqoob62@gmail.com","password":"123123"}

describe("Checking Errors",()=>{
    it("To check the value of the properties",(done)=> {
        chai.request(data_url.item[11].name)
        .get("/608e9c18344e27305887ff22")
        .set(auth, token2)
        .end((err,resp)=> {
            resp.should.have.status(200);
            resp.should.not.have.status(403);
            resp.body.should.be.a('Object');
        })
        done();
    });
    it("To Check the values of the properties", (done)=>{
        chai.request(data_url.item[7].name)
        .get("")
        .set(auth,token2)
        .end((err,resp)=> {
            expect(resp.body.totalcount).to.be.greaterThanOrEqual(0);
            if (resp.body.totalcount>0){
                for (i=0;i<resp.body.totalcount;i++){
                    expect(resp.body.list[i].__v).to.be.equal(0);
                    expect(resp.body.list[i].publish).to.have.property("status").to.be.a('boolean').to.be.false;
                    expect(resp.body.list[i].publish).to.have.property("processing").to.be.a('boolean').to.be.false;
                }
            }
        });
        done();
    })
    it("To check the datatypes of the properties in the responsne object", (done)=> {
        chai.request(data_url.item[7].name)
        .get("")
        .set(auth,token2)
        .end((err,resp)=> {
            
            expect(resp.body).to.have.property("totalcount").to.be.a("number");
            if (resp.body.totalcount>0){
                for (i=0;i<resp.body.totalcount;i++){
                    expect(resp.body.list[i].createdby).to.have.keys("name","email","org_name","org_id").to.be.string;
                    expect(resp.body.list[i].publish).to.have.property("status").to.be.a('boolean');
                    expect(resp.body.list[i].publish).to.have.property("processing").to.be.a('boolean');
                    expect(resp.body.list[i].createdby).to.be.a('object');
                    expect(resp.body.list[i].publish).to.be.a('object');
                    if(resp.body.list[i].expiry_date == null){
                        expect(resp.body.list[i].expiry_date).to.be.null;
                    }
                    else{
                        expect(resp.body.list[i].expiry_date).to.be.a('string');
                    }
                    expect(resp.body.list[i].created_date).to.be.a('string');
                    expect(resp.body.list[i]._id).to.be.a('string');
                    expect(resp.body.list[i].title).to.be.a('string');
                    expect(resp.body.list[i].batch_name).to.be.a('string');
                    expect(resp.body.list[i].description).to.be.a('string');
                    expect(resp.body.list[i].logo).to.be.a('string');
                    expect(resp.body.list[i].signature).to.be.a('string');
                    expect(resp.body.list[i].instructor_name).to.be.a('string');
                    expect(resp.body.list[i].template_id).to.be.a('string');
                    expect(resp.body.list[i].__v).to.be.a('number');
                    for (j=0;j<resp.body.list[i].updatedby.length;j++){
                        expect(resp.body.list[i].updatedby[j]).to.have.keys("name","email","Date").to.be.string;
                    }
                }
            }
        })
        done();
    })
});
