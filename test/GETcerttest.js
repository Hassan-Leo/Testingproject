let data=require("../Ecert.postman_collection.json");
let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");
const token_data=require("../Fetchtoken");

chai.should();
chai.use(chaihttp);

auth="Authorization"
token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNzNlNGIyYmVmZTQ4NDg4NGMyMTAiLCJlbWFpbCI6Iml5YXFvb2I2MkBnbWFpbC5jb20iLCJuYW1lIjoiTXVoYW1tYWQgSXNtYWlsIiwicm9sZXMiOlsiSXNzdWVyIiwiQWRtaW4iXSwib3JnX2lkIjoiNjA2MDZkMGE5NTQ1YWYzNDU4OWQ2NTA1IiwiaWF0IjoxNjIwNjg1Mjk5LCJleHAiOjE2MjA4NTgwOTl9.lxIKu5RhgEly7S4H4fM8pDOA5hTmWOeIcPMkmos4a2A"
token1="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWFpbCI6Im11aGFtbWFkcmFmYXkxNTFAZ21haWwuY29tIiwibmFtZSI6IlJhZmF5Iiwicm9sZX"
raw= {"email":"iyaqoob62@gmail.com","password":"123123"}

describe("Testing the Certificate Retrival Data", ()=> {
    describe("To check the Single Certificate API's response which is GET reuqest", () => {
        it("To check the status of the Response",(done)=>{
            chai.request(data.item[3].name)
            .get("")
            .set(auth,token)
            .end((err,resp) =>{
                resp.should.have.status(200);
                resp.should.not.have.status(403);
                resp.should.not.have.status(401);
                resp.body.should.be.a('Object');
            })
            done();
        })
        it("To check response has all the required property",()=>{
            chai.request(data.item[3].name)
            .get("")
            .set(auth, token)
            .end((err, resp)=>{
                resp.body.should.have.keys("list","totalcount");
                for(i=0;i<resp.body.totalcount;i++){
                    resp.body.list[i].should.have.keys("issuedby","publish","issue_date","docType","_id","title","description","name","email","instructor_name","template_id","expiry_date","updatedby","__v");
                }
            })
        });
        it("TO check data types of the of the properties in response", (done)=> {
            chai.request(data.item[3].name)
            .get("")
            .set(auth, token)
            .end((err, resp)=>{
                resp.body.list.be.a('Array');
                for(i=0;i<resp.body.totalcount;i++){
                    resp.body.list[i].should.have.property("issuedby").to.be.a('Object');
                    resp.body.list[i].should.have.property("publish").to.be.a('Object');
                    resp.body.list[i].should.have.property("issue_date").to.be.a('string');
                    resp.body.list[i].should.have.property("docType").to.be.a('string');
                    resp.body.list[i].should.have.property("_id").to.be.a('string');
                    resp.body.list[i].should.have.property("title").to.be.a('string');
                    resp.body.list[i].should.have.property("description").to.be.a('string');
                    resp.body.list[i].should.have.property("name").to.be.a('string');
                    resp.body.list[i].should.have.property("email").to.be.a('string');
                    resp.body.list[i].should.have.property("instructor_name").to.be.a('string');
                    resp.body.list[i].should.have.property("template_id").to.be.a('string');
                    resp.body.list[i].should.have.property("expiry_date").to.be.a('string');
                    resp.body.list[i].should.have.property("updatedby").to.be.a('Array');
                    resp.body.list[i].should.have.property("__v").to.be.a('number');
                    resp.body.list[i].issuedby.should.have.property("issuer_name").to.be.a("string");
                    resp.body.list[i].issuedby.should.have.property("issuer_email").to.be.a("string");
                    resp.body.list[i].issuedby.should.have.property("org_name").to.be.a("string");
                    resp.body.list[i].issuedby.should.have.property("org_id").to.be.a("string");
                    resp.body.list[i].publish.should.have.property("status").to.be.a('boolean');
                    resp.body.list[i].publish.should.have.property("processing").to.be.a('boolean');
                    if (resp.body.list[i].updatedby.length>0){
                        for(j=0;j<resp.body.list[i].updatedby.length;j++){
                            resp.body.list[i].updatedby[j].should.be.a('Object');
                            resp.body.list[i].updatedby[j].should.have.property("Date");
                            resp.body.list[i].updatedby[j].should.have.property("name");
                            resp.body.list[i].updatedby[j].should.have.property("email");
                        }
                    }
                }
                resp.body.should.have.property("totalcount").to.be.a('number');
            })
            done();
        });
        it("To check length of the arrays and certian equal values in response", (done)=>{
            chai.request(data.item[3].name)
            .get("")
            .set(auth, token)
            .end((err, resp)=>{
                for(i=0;i<resp.body.totalcount;i++){
                    if (resp.body.list[i].updatedby.length > 0){
                        for(j=0;j<resp.body.list[i].updatedby.length;j++){
                            resp.body.list[i].updatedby[j].should.have.property("Date").to.be.a('string');
                            resp.body.list[i].updatedby[j].should.have.property("name").to.be.a('string');
                            resp.body.list[i].updatedby[j].should.have.property("email").to.be.a('string').eql(raw.email);
                        }
                    }
                    expect(resp.body.list[i]).to.have.property("__v").eql(0);
                }
            })
            done();
        })
    })
})