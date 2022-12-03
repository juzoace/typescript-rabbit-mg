import amqp, { Connection } from 'amqplib/callback_api';

/**
 * Broker for async messaging
 */
class MessageBroker {
    queues: any;
    channel: any;
    uri: string;
    connection: any;

  constructor() {
    this.connection;
    this.queues = 'customer-ids';
    this.channel;
  }

  /**
   * Initialize connection to rabbitMQ
   */
 init() {

    this.connection =  amqp.connect(`amqps://gvrctuwy:kHwKHgERwO_ChSbi9xigEvBZDnVpV99t@rattlesnake.rmq.cloudamqp.com/gvrctuwy`, (errorConnect: Error, connection: Connection) => {
        if (errorConnect) {
            console.log('Error connecting to RabbitMQ: ', errorConnect);
            return;
        }
        connection.createChannel((errorChannel, channel) => {
            if (errorChannel) {
                console.log('Error creating channel: ', errorChannel);
                return;
            }
            this.channel = channel;
            this.channel.assertQueue(this.queues, {durable: true});
        });
    })
}

    /**
   * Send message to queue
   * @param {String} queues Queue name
   * @param {Object} msg Message as Buffer
   */
     send(msg: any) {
        setTimeout(() => { this.channel.sendToQueue(this.queues, Buffer.from(msg)) }, 7000);
    }
}

  





// /**
//  * @return {Promise<MessageBroker>}
//  */
// MessageBroker.getInstance = async function() {
//   if (!instance) {
//     const broker = new MessageBroker();
//     instance = broker.init()
//   }
//   return instance;
// };

export default MessageBroker;