let user = ["iPhone", "Laptop", "AirPods"];
console.log(user[1])
console.log(user[0])
console.log(user[2])
//push is ment to add to the end of an array
user.push("tablet")
console.log(user)
//unshift is ment to add to the beginningof an array
user.unshift("macbook")
console.log(user)
//pop is ment to remove the last value in an array
user.pop()
console.log(user)
//shift is used to remove the first value in array
user.shift()
console.log(user)
let kitchen = ["knife","spoon","fork","plate"]
console.log(kitchen.indexOf("spoon"))
//indexof tell us the number of a value
console.log(kitchen.includes("spoon"))
//includes tell us if we have a value or not
