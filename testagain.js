let chai = require("chai");
let expect = require("chai").expect;
let chaihttp = require("chai-http");
let data_url= require("./Ecert.postman_collection.json")
chai.should();
chai.use(chaihttp);

token_1="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWFpbCI6Im11aGFtbWFkcmFmYXkxNTFAZ21haWwuY29tIiwibmFtZSI6IlJhZmF5Iiwicm9sZXMiOlsiU3VwZXJBZG1pbiJdLCJpYXQiOjE2MjAwNDcyMzEsImV4cCI6MTYyMDIyMDAzMX0.ni04-5q_KU9yTIyzKTfQw_QaPaMCR1DB0efIM-Nt0z8"
auth="Authorization"
token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYwNmNhNmM3OGExMTRiZThkMjQ4MDYiLCJlbWFpbCI6Im11aGFtbWFkcmFmYXkxNTFAZ21haWwuY29tIiwibmFtZSI6IlJhZmF5Iiwicm9sZXMiOlsiU3VwZXJBZG1pbiJdLCJpYXQiOjE2MjAxMzQ4NDUsImV4cCI6MTYyMDMwNzY0NX0.002k01rIBfH4tGAT2_Fv3Ed0YK7zYq0vC0dzHhB5Wu8"
server="http://certifis.herokuapp.com/api/certificate/"
raw= {"email":"iyaqoob62@gmail.com","password":"123123"}

describe("Checking Errors",()=>{
    it("To Check the values of properties", (done)=> {
        chai.request(data_url.item[16].name)
        .get("")
        .set(auth,token)
        .end((err,resp) =>{
            if (resp.body.totalcount > 0){
                for(i=0;i<resp.body.totalcount;i++){
                    expect(resp.body.list[i].ecertcount).to.be.greaterThanOrEqual(0);
                    expect(resp.body.list[i].user_limit).to.be.greaterThanOrEqual(0);
                    expect(resp.body.list[i].__v).to.be.eq(0);
                    expect(resp.body.list[i].status.active).to.be.oneOf([true,false]);
                }
            }
        })
        done();
    })
});