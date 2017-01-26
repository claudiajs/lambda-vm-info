Utility AWS Lambda function to show information about the container VM. It can show:

* currently installed dynamic libraries (`ldconfig -p`)
* currently installed RPM packages (`yum list installed`)
* environment variables
* pkg-config versions

## Prerequisites

* Node.js >= 4.3.2 (including NPM)
* [Set up AWS access credentials for Node.js](https://claudiajs.com/tutorials/installing.html#configuring-access-credentials)

## Installation

1. Install the dependencies using `npm install`
2. Deploy the Lambda function using `npm start`
3. The installation procedure will print the root API URL. 

## Usage

* GET `<URL>/ldconfig` - list active libraries
* GET `<URL>/packages` - list installed RPM/YUM packages
* GET `<URL>/env` - list environment variables
* GET `<URL>/pkg-config` - list installed development libraries with pkg-config
* GET `<URL>/pkg-config/{package}/{command}` execute a pkg-config command, for example `/pkg-config/fontutil/modversion`

