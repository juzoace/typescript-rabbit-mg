## General Overview

<img width="529" alt="Screenshot 2024-02-07 003118" src="https://github.com/juzoace/typescript-rabbit-mq/assets/48396169/f498b43e-d084-45ac-b7c7-b3bf5850ade3">

 
<img width="529" alt="Screenshot 2024-02-07 003118" src="https://github.com/juzoace/typescript-rabbit-mq/assets/48396169/18fd5eac-6d96-4ce1-93df-2769d8671929">

This is a backend program with the following functionality:
### 
* It extracts a list of customers' location info from a txt file, selects the customers which are within a 100km radius of a particular location  and sends the result.
### 
* Generally, it makes use of a microservice architechture which allows mini-services communication using a pub/sub pattern
### 
* There are 2 mini-services which are responsible for the overall functionality
### 
* Service 1: CustomerIdFinder service (located at "typescript-rabbit-mq/CustomerIdFinder") is responsible for extracting the information from a text file (customers.txt), selects the customers which are within a 100km radius (of a reference location using the popular Great-Circle-Distance algorithm), sorts the data alphabetially and sends it to a RabitMQ broker which sends it to a queue.
### 
* Service 2: CustomerIdPrinter service (located at "typescript-rabbit-mq/CustomerIdPrinter") is a subscriber to the queue in RabbitMQ and it is responsible for pulling in data from the queue 
### 
* The two services are developed using typescript and node/express.js

## Installation

If you want to run it on your local machine, follow the steps below.

Clone the repository: 
```
$ git clone https://github.com/juzoace/typescript-rabbit-mq.git
```
Download and Install NodeJs LTS version from [NodeJs Official Page](https://nodejs.org/en/download/).

Install the dependencies for each service (by first moving into it) and running:
```
$ npm install
```

## Development
To run the a particular servce, ensure you create 2.env files which are to be placed at the root directory of each individual service. Place the fllowing values for each service: devPort, brokerUrl 
queues. devPort is the port which the sever listens on and it should be different for both services (Service A: devPort=4000) (Service B: 5000). brokerUrl is the url gotten from your RabbitMqdash board after setting it up. Read more here [website](https://www.rabbitmq.com/tutorials/tutorial-three-javascript.html.
queues is the name of the queue (which you have to create) through which messages are sent between the two services

```
$ npm run web
```
### What's included

Within the download you'll find the following directories and files:

```
typescript-rabbit-mq
    ├── CustomerIdFinder 
    ├── CustomerIdPrinter
    └── README.md
```



