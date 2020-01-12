## Unit Testing with Mocha and Chai
Unit testing means testing the behavior of code in small, independent units. 
Units are typically designed to be the smallest meaningful chunk of independently testable code.    
Mocha is a testing framework that provides functions that are executed according in a specific order, 
and that logs their results to the terminal window.   
Chai is an assertion library that is often used alongside Mocha. It provides functions and methods that help you compare the output of a certain test with its expected value. 
Chai provides clean syntax that almost reads like English!




## Description

In this project we learn to use simple examples of unit testing using Mocha JS Framework and Chai Assertion Library .

* [Functions](index.js)
* [Function tests](test/index.spec.js)

### Instalation

* Download and install node.js:  
  https://nodejs.org/en/download/

* Install Mocha:  
  npm install --global mocha

   or as a development dependency for your project:

   npm install --save-dev mocha   
   
   Inside package.json file replace "test": "echo \ Error: no test specified\ && exit 1" to "test": "mocha"
 * Install Chai:   
 npm install chai

##### Run the test:   
npm test