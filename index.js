// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.

//============================= PART ONE ==================================
//Predict the plant growth after 1, 2, and 3 weeks

const spaceRequired = (numWeeks, numPlants = 20, minSpaceRequired = 0.8) => {
    if(numWeeks === 0) {
        return numPlants * minSpaceRequired;
    } else {
        return numPlants * (2 ** numWeeks) * minSpaceRequired; //doubling growth is represented by 2 to the power of time. Each new plant requires a minimum of 0.8 square meters
    }
};

console.log(
  `20 plants will require ${spaceRequired(1)} square meters after 1 week`
);
console.log(
  `20 plants will require ${spaceRequired(2)} square meters after 2 weeks`
);
console.log(
  `20 plants will require ${spaceRequired(3)} square meters after 3 weeks`
);

// Implement control flow to make decisions on whether the plants should be:
//  Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.

const PI = 3.1415;
let radius = 5;
const action = (numWeeks, area = PI * radius * radius, numPlants = 20) => {
    let spaceNeeded = spaceRequired(numWeeks, numPlants);
    let capacity = spaceNeeded/area; // % of the garden that is taken up by the plants after given number of weeks
    if (capacity > 0 && capacity < .5) {
        return 'Plant more plants';
    } else if (capacity > 0 && capacity < 0.8) {
        return 'Monitor plant growth';
    } else if (capacity >= 0.8 && capacity <=1) {
        return 'Please prune plants';
    } else {
        return `Something went wrong, capacity is at ${capacity * 100}%. You would need ${spaceNeeded} square meters of space to grow these plants, you currently have ${area} square meters` ;
    }
};

console.log(action(1));
console.log(action(2));
console.log(action(3));

//============================= PART TWO ==================================
// The conservation area in which the garden is located has multiple other gardens. 
// Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.

let spaceNeeded = spaceRequired(10, 100); //the space required after 10 weeks when starting with 100 plants

let originalArea = PI * radius * radius;

let additionalSpaceRqd = spaceNeeded - originalArea;

console.log(`After 10 weeks, 100 plants will require ${spaceNeeded} square meters. This is ${additionalSpaceRqd} square meters more than the original space of ${originalArea} square meters`)
// If the space remained circular, what would be the radius of this expanded garden?
// the formula for this is sqrt(area/pi) = radius
let newRadius = Math.sqrt(spaceNeeded/PI);

console.log(`If the space remained circular the radius of the new garden would be ${newRadius} meters`);

//============================= PART THREE ==================================
// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.

//I chose to duplicate action and named the function action2 so I could throw the error without throwing an error earlier in the program
const action2 = (numWeeks, area = PI * radius * radius, numPlants = 20) => {
    let spaceNeeded = spaceRequired(numWeeks, numPlants);
    let capacity = spaceNeeded/area; // % of the garden that is taken up by the plants after given number of weeks
    if (capacity > 0 && capacity < .5) {
        return 'Plant more plants';
    } else if (capacity < 0.8) {
        return 'Monitor plant growth';
    } else if (capacity >= 0.8 && capacity <=1) {
        return 'Please prune plants';
    } else {
        throw new Error(`Something went wrong, capacity is at ${capacity * 100}%. You would need ${spaceNeeded} square meters of space to grow these plants, you currently have ${area} square meters`) ;
    }
};

try {
    action2(0, originalArea, 100);
} catch (e) {
    console.log(e);
}
