import express from "express";
import homeController from '../controller/homecontroller';
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);

    router.get('/about', (req, res) => {
        res.send('học đi nương ạ .Dốt lắm rồi hehe!')
    })

    return app.use('/abc', router)
}

export default initWebRoute;
//module.export = iniWebRoute;
