"use strict";
let saisiUser = "", controleSaisi = "";
let plusPetit = saisiUser, plusGrand = saisiUser, compteur = 0, sommes = 0, moyenne = (sommes / plusGrand) ;

do{
    saisiUser = prompt("Entrer un nombre entier !");
    
    if(saisiUser != 0){
        controleSaisi = parseInt(saisiUser);
        afficher(controleSaisi);
        compteur ++;
        sommes += controleSaisi;
        if(controleSaisi < plusPetit){
            plusPetit = controleSaisi;
        }
        if(controleSaisi > plusGrand){
            plusGrand = controleSaisi;
        }
    }
}while(saisiUser == "0");

affichage(compteur, plusPetit, plusGrand, sommes);

alert(`\n${compteur} nombre de saisi
\nCompris entre ${plusPetit} et ${plusGrand}
\nPour une somme de ${sommes} 
\nEt une moyen de ${moyenne}`);

/**
 * M: Permet d'afficher l'ensemble des informations dans la console
 * O: @return NULL
 * I:@param {int} cpt       = compteur
 *   @param {int} lowVal    = lowValue
 *   @param {int} highVal   = highVal
 *   @param {int} som       = sommes
 */
function affichage(cpt, lowVal, highVal, som){
    afficher("\n"+cpt+" nombre de saisi \nCompris entre "+lowVal+" et "+highVal+" \nPour une somme de "+som+" \nEt une moyen de "+moyenne);  
  }