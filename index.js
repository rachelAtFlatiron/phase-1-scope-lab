// Write your solution in this file!
var customerName = 'bob'
var bestCustomer 
const leastFavoriteCustomer = 'mary'

var upperCaseCustomerName = () => {
    customerName = customerName.toUpperCase()
}

var setBestCustomer = () => {
    bestCustomer = 'not bob'
}

var overwriteBestCustomer = () => {
    bestCustomer = 'maybe bob'
}

var changeLeastFavoriteCustomer = () => {
    leastFavoriteCustomer = 'tim'
}
