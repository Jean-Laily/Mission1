/**Algo francais
 * FAIRE
 * LIRECLAV @saisi utilisateur 
 * On demande a l'utilisateur d'entrer une nombre entier
 * SI la @saisi est different de 0 ALORS on execute les instructions
 * J'AFFICHE vous venez d'entrer le nombre : + le @saisi
 * SI le @plusPetit est supérieur à @saisi ALORS
 * le @plusPetit recuperère la valeur de @saisi
 * SI @plusGrand est inferieur à @saisi ALORS
 * le @plusGrand prend la valeur du @nombreSaisi
 * JUSQU'A
 * 
 * J'AFFICHE @compteur du nombre de saisi
 * J'AFFICHE Compris entre @plusPetit et @plusGrand
 * J'AFFICHE Pour une somme de @somme
 * J'AFFICHE Et une moyen de @moyen
 *  
 */

 "use strict";                          //rendre le comportement de JS plus strict

// initialisation des letiables
// letiablesde type NUM
let saisi = 0;
let compteur = 0; 
let sommes = 0;
let nombreSaisi = [];           //création d'un tableau vide
let plusPetit = 0;
let plusGrand = 0;
let moyen = 0;
let lowValue = 0;
let highValue = 0;


// debut du programme
/**
 * M: permet de récuperer une suite de nombre entier et d'en faire la somme ainsi que lui donner sa moyen
 * permet aussi de donner le nombre plus petit et le nombre le plus grand
 * O:
 * I:
 */
do{
  saisi = prompt("entré un nombre entier : ");                                                                // on prend la saisi de l'utilisateur
  //init let @param plusPetit
  if(compteur == 0){                                                                                          // première condition qui permet d'initialiser la @plusPetit
    plusPetit = nombreSaisi[compteur];
  }

  //gestion erreur si la saisi n'est pas un nombre entier
  if(isNaN(saisi) === true){
    alert("Erreur, entré un nombre entier !");
  }else if(saisi != 0){
    nombreSaisi.push(parseInt(saisi));                                                                         // methode push() permet l'ajout d'une saisi dans un tableau
    sommes += parseInt(saisi);                                                                                 // fait la sommes de toutes les saisies de l'utilisateur
    console.log("vous venez d'entrer le nombre : " +nombreSaisi);
    compteur ++;                                                                                               // Incremente le compteur à chaque passage

    lowValue = foundLowValues(plusPetit, nombreSaisi);                                                         //voir M.O.I
    highValue = foundHighValues(plusGrand, nombreSaisi);                                                       //voir M.O.I

  }

  toString(prompt);

}while(!(saisi === "0"));

affichage(compteur, lowValue, highValue, sommes);

alert(`\n${compteur} nombre de saisi
\nCompris entre ${lowValue} et ${highValue}
\nPour une somme de ${sommes} 
\nEt une moyen de ${moyen = sommes / highValue} `);


/* //////////////////////////////////// Fonction & procedure \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
/**
 * M: Permet d'afficher l'ensemble des informations dans la console
 * O: @return NULL
 * I:@param {int} cpt       = compteur
 *   @param {int} lowVal    = lowValue
 *   @param {int} highVal   = highVal
 *   @param {int} som       = sommes
 */
function affichage(cpt, lowVal, highVal, som){
  console.log ("\n"+cpt+" nombre de saisi");
  console.log ("Compris entre "+lowVal+" et "+highVal);
  console.log (`Pour une somme de ${som}`);
  console.log (`Et une moyen de ${moyen = som / highVal}`);  
}

/**
 * M:Permet de prendre dans toute les saisies, la valeur la plus petite
 * O: @return plusPetit
 * i: @param {int} plusP     = plusPetit
 *    @param {String} nbSaisi   = nombreSaisi
 */
function foundLowValues(plusP, nbreSaisi){
  for(let x in nbreSaisi){                                                                                              // 
    if(plusP > nbreSaisi[x]){
      plusP = nbreSaisi[x];
    }  
  }
  return plusP;
}

/**
 * M:Permet de prendre dans toute les saisies, la valeur la plus grande
 * O: @return plusGrand
 * I: @param {int} plusG      = plusGrand
 *    @param {String} nbreSaisi    = nombreSaisi
 */
function foundHighValues(plusG, nbreSaisi){
  for(let y in nbreSaisi){                                                                                              // parcours des propriétés énumerables dans le tableau " for (@letiable in @objet) {instructions} "
    if(plusG < nbreSaisi[y]){
      plusG = nbreSaisi[y];
    }  
  }
  return plusG;
  
}







