let data=require("../Ecert.postman_collection.json");
let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");

chai.should();
chai.use(chaihttp);
auth="Authorization"
token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWFpbCI6Im11aGFtbWFkcmFmYXkxNTFAZ21haWwuY29tIiwibmFtZSI6IlJhZmF5Iiwicm9sZXMiOlsiU3VwZXJBZG1pbiJdLCJpYXQiOjE2MTg1ODU0OTgsImV4cCI6MTYxODc1ODI5OH0.tDWO5PrvlfyTeMz0pJuYNh46ULIY7osCXRuB3_O_7jU"
token1="Bearer eyJhbGciOiJIUzI1NaWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWFpbCI6Im11aGFtbWFkcmFmYXkxNTFAZ21haWwuY29tIiwibmFtZSI6IlJhZmF5Iiwicm9sZXMiOlsiU3VwZXJBZG1pbiJdLCJpYXQiOjE2MTg1ODU0OTgsImV4cCI6MTYxODc1ODI5OH0.tDWO5PrvlfyTeMz0pJuYNh46ULIY7osCXRuB3_O_7jU"
raw={
    "name": "Ali",
    "email": "Ali@gmail.com",
    "password": "123123",
    "roles":["issuer"],
    "Organization":{
        "name":"Fast",
        "id":"60606d8f9545af34589d6507"
    }
}
describe("Signup Functionality Testing", () => {
    describe("Testing when Request are successful", ()=> {
        it("")
    })
})