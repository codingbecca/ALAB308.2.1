// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.

//============================= PART ONE ==================================
//Predict the plant growth after 1, 2, and 3 weeks

const spaceRequired = (numWeeks, numPlants = 20, minSpaceRequired = 0.8) => {
  return numPlants * (minSpaceRequired * (2 ** numWeeks)); //doubling growth is represented by 2 to the power of time
};

console.log(
  `20 plants will require ${spaceRequired(1)} square metres after 1 week`
);
console.log(
  `20 plants will require ${spaceRequired(2)} square metres after 2 weeks`
);
console.log(
  `20 plants will require ${spaceRequired(3)} square metres after 3 weeks`
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
const action = (numWeeks, area = PI * radius * radius) => {
    let spaceNeeded = spaceRequired(numWeeks);
    let capacity = spaceNeeded/area; // % of the garden that is taken up by the plants after given number of weeks
    if (capacity > 0 && capacity < .5) {
        return 'Plant more plants';
    } else if (capacity < 0.8) {
        return 'Monitor plant growth';
    } else if (capacity > 0.8) {
        return 'Please prune plants';
    } else {
        return 'Something went wrong';
    }
};

console.log(action(1));
console.log(action(2));
console.log(action(3));