const fs = require('fs'); // fs module
// MAIN FUNCTION
const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) { //  Added the functionToRunWhenThingsAreDone parameter.
 
  console.log('breedDetailsFromFile: Calling readFile...'); // nothing

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    //Pass data into callback instead of returning it directly

    console.log("In readFile's Callback: it has the data."); //

    if (!error) functionToRunWhenThingsAreDone(data); // Added  functionToRunWhenThingsAreDone parameter.
  });
};

// Callback function
//  console.log into a new function:
const printOutCatBreed = breed => { //  Added breed parameter.
  console.log('Return Value: ', breed); // => print out details correctly.
};

// // Call the function
// // two arguments  breed string and a callback function
// breedDetailsFromFile('Bombay', printOutCatBreed);

module.exports = breedDetailsFromFile, printOutCatBreed; // Added module.exports.
