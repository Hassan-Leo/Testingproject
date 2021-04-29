let data=require("../Ecert.postman_collection.json");
//let auhte_data=require("");
let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");

chai.should();
chai.use(chaihttp);
server="http://certifis.herokuapp.com/api"
auth="Authorization"
token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWFpbCI6Im11aGFtbWFkcmFmYXkxNTFAZ21haWwuY29tIiwibmFtZSI6IlJhZmF5Iiwicm9sZXMiOlsiU3VwZXJBZG1pbiJdLCJpYXQiOjE2MTg1ODU0OTgsImV4cCI6MTYxODc1ODI5OH0.tDWO5PrvlfyTeMz0pJuYNh46ULIY7osCXRuB3_O_7jU"
token1="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWFpbCI6Im11aGFtbWFkcmFmYXkxNTFAZ21haWwuY29tIiwibmFtZSI6IlJhZmF5Iiwicm9sZX"
raw= {"email":"iyaqoob62@gmail.com","password":"123123"}