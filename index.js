// Write your solution in this file!
let customerName = 'bob'
const leastFavoriteCustomer = 'test'

let upperCaseCustomerName = () => {
    customerName = customerName.toUpperCase()
}

let setBestCustomer = () => {
    //other stuff can affect it
    //implication is that bestCustomer exists in the scope of setBestCustomer
    //because there is no declaring language it is in global scope
    bestCustomer = 'not bob'
}

let overwriteBestCustomer = () => {
    bestCustomer = 'maybe bob'
}

let changeLeastFavoriteCustomer = () => {
    leastFavoriteCustomer = 'not test'
}