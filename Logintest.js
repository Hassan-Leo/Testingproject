let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");

chai.should();
chai.use(chaihttp);

raw= {"email":"muhammadrafay151@gmail.com","password":"123123"}

server_url="http://certifis.herokuapp.com/api"

describe("POST Login API Testing",() =>{
    describe("When the authentication is successful", () => {
        it("Response Status of should have 200 and be a object",(done) => {
            chai.request(server_url)
                .post("/account/login")
                .type('json')
                .send(raw)
                .end((err,response) => {
                    expect(response).should.have.status(200);
                    expect(response).to.be.a('Object');
                    expect(response).to.be.json;
                })
            done();
        }); 
        it("Object contain all the keys requried", (done) => {
            chai.request(server_url)
                .post("/account/login")
                .type('json')
                .send(raw)
                .end((err,response) =>{
                    response.body.should.have.keys('status','roles','_id','name','email','__v','token','RefreshToken');
                    expect(response).body.to.have.property('status').to.be.a('Object');
                    expect(response).body.to.have.property('roles').to.be.an('Array');
                })
            done();
        });
        it("Object contains data in correct data type", (done) => {
            chai.request(server_url)
                .post("/account/login")
                .type('json')
                .send(raw)
                .end((err,response) => {
                    expect(response.status).to.have.property('active').to.be.a('boolean').eq('true');
                    response.body.should.have.property('roles[0]').to.be.a('string');
                    expect(response.roles[0]).to.have.oneOf(['SuperAdmin','Admin','Issuer']);
                    response.body.should.have.property('_id').to.be.a('string');
                    response.body.should.have.property('name').to.be.a('string');
                    response.body.should.have.property('email').to.be.a('string').eq(raw.email);
                    response.body.should.have.property('register_date').to.be.a('string');
                    response.body.should.have.property('token').to.be.a('string');
                    response.body.should.have.property('Refresh_token').to.be.a('string');
                    response.body.should.have.property('__v').to.be.a('number');
                })
            done();
        });
        it("To check length of array and objects", (done) => {
            chai.request(server_url)
                .post("/account/login")
                .send(raw)
                .end((err,response) => {
                    expect(response.roles).to.have.lengthOf(1);
                });
            done();
        });
    });
    describe("When the authorization is failed", () =>{
        it("Response should have status 401 and be a object with wrong email", (done) =>{
            chai.request(server_url)
                .post("/account/login")
                .type('json')
                .send(raw)
                .end((err,ab) =>{
                    expect(ab).to.be.json;
                    expect(ab).to.have.status(401);
                    expect(ab).to.be.a('Object');
                })
            done();
        });
        it("Response should have status 401 and be a object with wrong password", (done) =>{
            chai.request(server_url)
                .post("/account/login")
                .type('json')
                .send(raw)
                .end((err,ab) =>{
                    expect(ab).to.be.json;
                    expect(ab).to.have.status(401);
                    expect(ab).to.be.a('Object');
                })
            done();
        });
        it("Contains a message with wrong email", (done) => {
            chai.request(server_url)
                .post("/account/login")
                .type("json")
                .send(raw)
                .end((err, response) => {
                    expect(response).body.to.have.key('message').to.be.a('string').eq('Invalid username or password');
                });
            done();
        });
        it("Contains a message with wrong passwrod", (done) => {
            chai.request(server_url)
                .post("/account/login")
                .type("json")
                .send(raw)
                .end((err, response) => {
                    expect(response).body.to.have.key('message').to.be.a('string').eq('Invalid username or password');
                })
            done();
        });
    });
});
