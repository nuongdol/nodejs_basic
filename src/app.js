/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/
import express from "express";
import configViewEngine from "./configs/Viewengine";
import initWebRoute from './route/web';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

//setup view engine
configViewEngine(app);
//init web route
initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})