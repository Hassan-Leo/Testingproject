let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");

chai.should();
chai.use(chaihttp);
auth={
    "Authentication":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWFpbCI6Im11aGFtbWFkcmFmYXkxNTFAZ21haWwuY29tIiwibmFtZSI6IlJhZmF5Iiwicm9sZXMiOlsiU3VwZXJBZG1pbiJdLCJpYXQiOjE2MTgxNjg2MjMsImV4cCI6MTYxODM0MTQyM30.V8nzsm3xlmPuO-YtEjLrpiHyUW5tBW2YaERocTRZrQg"
} 
server_url="http://certifis.herokuapp.com/api"

describe("Logged User Details Testing", () => {
    describe("To view the users details",() => {
        it("To Get Status 200 and retrieve an object", (done) =>{
            chai.request(server_url)
                .get("/users")
                .type('json')
                .send(auth)
                .end((err,response) => {
                    expect(response).should.have.status(200);
                    expect(response).to.be.a('Object');
                    expect(response).to.be.json;
                });
            done();
        });
        it("To check the object in the retreived data", (done) =>{
            chai.request(server_url)
                .get("/users")
                .type('json')
                .send(auth)
                .end((err,response) => {
                    for (i=0;i<response.list.length;i++)
                    {
                        expect(response.list[i]).body.should.have.all.keys('status','roles','_id','name','email','__v');
                        expect(response.list[i]).body.to.have.property('status').to.be.a('Object');
                        expect(response.list[i]).body.to.have.property('roles').to.be.an('Array');
                    }
                    expect(response).body.to.have.property('totalcount').to.be.a('number');
                })
            done();
        });
        it("To check datatype of each property in retreived data", (done) =>{
            chai.request(server_url)
                .get("/users")
                .type('json')
                .send(auth)
                .end((err,response) => {
                    for (i=0;i<response.list.length;i++)
                    {
                        expect(response.list[i].status).to.have.property('active').to.be.a('boolean').eq('true');
                        expect(response.list[i]).body.should.have.property('roles[0]').to.be.a('string');
                        expect(response.list[i].roles[0]).to.have.oneOf(['SuperAdmin','Admin','Issuer']);
                        expect(response.list[i]).body.should.have.property('_id').to.be.a('string');
                        expect(response.list[i]).body.should.have.property('name').to.be.a('string');
                        expect(response.list[i]).body.should.have.property('email').to.be.a('string').eq(raw.email);
                        expect(response.list[i]).body.should.have.property('register_date').to.be.a('string');
                        expect(response.list[i]).body.should.have.property('__v').to.be.a('number');
                    }
                    expect(response.totalcount).to.be.greaterThanOrEqual(1);
                });
            done();
        });
    });
    describe("To check when non existing trys to retreive data", ()=> {
        it("To get status 401 and object be null", (done)=> {
            chai.request(server_url)
                .get("/users")
                .type('json')
                .send(auth)
                .end((err,response) =>{
                    expect(response).to.have.status(401);
                    expect(response).to.be.null;
                })
            done();
        })
    });
});