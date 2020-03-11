
import mongoose from "mongoose";
import config from "../config/config";
import User from '../models/UserModel.js';

describe('Refilling database', () => {
    test('deleting all documents and resetting', async (done) => {
        mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
        /*
          Clears the connected database collection of listings
         */
        await User.deleteMany({}, (err) => {
            if (err) throw err;
        });
        mongoose.connection.close();
        done();
    })
});
