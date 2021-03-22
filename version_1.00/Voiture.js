//"use strict";
function Voiture(immat, color, weight, power, capReserv, nbPlace) {
    
    const immatriculation = immat;
    var couleur = color.toLowerCase();
    const poids = weight;
    const puissance = power;
    const capaciteReservoir = capReserv;
    const nombrePlace = nbPlace;

    var niveauEssence = 5.0;                    //definir à 5l
    var assurer = false;                        // pas d'assurance
    var messageTableauBord ="Vérification des parametres ........ ok, \nIl vous reste "+niveauEssence+"L et votre véhicule n'est pas assuré !" ;               // message de bienvenue (revoir l'affichage en float)
    
    // getter
    this.getImmatriculation = function(){ return immatriculation; } //String
    this.getCouleur = function(){ return couleur; } //String
    this.getPoids = function(){ return poids; }  //int
    this.getPuissance = function(){ return puissance; }  //int
    this.getCapaciteReservoir = function(){ return capaciteReservoir; } //float
    this.getNombrePlace = function(){ return nombrePlace; } //int
    this.getNiveauEssence = function(){ return niveauEssence; }  //float
    this.getAssurer = function(){ return assurer; }  //bool
    this.getMessageTableauBord = function(){ return messageTableauBord; } //String

    // setter
    this.setAssurer = function(estAssurer){//todo
        if(estAssurer){
            assurer = true
            afficher(messageTableauBord="\nLe véhicule est maintenant assuré !");
        }
        return estAssurer; 

    }

    /**
     * M: Permet de faire un changement de couleur sur le véhicule choisi
     * O: @return NULL (a redefinir pour retourner un BOOL)
     * I: @param {string} nouvelleCouleur        = modification de la couleur actuel
     */
    this.repeindre = function(newCouleur){//done
        var newCouleurControler = newCouleur.toLowerCase();

        if(couleur == newCouleurControler){
            afficher(messageTableauBord="\nMerci pour ce rafraîchissement !");
        }else {
            couleur = newCouleurControler;
            afficher(messageTableauBord ="\nMerci d'avoir choisi la couleur \""+couleur+"\" !");
        }

        return couleur;
    }

    /**
     * M: Permet d'ajouter du carburant de le véhicule si il n'excede pas la capacité max du reservoir
     * O: @return niveauEssence
     * I: @param {float} qteCarburant       = Quantité de carburant
     */
    this.mettreEssence = function(qteCarburant){//done
        var totalCarburant = (qteCarburant + niveauEssence);

        if(totalCarburant < capaciteReservoir){
            afficher(messageTableauBord = "\nAjout de "+qteCarburant+"L dans le réservoir !" );
            afficher("\nla nouvelle quantité de carburant est de "+totalCarburant+"L" );
            niveauEssence = totalCarburant;                                          //niveauEssence prend la nouvelle valeur
        }else{
            afficher(messageTableauBord ="\nImpossible d'ajouter cette quantité de carburant");
        }
        
        return niveauEssence;                                                             //retourne 
    }

    /**
     * M: Permet de d'informer selon le niveau d'essence si le trajet est possible ou non
     * O: @return niveauEssence
     * I: @param {int, int}
     */
    this.seDeplacer = function(distanceParcourue, vitesseMoyenne){//todo
        var consommation ;
        var deduire;
        consommation = calculConso(distanceParcourue, vitesseMoyenne);
        if(consommation <= niveauEssence){
            deduire = (niveauEssence-consommation);
            niveauEssence = deduire;
            afficher(messageTableauBord ="\nSur une distance de "+distanceParcourue+"km, vous consommerez "+consommation+"L du niveau de carburant actuel");
            if(niveauEssence < 5){
                afficher(messageTableauBord="Vous êtes sur la réserve, pensez à remettre du carburant !")
            }
        }else{
            afficher(messageTableauBord = "\nLa distance à parcourir est impossible avec le niveau de carburant actuel");
        }
        return niveauEssence;
    }

    /**
     * M: Permet de calculer la consommation d'après la distance et la vitesse fourni
     * O: @return consoCarburant
     * I: @param {int} distance     = distanceParcouru
     *    @param {int} vitesse      = vitesseMoyenne
     */
    calculConso = function(distance, vitesse){//done
        var consoCarburant;
        
        if(vitesse < 50){
            return consoCarburant = (distance*10/100);
        }else if(vitesse > 49 && vitesse < 90){
            return consoCarburant = (distance*5/100);
        }else if(vitesse > 89 && vitesse < 130 ){
            return consoCarburant = (distance*8/100);
        }else if(vitesse > 129){
            return consoCarburant = (distance*12/100);
        }

    }

    /**
     * M: afficher un texte selon ce qui demandé
     * O: @return NULL
     * I: @param {string} texte      = texte de l'utilisateur 
     */
    this.toString = function(){//done
       return "\nVoici les informations demandées : "+
       "\nImmatriculation : "+immatriculation +
       "\nCouleur : "+couleur +
       "\nPuissance (ch): "+puissance +
       "\n"+messageTableauBord;
    }


};











