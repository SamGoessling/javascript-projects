// Code your orbitCircumference function here:
function orbitCircumference(radius = 2000) {
  const pi = 3.141592653589793;  // value of π
  return Math.round(2 * pi * radius);
}

// Code your missionDuration function here:
function missionDuration(orbits, radius = 2000, speed = 28000) {
  let distance = orbitCircumference(radius) * orbits;
  return parseFloat((distance / speed).toFixed(2));
}


// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, radius = 2000, speed = 28000) {
  let duration = missionDuration(3, radius, speed); // Spacewalk for three orbits
  let o2Usage = parseFloat((candidate.o2Used(duration)).toFixed(3));
  return `${candidate.name} will perform the spacewalk, which will last ${duration} hours and require ${o2Usage} kg of oxygen.`;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];

 console.log(oxygenExpended(selectRandomEntry(crew)));
 