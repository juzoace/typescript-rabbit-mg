import { Request, Response } from 'express'
import CustomerUtility from "../utils/customer";
import { publisher } from "../services/broker/publisher"

class CustomerController {

    async getCustomersLocatedWithinRadius (req: Request, res: Response) {

        // Read data from the text file (CustomerUtility)

        // put data into some sort of data structure

        // Perform your check and save result into a data structure

        // Send result to message broker
        const messageToBroker = new publisher();
        messageToBroker.init();
        messageToBroker.send('customer-ids')
        res.json({

        })
    }   

}

export default new CustomerController;