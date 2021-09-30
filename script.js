// Data Structures Exercise

// #1a
const jedi = [];
console.log(jedi);

// #1b
jedi [0] = "Luke";
console.log(jedi);

// #1c
jedi.push("Obi-Wan Kenobi");
console.log(jedi);

// #1d
jedi.unshift("Yoda");
console.log(jedi);

// #1e
console.log(jedi[1]);

// #1f
jedi.pop();
console.log(jedi);

// #1g
jedi.shift();
console.log(jedi);

// #2a
const sithLords = ["Darth Vader", "Darth Sidious","Darth Maul"];
console.log(sithLords);

// #2b
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];
console.log(imperialOfficers);

// #2c
const starWarsVillians = sithLords.concat(imperialOfficers);
console.log(starWarsVillians);

// #2d
console.log(starWarsVillians.slice(0,2));

// #3a
const droids = {
astromech: "R2-D2", 
protocol: "C-3PO", 
assassin: "IG-88"
}
console.log(droids);

// #3b
// console.log("R2-D2");
console.log(droids["astromech"]); // R2-D2
// #3c
// console.log("C-3PO");
console.log(droids.protocol); // C-3PO
// #3d
(droids["assassin"]) = "IG-11";
console.log(droids);

// Bonus
// #4
console.log(starWarsVillians[0][6]);

// #5
console.log(sithLords.slice(-2, -1));

// #6a
const starWarsMovies = [
{ episodeOne: "The Phantom Menace"
episodeTwo: "Attack of the Clones" 
episodeThree: "Revenge of the Sith"
},
{
episodeFour: "A New Hope" 
episodeFive: "The Empire Strikes Back"
episodeSix: "Return of the Jedi"
},
{
episodeSeven: "The Force Awakens"
episodeEight: "The Last Jedi" 
episodeNine: "The Rise of Skywalker"
}];
console.log(starWarsMovies);

// #6b
starWarsMovies.splice(1, 0, "Solo", "Rogue One");
console.log(starWarsMovies);
