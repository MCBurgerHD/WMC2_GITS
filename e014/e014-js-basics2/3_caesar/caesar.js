function caesar(str, n) {
   alphabet = "abcdefghijklmnopqrstuvwxyz";
   neuesalphabet = "";
   for (i = 0; i < alphabet.length; i++){
      aenderung = (i + n) % alphabet.length;
      neuesalphabet += alphabet[aenderung];
   }
   ergebnis = "";
   str = str.toLowerCase();
   for (i = 0; i < str.length; i++){
      index = alphabet.indexOf(str[i]);
      ergebnis += neuesalphabet[index];
   }
   return ergebnis;
}

console.log(caesar("Test", 10))

// Do not edit below this line
module.exports = caesar;
