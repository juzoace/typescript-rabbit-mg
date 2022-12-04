import { Request, Response } from 'express'
import CustomerUtility from "../utils/customer";
import { publisher } from "../services/broker/publisher";

class CustomerController {

    getCustomersLocatedWithinRadius (req: Request, res: Response) {
        
        // Read data from the text file 
        const closeCustomerId = CustomerUtility.getDataFromFile();

        // Send result to message broker
        const messageToBroker = new publisher();

       // If it fails to connect, log error and send response back to client
       messageToBroker.init(closeCustomerId, res);

    }   
}

export default new CustomerController;