
"use strict"// Prevent us from attempting to use variables
// that are not declared

let supplyList =[10, "Tylenol", "Tampons", "IceCream", "Wine", "Tacos"]; //This list was my daughters idea :)
console.log(supplyList); //Output [10, 'Tylenol', 'Tampons', 'IceCream', 'Wine', 'Tacos']
typeof supplyList; //Output is (6) array

//Use shift to remove the first item form an array
supplyList.shift();
console.log(supplyList); //removed 10 from arrray
// new output is (5) ['Tylenol', 'Tampons', 'IceCream', 'Wine', 'Tacos']

//Use push to add an item to the end of the array
supplyList.push("Cookie Dough");
console.log(supplyList);//output (6) ['Tylenol', 'Tampons', 'IceCream', 'Wine', 'Tacos', 'Cookie Dough'

//Using the splice method to replace items in the array
const start = 0;
const deleteCount = 2;
const removedItems = supplyList.splice(start, deleteCount, "Coffee", "Midol");
console.log(supplyList);//(6) ['Coffee', 'Midol', 'IceCream', 'Wine', 'Tacos', 'Cookie Dough']