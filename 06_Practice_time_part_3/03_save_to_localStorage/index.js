// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

localStorage.setItem("myValue", 42)

// After refreshing the page, run this line to fetch the value
let myValue = localStorage.getItem("myValue")
console.log(myValue)    // should log out 42