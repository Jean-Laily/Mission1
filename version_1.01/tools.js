/**
* M: Permet d'appeller la fonction console.log() plus simplement
* O: @return NULL
* I: @param {String} texte     = prend une chaine de caractère entre guillemet
*/
afficher = function(texte){//done
    console.log(texte);
}

/**
 * M: Permet l'arrondi d'un nombre flottant a 2 chiffre apres la virgule
 * O:
 * I:
 */
arrondi2Chiffre = function(x){
   return result = x.toFixed(2);
}

/**
 * M: Permet l'arrondi d'un nombre flottant en entier
 * O:
 * I:
 */
arrondi = function(y){
    return result = Math.round(y);
}


