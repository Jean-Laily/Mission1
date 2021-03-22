//"use strict";
function Voiture(immat, color, weight, power, capReserv, nbPlace) {

    if(arguments.length < 6){
        afficher("Erreur, les paramètres suivant sont attendus (immatriculation, couleur, poids(kg), puissance(ch), capacité du réservoir, nombre de place assise) ");
    }else if(arguments.length > 5 ){

    

    const immatriculation = immat;
    var   couleur = color;
    const poids = weight;
    const puissance = power;
    const capaciteReservoir = capReserv;
    const nombrePlace = nbPlace;

    var   niveauEssence = 5.00;                    //definir à 5l
    var   assurer = false;                        // pas d'assurance
    var   messageTableauBord ="Vérification des parametres ........ ok, \nIl y a "+niveauEssence+"L de carburant et le véhicule n'a pas d'assurance !" ;               // message de bienvenue (revoir l'affichage en float)
        
        // getter
    this.getImmatriculation = function(){ return immatriculation; } //String
    this.getCouleur = function(){ return couleur.toLowerCase(); } //String
    this.getPoids = function(){ return poids; }  //int
    this.getPuissance = function(){ return puissance; }  //int
    this.getCapaciteReservoir = function(){ return capaciteReservoir; } //float
    this.getNombrePlace = function(){ return nombrePlace; } //int
    this.getNiveauEssence = function(){ return niveauEssence; }  //float
    this.getAssurer = function(){ return assurer; }  //bool
    this.getMessageTableauBord = function(){ return afficher(messageTableauBord); } //String

        // setter
    this.setAssurer = function(estAssurer){//todo
        if(typeof(estAssurer) == "boolean"){  //controle le type de donnée entrée
            if(estAssurer){
                assurer = true
                messageTableauBord="\nLe véhicule est maintenant assuré !";
            }else{
                messageTableauBord="\nLe véhicule non assuré !";
            }
            return estAssurer; 
        }else{
            messageTableauBord ="\nErreur, type de donnée attendu incorrect (true/false)";
        }    
    }

    /**
     * M: Permet de faire un changement de couleur sur le véhicule choisi
     * O: @return NULL (a redefinir pour retourner un BOOL)
     * I: @param {string} nouvelleCouleur        = modification de la couleur actuel
     */
    this.repeindre = function(newCouleur){//done
        if(typeof(newCouleur) == "string"){
            var newCouleurControler = newCouleur.toLowerCase();
            if(couleur == newCouleurControler){
                messageTableauBord="\nMerci pour ce rafraîchissement !";
            }else {
                couleur = newCouleurControler;
                messageTableauBord ="\nVoiture repeint en \""+couleur+"\", merci pour cette nouvelle couleur!";
            }
            return couleur;
        }else{
            messageTableauBord ="\nErreur, type de donnée attendu incorrect (\"string\")";
        }
    }

    /**
     * M: Permet d'ajouter du carburant de le véhicule si il n'excede pas la capacité max du reservoir
     * O: @return niveauEssence
     * I: @param {float} qteCarburant       = Quantité de carburant
     */
    this.mettreEssence = function(qteCarburant){//done
        if(typeof(qteCarburant) == "number"){       //Si la valeur de qteCar n'est pas un nombre alors affiche erreur
            var totalCarburant = arrondi2Chiffre(qteCarburant + niveauEssence);
            if(totalCarburant < capaciteReservoir){
                messageTableauBord = "\nAjout de "+qteCarburant+"L dans le réservoir !\nla nouvelle quantité de carburant est de "+totalCarburant+"L";
                niveauEssence = totalCarburant;                                          //niveauEssence prend la nouvelle valeur
            }else{
                messageTableauBord ="\nImpossible d'ajouter cette quantité de carburant ";
            }
            return niveauEssence;                                                             //retourne 
        }else{
            messageTableauBord ="\nErreur, type de donnée attendu incorrect (\"number\")";
        }
        
    }

    /**
     * M: Permet de d'informer selon le niveau d'essence si le trajet est possible ou non
     * O: @return niveauEssence
     * I: @param {int, int}
     */
    this.seDeplacer = function(distanceParcourue, vitesseMoyenne){//todo
        if(typeof(distanceParcourue) == "number" && typeof(vitesseMoyenne) == "number"){
            let consommation, deduire ;
            consommation = calculConso(distanceParcourue, vitesseMoyenne);
            if(consommation <= niveauEssence){
                deduire = (niveauEssence-consommation);
                niveauEssence = deduire;
                messageTableauBord ="\nPour "+distanceParcourue+"km vous avez consommée un total de "+consommation+"L , il reste "+niveauEssence+"L de carburant";
                if(niveauEssence < 10){
                    messageTableauBord="\nPour "+distanceParcourue+"km vous avez consommée un total de "+consommation+"L , il reste "+niveauEssence+"L de carburant ! \nAttention ! Voiture sur réserve, pensez à ajouter du carburant !";
                }
            }else{
                messageTableauBord = "\nLa distance à parcourir est impossible avec le niveau de carburant actuel";
            }
            return niveauEssence;
        }else{
            messageTableauBord ="\nErreur, type de donnée attendu incorrect (\"number\")";
        }
    }

    /**
     * M: Permet de calculer la consommation d'après la distance et la vitesse fourni
     * O: @return consoCarburant
     * I: @param {int} distance     = distanceParcouru
     *    @param {int} vitesse      = vitesseMoyenne
     */
    calculConso = function(distance, vitesse){//done
        if(typeof(distance) == "number" && typeof(vitesse) == "number"){
            var consoCarburant = 0;
            if(vitesse < 50){
                return consoCarburant = (distance*10/100);
            }else if(vitesse > 49 && vitesse < 90){
                return consoCarburant = (distance*5/100);
            }else if(vitesse > 89 && vitesse < 130 ){
                return consoCarburant = (distance*8/100);
            }else if(vitesse > 129){
                return consoCarburant = (distance*12/100);
            }
        }else{
            messageTableauBord ="\nErreur, type de donnée attendu incorrect (\"number\")";
        }
    }

    /**
     * M: afficher un texte selon ce qui demandé
         * I: @param {string} texte      = texte de l'utilisateur 
     */
    this.toString = function(){//done
        return "\nVoici les informations demandées : "+
        "\nImmatriculation : "+immatriculation +
        "\nCouleur : "+couleur +
        "\nPuissance (ch): "+puissance +
        "\n"+messageTableauBord;
    }
    }
};











