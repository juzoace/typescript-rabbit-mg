// import dotenv from 'dotenv'
// import bodyParser from 'body-parser'
import express, { Express, Request, Response } from 'express';
// import * as winston from 'winston';
import router from "./routes";

class App {
    public express: Express;
    constructor() {
        this.express = express();
        this.loadRoutes();
    }

    private loadRoutes() : void {
        this.express.use('/', router);
    }
}

export default new App().express;