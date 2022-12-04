import dotenv from "dotenv";
class EnvironmentConfig {
    dotenv: any;
    devPort: string;
    brokerUrl: string;
    queues: string;
    constructor() {
        this.dotenv = dotenv.config();
        this.devPort = process.env.devPort;
        this.brokerUrl = process.env.brokerUrl;
        this.queues = process.env.queues;
    }

    devEnvironment () {
        return {
           port: this.devPort,
           brokerUrl: this.brokerUrl,
           queues: this.queues
        }
    }

    prodEnvironment () {

    }
}

export default new EnvironmentConfig;