import express, { Express } from 'express';
import router from "./routes";

class App {
    public express: Express;
    constructor() {
        // Initialize express 
        this.express = express();

        // Load all routes
        this.loadRoutes();
    }

    private loadRoutes() : void {
        this.express.use('/', router);
    }
}

export default new App().express;