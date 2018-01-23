//Basic Steps——
//1. Import and read text file; parse as JSON object
//2. Assuming valid input, for each line, process input like this: 
//a. Compare user coordinates to Intercom coordinates in Dublin
//b. Store nearby (distance <= 100km) customers in an object
//2. Return filter results

//NOTES:
//Input: text file, maxRange (km)
//Output: 

const fs = require('fs');
const {
    greatCircleDistance
} = require('./sphereFunctions');

class CustomerIndex {
    constructor(customerFile) {
        this.customers = this.importCustomersAsJSON(customerFile);
        this.officeCoordinates = {
            "Dublin": [53.3381985, -6.2592576],
            "San Francisco": [37.7749, -122.4194]
        };
    }

    //import txt file and syncronously read, parse as JSON
    importCustomersAsJSON(customerFile) {
        const unprocessedFileContents = fs.readFileSync(customerFile, 'utf8');
        const processedFileContents = unprocessedFileContents.split('\n')
            .map(line => JSON.parse(line));
        return processedFileContents;
    }

    getCustomerPosition(customer) {
        return [parseFloat(customer.latitute), parseFloat(customer.longitude)];
    }

    getNearbyCustomers(homeOffice, maxRange) {
        return this.customers.filter(customer => {
            const customerPosition = this.getCustomerPosition(customer);
            return greatCircleDistance(customerPosition, this.officeCoordinates.homeOffice) <= maxRange;
        });
    }

}

const myCustomers = new CustomerIndex('./customers.txt');
console.log(myCustomers.getCustomerPosition(myCustomers.customers[1]));