// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection
// Given a variable that holds a user's preferred type of Monster Energy drink, 
// print whether the user prefers a "Regular" or "Sugar-free" variety. If the preference is not set, default to "Regular".

let userPreference = 'Sugar-free'; // Possible values: 'Regular', 'Sugar-free', or undefined
//Solution to Challenge 1
//Ternary operator structure -- (condition ? value if true : value if false)
//!== strict inequality operator (checks both value and type)
//cannot use just = as it is like let a = 5, rather than doing a comparison
//userPreference !== undefined <checks if user preference is not equal to undefined
//userPreference : "Regular" <if it is not undefined then takes the userPreference, otherwise "Regular" is used
let preference = userPreference !== undefined ? userPreference : "Regular";
console.log(preference);

// #### Challenge 2: Stock Check
// You have a variable that tracks the number of Monster Energy cans left in the fridge. 
// Use a ternary operator to print "Time to restock!" if the number is less than 5, or "We're stocked!" if the number is 5 or more.

let cansLeft = 3; // Any number of cans
//Solution to Challenge 2
//Ternary operator structure -- (condition ? value if true : value if false)
let stockCheck = cansLeft < 5 ? "Time to restock!" : "We're stocked!";
console.log(stockCheck);


// #### Challenge 3: Workout Intensity
// Based on the current heart rate, determine if the user should drink a Monster Energy drink to boost their workout. 
// If the heart rate is below 100 bpm, print "Boost needed!", otherwise, print "Energy levels are high!".

let heartRate = 95; // Current heart rate in bpm
//Solution to Challenge 3
//Ternary operator structure -- (condition ? value if true : value if false)
let workoutIntensity = heartRate < 100 ? "Boost needed!" : "Energy levels are high!";
console.log(workoutIntensity);


// #### Challenge 4: Temperature Suitability
// Monster Energy drinks are best served cold. Given the current temperature, use a ternary to print "Chilled to perfection!" 
// if the temperature is below or equal to 5°C, or "Needs a cooler!" if above 5°C.

let currentTemp = 4; // Current temperature in °C
//Solution to Challenge 4
//Ternary operator structure -- (condition ? value if true : value if false)
//can also be written as let temperatureSuitability = currentTemp <= 5 ? "Chilled to perfection!" : "Needs a cool!";
let temperatureSuitability = currentTemp > 5 ? "Needs a cool!" : "Chilled to perfection!";
console.log(temperatureSuitability);


// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!",
// otherwise, print "Better stick to water."

// Define the current hour in 24-hour format
let currentHour = 22; 

// Write your code below this line to determine if it's a good idea to have a Monster Energy drink based on the current hour
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!"
// Otherwise, print "Better stick to water."

//Solution to Challenge 5
//Ternary operator structure -- (condition ? value if true : value if false)
//&& logical operator used to check BOTH conditions are true, otherwise false
let lateNightCoding = (currentHour >= 7 && currentHour <24) ? "Unleash the beast!" : "Better stick to water.";
console.log(lateNightCoding);



// In each of these challenges, the ternary operator is used to decide between two options based on a condition, 
// demonstrating its utility for concise conditional logic. Remember that while ternaries can make the code more succinct, 
// they should be used judiciously to maintain readability, especially for more complex conditions.