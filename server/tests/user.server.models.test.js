import mongoose from 'mongoose';
import User from '../models/UserModel.js';
import config from '../config/config.js';

let user = {
    firstName: "myFirstName",
    lastName: "myLastName",
    username: "uniqueUserName",
    email: "email@email.com",
    password: "thepassword1"
}, id, db;

describe('User schema test', () => {
    describe('Saving to database', () => {

        beforeAll(async () => {
            jest.setTimeout(20000);
            db = await mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
            await mongoose.set('useCreateIndex', true);
            await mongoose.set('useFindAndModify', false);
            console.log(`established connection to db at uri: ${config.db.uri}!`);

        });

        afterEach(async () => {
            if (id) {
                await User.deleteOne({_id: id}).exec(() => {
                    id = null;
                });
            }
        });

        afterAll(async () => {
            await mongoose.connection.close();
        });

        test('saves properly when code and name provided', async (done) => {
            await new User({
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                email: user.email,
                password: user.password
            }).save((err, user) => {
                expect(err).toBeNull();
                id = user._id;
                expect(id).not.toBeNull();
                expect(user.firstName).toBe('myFirstName');
                done();
            });
        }, 10000);

        test('saves properly when all three properties provided', async (done) => {
            await new User(user).save((err, user) => {
                expect(err).toBeNull();
                id = user._id;
                expect(id).not.toBeNull();
                done();
            });
        });

        test('throws an error when name not provided', async (done) => {
            await new User({
                lastName: user.lastName
            }).save(err => {
                expect(err).not.toBeNull();
                done();
            });
        });

        test('throws an error when code not provided', async (done) => {
            await new User({
                firstName: user.firstName
            }).save((err) => {
                expect(err).not.toBeNull();
                done();
            })
        });

    });
});
