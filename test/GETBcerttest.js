let data=require("../Ecert.postman_collection.json");
let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");
const token_data=require("../Fetchtoken");

chai.should();
chai.use(chaihttp);
auth="Authorization"

raw1= {"email":"iyaqoob62@gmail.com","password":"123123"}
raw2={"email": "hassansiddiqi0@gmail.com", "password":"123123"}

token1="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWFpbCI6Im11aGFtbWFkcmFmYXkxNTFAZ21haWwuY29tIiwibmFtZSI6IlJhZmF5Iiwicm9sZXMiOlsiU3VwZXJBZG1pbiJdLCJpYXQiOjE2MTg1ODU0OTgsImV4cCI6MTYxODc1ODI5OH0.tDWO5PrvlfyTeMz0pJuYNh46ULIY7osCXRuB3_O_7jU"
token2="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWFpbCI6Im11aGFtbWFkcmFmYXkxNTFAZ21haWwuY29tIiwibmFtZSI6IlJhZmF5Iiwicm9sZX"

describe("Testing the GET Batch Certificate retirved data",()=> {
    describe("When Authorized user access data testing the response",()=> {
        it("TO check the status of the response gotten",(done)=> {
            chai.request(data.item[11].name)
            .get("/608e9c18344e27305887ff22")
            .set(auth, token)
            .end((err,resp)=> {
                if(expect(resp.body).to.be.empty == false){
                    resp.should.have.status(200);
                    resp.should.not.have.status(403);
                    resp.body.should.be.a('Object');
                }
                else{
                    resp.should.have.status(404);
                    resp.body.should.be.empty;
                    resp.body.should.be.a('Object');
                }
            })
            done();
        });
        it("To check the sturcture(properties) of the response got",(done)=> {
            chai.request(data.item[11].name)
            .get("/608e9c18344e27305887ff22")
            .set(auth, token2)
            .end((err,resp)=> {
                if(resp.body.empty != true){
                    resp.body.should.have.property("list");
                    resp.body.should.have.property("batch");
                    resp.body.should.have.property("totalcount");
                    if (resp.body.list.length>0){
                        for(i=0;i<resp.body.list.length;i++){
                            expect(resp.body.list[i]).to.have.keys("issuedby","issue_date","_id","batch_id","name","email","updatedby","__v");
                            expect(resp.body.list[i].issuedby).to.have.keys("name","email");
                            if (resp.body.list[i].updatedby.length > 0){
                                for(j=0;j<resp.body.list[i].updatedby.length;j++){
                                    expect(resp.body.list[i].updatedby[j]).to.have.keys("Date","name","email");
                                }
                            }
                        }
                    }
                    expect(resp.body.batch).to.have.all.keys("createdby","expiry_date","publish","created_date","_id","batch_name","title","description","instructor_name","logo","signature","template_id","updatedby","__v");
                    expect(resp.body.batch.createdby).to.have.keys("name","email","org_name","org_id");
                    expect(resp.body.batch.publish).to.have.keys("status","processing");
                    for(i=0;i<resp.body.batch.updatedby.length;i++){
                        expect(resp.body.batch.updatedby[i]).to.have.keys("name","email","Date");
                    }
                }
            })
            done();
        });
        it("To check the sturcture(properties) of the response got",(done)=> {
            chai.request(data.item[11].name)
            .get("/608e9c18344e27305887ff22")
            .set(auth, token2)
            .end((err,resp)=> {
                if(resp.body.empty != true){
                    resp.body.should.have.property("list").to.be.a("Array");
                    resp.body.should.have.property("batch").to.be.a("Object");
                    resp.body.should.have.property("totalcount").to.be.a("number");
                    if (resp.body.list.length>0){
                        for(i=0;i<resp.body.list.length;i++){
                            expect(resp.body.list[i].issuedby).to.be.a("object")
                            expect(resp.body.list[i].issuedby.name).to.be.a('string');
                            expect(resp.body.list[i].issuedby.email).to.be.a('string');
                            expect(resp.body.list[i].issue_date).to.be.a('string');
                            expect(resp.body.list[i]._id).to.be.a('string');
                            expect(resp.body.list[i].name).to.be.a('string');
                            expect(resp.body.list[i].batch_id).to.be.a('string');
                            expect(resp.body.list[i].email).to.be.a('string');
                            expect(resp.body.list[i].updatedby).to.be.a('Array');
                            expect(resp.body.list[i].__v).to.be.a('number');
                            if (resp.body.list[i].updatedby.length > 0){
                                for(j=0;j<resp.body.list[i].updatedby.length;j++){
                                    expect(resp.body.list[i].updatedby[j].Date).to.be.a('string');
                                    expect(resp.body.list[i].updatedby[j].name).to.be.a('string');
                                    expect(resp.body.list[i].updatedby[j].email).to.be.a('string');
                                }
                            }
                        }
                    }
                    expect(resp.body.batch).to.be.a('Object');
                    expect(resp.body.batch.createdby).to.be.a('Object');
                    if(resp.body.batch.expiry_date == null){
                        expect(resp.body.batch.expiry_date).to.be.null;
                    }
                    else{
                        expect(resp.body.batch.expiry_date).to.be.a('string');
                    }
                    expect(resp.body.batch.publish).to.be.a('Object');
                    expect(resp.body.batch._id).to.be.a('string');
                    expect(resp.body.batch.batch_name).to.be.a('string');
                    expect(resp.body.batch.title).to.be.a('string');
                    expect(resp.body.batch.description).to.be.a('string');
                    expect(resp.body.batch.logo).to.be.a('string');
                    expect(resp.body.batch.signature).to.be.a('string');
                    expect(resp.body.batch.template_id).to.be.a('string');
                    expect(resp.body.batch.__v).to.be.a('number');
                    expect(resp.body.batch.createdby.name).to.be.a('string');
                    expect(resp.body.batch.createdby.email).to.be.a('string')
                    expect(resp.body.batch.createdby.org_name).to.be.a('string')
                    expect(resp.body.batch.createdby.org_id).to.be.a('string')
                    expect(resp.body.batch.publish.status).to.be.a('boolean');
                    expect(resp.body.batch.publish.processing).to.be.a('boolean');
                    for(i=0;i<resp.body.batch.updatedby.length;i++){
                        expect(resp.body.batch.updatedby[i].name).to.be.a('string');
                        expect(resp.body.batch.updatedby[i].email).to.be.a('string');
                        expect(resp.body.batch.updatedby[i].Date).to.be.a('string');
                    }
                }
            })
            done();
        });
        it("To check the value of the properties",(done)=> {
            chai.request(data.item[11].name)
            .get("/608e9c18344e27305887ff22")
            .set(auth, token2)
            .end((err,resp)=> {
                resp.should.have.status(200);
                resp.should.not.have.status(403);
                resp.body.should.be.a('Object');
            })
            done();
        });
    })
})