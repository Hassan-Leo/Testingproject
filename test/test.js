let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");

chai.should();
chai.use(chaihttp);

server="http://certifis.herokuapp.com/api"

describe("POST Login API Testing",() =>{
    describe("When the authentication is successful", () => {
        it("Response Status of should have 200 and be a object",(done) => {
            chai.request(server)
                .post("/account/login")
                .type('json')
                .send({
                    "email":"muhammadrafay151@gmail.com","password":"123123"
                })
                .then((response) => {
                    expect(response).should.have.status(200);
                    expect(response).to.be.a('Object');
                    expect(response).to.be.json;
                })
                .catch((err) =>{
                    throw err;
                });
            done();
        }); 
        it("Object contain all the keys requried", (done) => {
            chai.request(server)
                .post("/account/login")
                .type('json')
                .send({
                    "email":"muhammadrafay151@gmail.com","password":"123123"
                })
                .then((response) =>{
                    response.body.should.have.keys('status','roles','_id','name','email','__v','token','RefreshToken');
                    expect(response).body.to.have.property('status').to.be.a('Object');
                    expect(response).body.to.have.property('roles').to.be.an('Array');
                })
                .catch((err) => {
                    throw err;
                });
            done();
        });
        it("Object contains data in correct data type", (done) => {
            raw={
                "email":"muhammadrafay151@gmail.com","password":"123123"
            }
            chai.request(server)
                .post("/account/login")
                .type('json')
                .send(raw)
                .then((response) => {
                    expect(response.status).to.have.property('active').to.be.a('boolean').eq('true');
                    response.body.should.have.property('roles[0]').to.be.a('string');
                    expect(response.roles[0]).to.have.oneOf(['SuperAdmin','Admin','Issuer']);
                    response.body.should.have.property('_id').to.be.a('string');
                    response.body.should.have.property('name').to.be.a('string');
                    response.body.should.have.property('email').to.be.a('string').eq(raw.email);
                    response.body.should.have.property('token').to.be.a('string');
                    response.body.should.have.property('Refresh_token').to.be.a('string');
                    response.body.should.have.property('__v').to.be.a('number');
                })
                .catch((err) => {
                    throw err;
                });
            done();
        });
        it("To check length of array and objects", (done) => {
            chai.request(server)
                .post("/account/login")
                .send({
                    "email":"muhammadrafay151@gmail.com","password":"123123"
                })
                .then((response) => {
                    expect(response.roles).to.have.lengthOf(1);
                })
                .catch((err)=>{

                });
            done();
        });
    });
    describe("When the authorization is failed", () =>{
        it("Response should have status 401 and be a object with wrong email", (done) =>{
            chai.request(server)
                .post("/account/login")
                .type('json')
                .send({
                    "email":"muhammadrafay15@gmail.com","password":"123123"
                })
                .then((ab) =>{
                    expect(ab).to.be.json;
                    expect(ab).to.have.status(401);
                    expect(ab).to.be.a('Object');
                })
                .catch((err) => {
                    throw err
                });
            done();
        });
        it("Response should have status 401 and be a object with wrong password", (done) =>{
            chai.request(server)
                .post("/account/login")
                .type('json')
                .send({
                    "email":"muhammadrafay151@gmail.com","password":"1123"
                })
                .then((ab) =>{
                    expect(ab).to.be.json;
                    expect(ab).to.have.status(401);
                    expect(ab).to.be.a('Object');
                })
                .catch((err) => {
                    throw err
                });
            done();
        });
        it("Contains a message with wrong email", (done) => {
            chai.request(server)
                .post("/account/login")
                .type("json")
                .send({
                    "email":"muhammad151@gmail.com","password":"123123"
                })
                .then((err, response) => {
                    expect(response).body.to.have.key('message').to.be.a('string').eq('Invalid username or password');
                })
                .catch((err) => {
                    throw err
                });
            done();
        });
        it("Contains a message with wrong passwrod", (done) => {
            chai.request(server)
                .post("/account/login")
                .type("json")
                .send({
                    "email":"muhammadrafay151@gmail.com","password":"1123"
                })
                .then((err, response) => {
                    expect(response).body.to.have.key('message').to.be.a('string').eq('Invalid username or password');
                })
                .catch((err) => {
                    throw err
                });
            done();
        });
    });
});
