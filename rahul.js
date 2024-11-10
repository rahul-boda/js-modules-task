
// 1)
//Employee Shift Check
// Given an employee's work hours, print "Night Shift" if they work between 10 PM and 6 AM; otherwise, print "Day Shift."


function time(hour){
    
    if (hour >= 22 || hour < 6) {
        console.log("Night Shift");
    } else {
        console.log("Day Shift");
    }}
    time(parseInt(prompt("Enter the hour (0-23):")))

//2)
// Temperature Advisory
// Given the temperature in Celsius, provide weather advice: "Cold" for under 10°C, "Moderate" for 10-25°C, and "Hot" for above 25°C.

 export function name(input){
   
    if(input >= 1 && input <= 10){
        console.log("Cold")
    }
    else if(input> 11 && input <= 25){
        console.log("Modrate")
    }
    else{
        console.log("Hot")
    }}
 
    name(prompt("Enter the temperature:"))
    
//    3) Discount Calculator
// A store offers discounts: 10% if the bill is above $100, and 20% if it's above $200. Calculate the discount based on the input bill amount.

function discount(input){
    var num=0;
    if(input >= 100 && input <= 200) {
       
     num=input-(input * 0.10)
     console.log(`10% discount applide: ${input*0.10}`)
     console.log(` After 10% discount applied total amount is: ${num}  `)
    }
    else if(input >200 ) {
       
        num=input-(input * 0.20)
        console.log(`20% discount applide: ${input*0.20}`)
        console.log(` After 20% discount applied total amount is: ${num}  `)
    }}
    discount(prompt("Enter the Amount:"))

    // 4)
// Elevator Capacity Check
// An elevator has a maximum capacity of 500 kg. Given the weight of items entered, check if the elevator is overloaded.
function weight(input){
    if( input >500){
       console.log("overload ")
    }
   else{
       console.log(` Weight:${input} kg's`)
   }}
   weight(prompt("Enter the (Weight) Kg's :"))

 // 5)
// E-commerce Order Validity
// If a customer orders less than 5 items, print "Invalid order." If 5-10 items, print "Standard order," and for more than 10, print "Bulk order."

 function order(input){
 if(input <= 5 ){
    console.log("Invalid Order")
 }
 else if(input > 5 && input <= 10 ){
    console.log("Standard Order")
 }
 else if(input > 10 ){
    console.log("Bulk Order")
 }}
 order( prompt("Enter NO of  Orders:"))
