let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");

chai.should();
chai.use(chaihttp);

raw= {"email":"muhammadrafay151@gmail.com","password":"123123"}
raw_1= {"email":"muhammadray151@gmail.com","password":"123123"}
raw_2= {"email":"muhammadrafay151@gmail.com","password":"1233"}

server="http://certifis.herokuapp.com/api"

describe("POST Login API Testing",() =>{
    describe("When the authentication is successful", () => {
        it("Response Status of should have 200 and be a object",(done) => {
            chai.request(server)
                .post("/account/login")
                .type('json')
                .send(raw)
                .end((err,resp)=>{
                    expect(resp).to.have.status(200);
                    expect(resp).to.be.a('Object');
                    expect(resp).to.be.json;
                })
            done();
        }); 
        it("Object contain all the keys requried", (done) => {
            chai.request(server)
                .post("/account/login")
                .type('json')
                .send(raw)
                .end((err,resp) =>{
                    resp.body.should.have.keys('status','roles','_id','name','email','register_date','__v','token','RefreshToken');
                    expect(resp.body).to.have.property('status').to.be.a('Object');
                    expect(resp.body).to.have.property('roles').to.be.an('Array');
                })
            done();
        });
        it("Object contains in correct type", (done) => {
            chai.request(server)
                .post("/account/login")
                .type('json')
                .send(raw)
                .end((err,resp) => {
                    expect(resp.body.status).to.have.property('active').to.be.a('boolean').to.be.true;
                    resp.body.should.have.property('roles').to.be.a('Array');
                    expect(resp.body.roles[0]).to.have.oneOf(['SuperAdmin','Admin','Issuer']);
                    resp.body.should.have.property('_id').to.be.a('string');
                    resp.body.should.have.property('name').to.be.a('string');
                    resp.body.should.have.property('email').to.be.a('string').eq(raw.email);
                    resp.body.should.have.property('register_date').to.be.a('string');
                    resp.body.should.have.property('token').to.be.a('string');
                    resp.body.should.have.property('RefreshToken').to.be.a('string');
                    resp.body.should.have.property('__v').to.be.a('number');
                })
            done();
        });
        it("To check length of array and objects", (done) => {
            chai.request(server)
                .post("/account/login")
                .type('json')
                .send(raw)
                .end((err,resp) => {
                    expect(resp.body.roles).to.have.lengthOf(1);
                });
            done();
        });
    });
    describe("When the authorization is failed", () =>{
        it("Response should have status 401 and be a object with wrong email", (done) =>{
            chai.request(server)
                .post("/account/login")
                .type('json')
                .send(raw_1)
                .end((err,resp) =>{
                    expect(resp).to.be.json;
                    expect(resp).to.have.status(401);
                    expect(resp).to.be.a('Object');
                })
            done();
        });
        it("Response should have status 401 and be a object with wrong password", (done) =>{
            chai.request(server)
                .post("/account/login")
                .type('json')
                .send(raw_2)
                .end((err,resp) =>{
                    expect(resp).to.be.json;
                    expect(resp).to.have.status(401);
                    expect(resp).to.be.a('Object');
                })
            done();
        });
        it("Contains a message with wrong email", (done) => {
            chai.request(server)
                .post("/account/login")
                .type("json")
                .send(raw_1)
                .end((err, resp) => {
                    expect(resp.body).to.have.property('message').to.be.a('string').eq('Invalid username or password');
                });
            done();
        });
        it("Contains a message with wrong passwrod", (done) => {
            chai.request(server)
                .post("/account/login")
                .type("json")
                .send(raw_2)
                .end((err, resp) => {
                    expect(resp.body).to.have.property('message').to.be.a('string').eq('Invalid username or password');
                })
            done();
        });
    });
});
