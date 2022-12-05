import express, { Express } from "express";
import { subscriber } from "./services/broker/subscriber";
import helmet from "helmet";

class App {
    express: Express;
    helmet: any
    constructor() {
        this.express = express();
        this.helmet = helmet();
        this.loadRoutes();
    }

    private loadRoutes() : void {
        const messageToBroker = new subscriber();
        messageToBroker.init();
    }
}

export default new App().express;