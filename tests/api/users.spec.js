const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../../app')
const User = require('../../models/user.model')

describe('Api users', () => {


    beforeAll(async () => {

        await mongoose.connect('mongodb://127.0.0.1:27017/shop');
    })

    afterAll(async () => {

        await mongoose.disconnect();
    })


    describe('GET /api/users', () => {


        let response;
        beforeAll(async () => {

            response = await request(app).get('/api/users').send();

        })


        it('response should be status 200', () => {

            expect(response.statusCode).toBe(200)

        });


        it('response should be json format', () => {

            expect(response.headers['content-type']).toContain('application/json');

        });


        it('response should be array format', () => {

            expect(response.body).toBeInstanceOf(Array);
        })

    });


    describe('POST /api/users', () => {

        let response;
        beforeAll(async () => {

            response = await request(app).post('/api/users').send(body);

        })


        const body = {
            username: 'prueba',
            email: 'prueba@prueba.com',
            password: '12435',
            age: 34

        };

        it('Deberia responder correctamente', () => {

            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toContain('application/json')
        });


        it('Deberia estar insertando el usuario en la DB', () => {

            expect(response.body._id).toBeDefined

        });

        it('los datos son correctos', () => {

            expect(response.body.username).toBe(body.username);

        });

        afterAll(async () => {

            await User.deleteMany({ email: 'prueba@prueba.com' })
        })

    });


    describe('PUT /api/users', () => {

        let response, user;

        const body = {
            username: 'prueba',
            email: 'prueba@prueba.com',
            password: '12435',
            age: 34

        };

        beforeAll(async () => {

            user = await User.create(body);
            response = await request(app).put(`/api/users/${user._id}`).send({ email: 'email@email.com', age: 59 });


        });

        afterAll(async () => {

            await User.findByIdAndDelete(user._id);
        })



        it('Deberia responder correctamente', () => {

            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toContain('application/json')
        });

        it('Deberia editar el usuario', () => {

            expect(response.body.email).toBe('email@email.com');
            expect(response.body.age).toBe(59);
        });

    });


    describe('DELETE /api/users', () => {

        let response, user;

        const body = {
            username: 'prueba',
            email: 'prueba@prueba.com',
            password: '12435',
            age: 34

        };


        beforeAll(async () => {

            user = await User.create(body);
            response = await request(app).delete(`/api/users/${user._id}`)
        });

        afterAll(async () => {

            await User.findByIdAndDelete(user._id);

        })

        it('Deberia responder correctamente', () => {

            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toContain('application/json')
        });

        it('Dberia borrar el usuario por Id', async () => {

            const userFound = await User.findById(user._id);
            expect(userFound).toBeNull();
        });







    })
});

