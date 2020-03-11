import mongoose from 'mongoose';
import User from '../models/UserModel.js';
import config from '../config/config.js';
import axios from 'axios';

let user1 = new User({
    firstName: "myFirstName1",
    lastName: "myLastName",
    username: "uniqueUserName1",
    email: "email@email.com",
    password: "thepassword1"
});
let user2 = new User({
    firstName: "myFirstName1",
    lastName: "myLastName",
    username: "uniqueUserName1", //same username, diff email
    email: "different1@email.com",
    password: "thepassword1"
});
let user3 = new User({
    firstName: "myFirstName1",
    lastName: "myLastName",
    username: "differentUserName", //different username, same email
    email: "different1@email.com",
    password: "thepassword1"
});
let user4 = new User({
    firstName: "myFirstName1",
    lastName: "myLastName",
    username: "totallyDifferentUserName1", //different username, different email. should save no probs
    email: "totallyDifferent1@email.com",
    password: "thepassword1"
});
let user5 = new User({
    firstName: "myFirstName1",
    lastName: "myLastName",
    username: "brandNewUserName",
    email: "invalid.com",//invalid email
    password: "thepassword1"
});
let user6 = new User({
    firstName: "myFirstName1",
    lastName: "myLastName", //no username
    email: "especiallyUnique@email.com",
    password: "thepassword1"
});
let user7 = new User({
    firstName: "myFirstName1",
    lastName: "myLastName",
    username: "fantasticName", //no email
    password: "thepassword1"
});
let user8 = new User({
    username: "spectacularName1", //no name
    email: "creative1@email.com",
    password: "thepassword1"
});
let user9 = new User({
    firstName: "myFirstName1",
    lastName: "myLastName",
    username: "stupendousName", //no password
    email: "foo@baz.com"
});
let idAll = Array();
let id, db;

describe('User routes test', () => {
    describe('Saving to database', () => {

        beforeAll(async () => {
            axios.defaults.baseURL = 'http://localhost:5000';
            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            jest.setTimeout(200000);
            db = await mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
            await mongoose.set('useCreateIndex', true);
            await mongoose.set('useFindAndModify', false);
            console.log(`established connection to db at uri: ${config.db.uri}!`);
        });

        afterEach(async () => {
            if (id) {
                idAll.push(id); //if id added, push to id array
            }
        });

        afterAll(async () => {
            //delete any records that were inserted during the test
            for(let it = 0; it < idAll.length; it++) {
                await User.deleteOne({_id: idAll[it]});
            }
            await mongoose.connection.close();
        }, 10000);

        test('saves properly when unique email and name provided', async (done) => {
            await user1.save((err, user) => {
                expect(err).toBeNull();
                id = user._id;
                expect(id).not.toBeNull();
                expect(user.firstName).toBe('myFirstName1');
                done();
            });
        }, 10000);

        test('throws an error when username is the same', async (done) => {

            await axios.post('/api/user/', user2).then((response) => {
                expect(response).toBeTruthy();
                expect(response.status).toBe(400);
                expect(response.data.json).toEqual('Username already exist.');
            });
        }, 10000);

        test('throws an error when email is the same', async (done) => {

            await axios.post('/api/user/', user3).then((response) => {
                expect(response.status).toBeTruthy();
                expect(response.status).toBe(400);
                expect(response.data.json).toEqual('Email already exists.');
            });
        }, 10000);

        test('saves another unique record', async (done) => {
            await user4.save((err, user) => {
                expect(err).toBeNull();
                id = user._id;
                expect(id).not.toBeNull();
                expect(user.firstName).toBe('myFirstName1');
                done();
            });
        }, 10000);

        test('throws an error when email is invalid', async (done) => {

            await axios.post('/api/user/', user5).then((response) => {
                expect(response.status).toBeTruthy();
                expect(response.status).toBe(400);
                console.log("we need to add an error message response for invalid email")
            });
        }, 10000);
       /* test('throws an error when username missing', async (done) => {

            await axios.post('/api/user/', user6).then((response) => {
                expect(response.status).toBeTruthy();
                expect(response.status).toBe(400);
                console.log("we need to add an error message response for missing username")
            });
        });
        test('throws an error when email missing', async (done) => {

            await axios.post('/api/user/', user7).then((response) => {
                expect(response.status).toBeTruthy();
                expect(response.status).toBe(400);
                console.log("we need to add an error message response for missing email")
            });
        });*/
        test('saves successfully when name missing', async (done) => {
            await user8.save((err, user) => {
                expect(err).toBeNull();
                id = user._id;
                expect(id).not.toBeNull();
                expect(user.username).toBe('spectacularName1');
                done();
            });
        }, 10000);
      /*  test('throws an error when password missing', async (done) => {

            await axios.post('/api/user/', user9).then((response) => {
                expect(response.status).toBeTruthy();
                expect(response.status).toBe(400);
                console.log("we need to add an error message response for missing password")
            });
        });*/
    });
});


