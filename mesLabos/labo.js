var str = "bonjour à tous";
    genre = "f";
    
// on récupère une ou plusieurs lettre dans une chaine de caratères
console.log(str.substr(2,1));           //param1 est la pos pour la récup mais il prend en compte seulement après la pos et param2 le nombre de lettre récupérables

console.log(str.substring(2,1));        //para1 est la position mais il prend sur la pos et param2 le nombre de lettre récupérable

console.log(str.big());                 // ajoute le string dans une balise <big><big/>
console.log(str.italics());             // ajoute le string dans une balise <i><i/>

//expression ternaire
console.log((genre == "h") ? "Monsieur" : "Madame");     // (condition opérateur condition) ? Si vrai alors : Si faux alors;

// var i;
// while (!(i)) {
//     i = confirm("As-tu compris ?");
//     }

// do { // l’instruction suivante sera exécutée au moins 1 fois !

//     i = prompt("entrer ce que vous voulez ou 0 pour quitter");
//     console.log(i);
// } while (!(i == "0"));

var s = eval("a=\"Bon\"; b=\"jour\"; console.log(a+b)");
let nombre = 2;
var strings = eval("param1=a;"+nombre+"; param2=\"je suis une valeur\";");
console.log(strings);

var result = Math.sqrt(25);
console.log(result);











