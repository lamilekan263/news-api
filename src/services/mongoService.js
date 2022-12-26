require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connection.once('open', () => {
    console.log('connection successfully');
});


mongoose.connection.on('err', () => {
    console.log('error connecting to the database');
});


mongoose.set('strictQuery', false);
async function connectDb () {
    await mongoose.connect(process.env.MONGO_URI);
}


async function disconnectDB () {
    mongoose.disconnect();
}


module.exports = {
    connectDb,
    disconnectDB
};