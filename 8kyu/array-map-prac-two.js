/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here

const newNames = names.map((x)=>{
    return x[0].toUpperCase() + x.slice(1) 
})

console.log(newNames)