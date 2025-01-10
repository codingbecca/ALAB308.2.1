// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.

const PI = 3.1415;
let radius = 5;
const area = PI * radius * radius;

//Predict the plant growth after 1, 2, and 3 weeks


// Implement control flow to make decisions on whether the plants should be:
    //  Pruned, to stop them from exceeding the capacity of the garden.
        // This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
    // Monitored, if they are growing at an acceptable rate.
        // This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
    // Planted, if there is room to plant more plants.
        // This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.