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
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;
console.log('>>> check port:', port)
configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/about', (req, res) => {
    res.send('học đi nương ạ .Dốt lắm rồi hehe!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})