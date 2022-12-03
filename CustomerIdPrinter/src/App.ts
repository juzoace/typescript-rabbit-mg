import express, { Express, Request, Response } from 'express';
import { subscriber } from "./services/broker/subscriber";


class App {
    public express: Express;
    constructor() {
        this.express = express();
        this.loadRoutes();
    }

    private loadRoutes() : void {
        const messageToBroker = new subscriber();
        messageToBroker.init();
    }
}

export default new App().express;