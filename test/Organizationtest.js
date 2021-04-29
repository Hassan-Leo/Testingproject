let data=require("../Ecert.postman_collection.json");
let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");

chai.should();
chai.use(chaihttp);
server="http://certifis.herokuapp.com/api"
auth="Authorization"

token1="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDY5Y2I2MTI2NDk4YzE3ODRhOTY3OTciLCJlbWFpbCI6Imhhc3NhbnNpZGRpcWkwQGdtYWlsLmNvbSIsIm5hbWUiOiJIYXNzYW4gQWhtZWQiLCJyb2xlcyI6WyJJc3N1ZXIiLCJBZG1pbiJdLCJvcmdfaWQiOiI2MDYwNmQ4Zjk1NDVhZjM0NTg5ZDY1MDciLCJpYXQiOjE2MTk3MDk2ODIsImV4cCI6MTYxOTg4MjQ4Mn0.msGUx_OTQtIQwpQ-Beulyio4mVwlBAzPGE0Tyk2DO38"
token2="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWFpbCI6Im11aGFtbWFkcmFmYXkxNTFAZ21haWwuY29tIiwibmFtZSI6IlJhZmF5Iiwicm9sZXMiOlsiU3VwZXJBZG1pbiJdLCJpYXQiOjE2MTk3MTAzMzksImV4cCI6MTYxOTg4MzEzOX0.MGpfX8kwxDBIESotNDPVofq-2Z40Ea7kLAfETpOZ8gk"

raw1= {"email":"muhammadaamir.aj1@gmail.com","password":"123123"}
raw2={"email":"muhammadrafay151@gmail.com", "password":"123123"}

describe("The testing of the data retrived through Organization API", ()=> {
    describe("Successfull execution of api when Super Admin acces data ")
})



