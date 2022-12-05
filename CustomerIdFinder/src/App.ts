import express, { Express } from 'express';
import router from "./routes";
import helmet from "helmet";

class App {
    express: Express;
    helmet: any
    constructor() {
        // Initialize express 
        this.express = express();
        this.helmet = helmet(); 
    
        // Load all routes
        this.loadRoutes();
    }

    private loadRoutes() : void {
        this.express.use('/', router);
    }
}

export default new App().express;