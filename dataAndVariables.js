// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 38400;
const milesPerKM = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof 'Determination');
console.log(typeof 17500);
console.log(typeof 225000000);
console.log(typeof 38400);
console.log(typeof 0.621);
// Calculate a space mission below
let milesToMars = distanceToMarsKm * milesPerKM;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;
// Print the results of the space mission calculations below
let x = shuttleName;
let y = daysToMars;
console.log(x + " will take " + y + " days to reach Mars." );
// Calculate a trip to the moon below
let milesToMoon = distanceToMoonKm * milesPerKM;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
// Print the results of the trip to the moon below
let z = daysToMoon;
console.log(x + " will take " + z + " days to reach Moon.")