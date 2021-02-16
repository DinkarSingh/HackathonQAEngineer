import chai from 'chai';
import chaiHttp from 'chai-http';
import { HttpHeaders } from "@angular/common/http";
chai.use(chaiHttp);
chai.should();

describe("POST /api/tasks", () => {
    it("Registerthe user", (done) => {
        const randomNum = Math.floor((Math.random() * 1000) + 1);
        const lastName = 'Singh' + randomNum;
        const mobile = '0628' + Math.floor((Math.random() * 1000000) + 1);
        const email = 'mailmedinkar' + randomNum + '@gmail.com';
        const obj = {
            "referer": "tc-unknown",
            "phoneNumber": mobile,
            "countryCode": 33,
            "firstName": "Pankaj",
            "lastName": lastName,
            "email": email
        }
        var url = 'https://api-test.transactionconnect.com';
        chai.request(url)
            .post("/auth/registration")
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json, text/plain, */*')
            .set('api-key', '449c7476ccabbfdc3fc49a68118ade29')
            .set('accept-language', 'en-GB,en-US;q=0.9,en;q=0.8')
            .send(obj)
            .end((err, response) => {
                console.log(response)
                response.should.have.status(200);
                const ss = response.body.customerId;
                console.log(ss);
                // response.body.should.be.a('object');
                // response.body.should.have.property('id').eq(4);
                // response.body.should.have.property('name').eq("Task 4");
                // response.body.should.have.property('completed').eq(false);
                done();
            });
    });
});
