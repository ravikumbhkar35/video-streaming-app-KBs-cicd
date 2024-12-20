const request = require('supertest')

const {app} = require('../index')

describe("video streaming service", () =>{

    test("service can handle http request ", async ()=>{
        const response = await request(app).get("/video")
        expect(response.status).toBe(200)
    })
}) 
