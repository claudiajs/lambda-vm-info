Utility Lambda function to show information about the container VM. It can show:

* currently installed dynamic libraries (`ldconfig -p`)
* currently installed RPM packages (`yum list installed`)

## Prerequisites

* Node.js >= 4.3.2 (including NPM)
* [Set up AWS access credentials for Node.js](https://claudiajs.com/tutorials/installing.html#configuring-access-credentials)

## Usage

1. Install the dependencies using `npm install`
2. Deploy the Lambda function using `npm start`
3. The installation procedure will print the root API URL. 
4. Use `<URL>/ldconfig` in a browser to list active libraries
5. Use `<URL>/packages` in a browser to list active packages

