const http = require('http');
const app = require('./app');
const { connectDb } = require('./services/mongoService');

const server = http.createServer(app);
const PORT = process.env.PORT || 4000;
async function startServer () {
    try {
        await connectDb();
        server.listen(PORT, () => {
            console.log('server listening');
        });
    } catch (error) {
        console.log(error.message);
    }
}

startServer();