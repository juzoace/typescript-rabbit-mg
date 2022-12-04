import amqp, { Connection } from 'amqplib/callback_api';
import { Response } from "express";
import EnvironmentConfig from "../../../configs/env";
const config = EnvironmentConfig.devEnvironment()
/**.
 * Broker for async messaging
 */
class MessageBroker {
  queues: any;
  channel: any;
  url: string;
  connection: any;

  constructor() {
    this.connection;
    this.queues = 'customer-ids';
    this.channel;
    this.url = config.brokerUrl;
  }

  /**
   * Initialize connection to broker and send data to quue
   */
  init(msg: any, res: Response) {
    this.connection =  amqp.connect(this.url, (errorConnect: Error, connection: Connection) => {
      if (errorConnect) {
        // Log connection error to winston
        res.status(502).json({
          success: false,
          message: "Broker Connection failed"
        })
          return;
        }
      connection.createChannel((errorChannel, channel) => {
        if (errorChannel) {
          // Log connection error to winston
          res.status(502).json({
            success: false,
            message: "Channel creation failed"
        })
          return;
        }
          this.channel = channel;
          this.channel.assertQueue(this.queues, {durable: true});
        });
    })

    var sendQueueStatus: boolean = false;
            
    setTimeout(() => {

    if (this.channel) {
        sendQueueStatus = this.channel.sendToQueue(this.queues, Buffer.from(msg));
        if ( sendQueueStatus ) {

            res.status(200).json({
                success: true,
                message: "CustomerIds sent to broker"
            })

        } 
    }

    }, 3000);
  }
}

export default MessageBroker;