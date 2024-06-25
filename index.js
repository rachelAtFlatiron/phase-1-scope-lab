// Write your solution in this file!
var customerName = 'bob'

var upperCaseCustomerName = () => {
    customerName = customerName.toUpperCase()
}

var setBestCustomer = () => {
    //other stuff can affect it
    //implication is that bestCustomer exists in the scope of setBestCustomer
    bestCustomer = 'not bob'
}

var overwriteBestCustomer = () => {
    bestCustomer = 'maybe bob'
}