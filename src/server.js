const http = require('http');
const app = require('./app');
const { connectDb } = require('./services/mongoService');

const server = http.createServer(app);

async function startServer () {
    try {
        await connectDb();
        server.listen(3000, () => {
            console.log('server listening');
        });
    } catch (error) {
        console.log(error.message);
    }
}

startServer();