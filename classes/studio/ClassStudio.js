//Declare a class called CrewCandidate with a constructor that takes three 
//parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }


//Add methods for adding scores, averaging scores and determining 
//candidate status as described in the studio activity.
addScore(newScore) {
    this.scores.push(newScore);
}

average() {
    let totalScore = this.scores.reduce((acc, curr) => acc + curr, 0);
    return +(totalScore / this.scores.length).toFixed(1);
}
status() {
    const avgScore = this.average();

    if (avgScore >= 90) return 'Accepted';
    if (avgScore >= 80) return 'Reserve';
    if (avgScore >= 70) return 'Probationary';
    return 'Rejected';
}
}
const bubba = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
const merry = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
const glad = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

console.log(bubba);
console.log(merry);
console.log(glad);

bubba.addScore(83);
console.log(bubba.scores);

console.log(`Merry's average test score: ${merry.average()}`);

const candidates = [bubba, merry, glad];
candidates.forEach(candidate => {
    console.log(`${candidate.name} earned an average test score of ${candidate.average()}% and has a status of ${candidate.status()}.`);
});

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. 
//How many tests will it take to reach Reserve status? How many to reach Accepted? 
//Remember, scores cannot exceed 100%.
let testsToAdd = 0;
while (glad.status() !== 'Reserve') {
    glad.addScore(100);  // adds max possible score
    testsToAdd++;
}

console.log(`It took ${testsToAdd} tests to boost Glad Gator's status to Reserve.`);

while (glad.status() !== 'Accepted') {
    glad.addScore(100);
    testsToAdd++;
}

console.log(`It took a total of ${testsToAdd} tests to boost Glad Gator's status to Accepted.`);