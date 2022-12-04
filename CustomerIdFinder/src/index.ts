import app from "./App";
import EnvironmentConfig from './configs/env';
const config = EnvironmentConfig.devEnvironment();

app.listen(config.port, () => {
    console.log("Server connected");
});