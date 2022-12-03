import amqp, { Message, Connection } from 'amqplib/callback_api';

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

    init() {
        this.connection =  amqp.connect(`amqps://gvrctuwy:kHwKHgERwO_ChSbi9xigEvBZDnVpV99t@rattlesnake.rmq.cloudamqp.com/gvrctuwy`, (errorConnect: Error, connection: Connection) => {
            if (errorConnect) {
                console.log('Error connecting to RabbitMQ: ', errorConnect);
                return;
            }
            connection.createChannel((errorChannel: any, channel: any) => {
                if (errorChannel) {
                    console.log('Error creating channel: ', errorChannel);
                    return;
                }
                this.channel = channel;
                this.channel.assertQueue(this.queues, {durable: true});
                this.channel.consume('customer-ids', (msg: Message ) => {
                    if (msg) {
                        console.log(msg.content.toString())
                    }
                })
            });
        })
    }
}

export default MessageBroker;