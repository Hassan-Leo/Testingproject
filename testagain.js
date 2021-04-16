let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");
chai.should();
chai.use(chaihttp);

token_1="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWF"
auth="Authorization"
token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWFpbCI6Im11aGFtbWFkcmFmYXkxNTFAZ21haWwuY29tIiwibmFtZSI6IlJhZmF5Iiwicm9sZXMiOlsiU3VwZXJBZG1pbiJdLCJpYXQiOjE2MTg1OTY1NDcsImV4cCI6MTYxODc2OTM0N30.tiHGQc-AF8FQ44g2mZ-Pp8ESIpnQ3RNd_K_t3DIxd68"
server="http://certifis.herokuapp.com/api"
raw= {"email":"muhammadray151@gmail.com","password":"123123"}

describe("Checking Errors",()=>{
    it("Response should have status 401 and be a object with wrong email", (done) =>{
        chai.request(server)
            .post("/account/login")
            .type('json')
            .send(raw)
            .end((err,resp) =>{
                expect(resp.body).to.have.property('message').to.be.a('string').eq('Invalid username or password');
            })
        done();
    });
})