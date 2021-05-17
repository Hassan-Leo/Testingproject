let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");
let data_url= require("./Ecert.postman_collection.json")
chai.should();
chai.use(chaihttp);

token_1="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWFpbCI6Im11aGFtbWFkcmFmYXkxNTFAZ21haWwuY29tIiwibmFtZSI6IlJhZmF5Iiwicm9sZXMiOlsiU3VwZXJBZG1pbiJdLCJpYXQiOjE2MjAwNDcyMzEsImV4cCI6MTYyMDIyMDAzMX0.ni04-5q_KU9yTIyzKTfQw_QaPaMCR1DB0efIM-Nt0z8"
auth="Authorization"
token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNzNlNGIyYmVmZTQ4NDg4NGMyMTAiLCJlbWFpbCI6Iml5YXFvb2I2MkBnbWFpbC5jb20iLCJuYW1lIjoiTXVoYW1tYWQgSXNtYWlsIiwicm9sZXMiOlsiSXNzdWVyIiwiQWRtaW4iXSwib3JnX2lkIjoiNjA2MDZkMGE5NTQ1YWYzNDU4OWQ2NTA1IiwiaWF0IjoxNjIxMjUxMzQ1LCJleHAiOjE2MjE0MjQxNDV9.KflJIrX08v0jotyp3iizH5cdnREhcrRv_c6VN_MMPaI"
token2="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWFpbCI6Im11aGFtbWFkcmFmYXkxNTFAZ21haWwuY29tIiwibmFtZSI6IlJhZmF5Iiwicm9sZXMiOlsiU3VwZXJBZG1pbiJdLCJpYXQiOjE2MjEyNTEzMzUsImV4cCI6MTYyMTQyNDEzNX0.aytA-ZJlD5zAtdgSTvV47s8mebUKTQ9gQ_2v4c2CvgQ"
raw= {"email":"iyaqoob62@gmail.com","password":"123123"}

describe("Checking Errors",()=>{
    it("TO check data types of the of the properties in response", (done)=> {
        chai.request(data_url.item[3].name)
        .get("")
        .set(auth, token)
        .end((err, resp)=>{
            expect(resp.body.list).to.be.an('Array');
            if(resp.body.list.length> 0){
                for(i=0;i<resp.body.list.length;i++){
                    expect(resp.body.list[i].issuedby).to.be.a('Object');
                    expect(resp.body.list[i].publish).to.be.a('Object');
                    expect(resp.body.list[i].issue_date).to.be.a('string');
                    expect(resp.body.list[i].docType).to.be.a('string');
                    expect(resp.body.list[i]._id).to.be.a('string');
                    expect(resp.body.list[i].title).to.be.a('string');
                    expect(resp.body.list[i].description).to.be.a('string');
                    expect(resp.body.list[i].name).to.be.a('string');
                    expect(resp.body.list[i].email).to.be.a('string');
                    expect(resp.body.list[i].instructor_name).to.be.a('string');
                    expect(resp.body.list[i].template_id).to.be.a('string');
                    if(resp.body.list[i].expiry_date){
                        expect(resp.body.list[i].expiry_date).to.be.a('string');
                    }
                    expect(resp.body.list[i].updatedby).to.be.a('Array');
                    expect(resp.body.list[i].__v).to.be.a('number');
                    expect(resp.body.list[i].issuedby.issuer_name).to.be.a("string");
                    expect(resp.body.list[i].issuedby.issuer_email).to.be.a("string");
                    expect(resp.body.list[i].issuedby.org_name).to.be.a("string");
                    expect(resp.body.list[i].issuedby.org_id).to.be.a("string");
                    expect(resp.body.list[i].publish.status).to.be.a('boolean');
                    expect(resp.body.list[i].publish.processing).to.be.a('boolean');
                    if (resp.body.list[i].updatedby.length>0){
                        for(j=0;j<resp.body.list[i].updatedby.length;j++){
                            expect(resp.body.list[i].updatedby[j]).to.be.a('Object');
                            expect(resp.body.list[i].updatedby[j].Date).to.be.a('string');
                            expect(resp.body.list[i].updatedby[j].name).to.be.a('string');
                            expect(resp.body.list[i].updatedby[j].email).to.be.a('string');
                        }
                    }
                }
            }
            expect(resp.body.totalcount).to.be.a('number');
        })
        done();
    });
});
