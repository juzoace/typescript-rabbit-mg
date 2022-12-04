import dotenv from "dotenv";
class EnvironmentConfig {
    public dotenv: any;
    public devPort: string;
    public brokerUrl: string;
    constructor() {
        this.dotenv = dotenv.config();
        this.devPort = process.env.devPort;
        this.brokerUrl = process.env.brokerUrl;
    }


    devEnvironment () {
        return {
           port: this.devPort,
           brokerUrl: this.brokerUrl
        }
    }

    prodEnvironment () {

    }
}

export default new EnvironmentConfig;