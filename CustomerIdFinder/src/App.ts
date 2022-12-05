import express, { Express } from 'express';
import router from "./routes";
import helmet from "helmet";

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