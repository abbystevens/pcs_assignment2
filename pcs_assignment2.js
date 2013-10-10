var fullWord = "facetious"
var nonWord = ""
for (var i = fullWord.length - 1; i >= 0; i--) {
  if (fullWord [i] != "a") {
    if (fullWord [i] != "e") {
      if (fullWord [i] != "i") {
      	if (fullWord [i] != "o") {
      	  if (fullWord [i] != "u") {
      	  	nonWord = nonWord + fullWord [i];}
      	  }
      	}
      }	
    }
  }
console.log(nonWord)