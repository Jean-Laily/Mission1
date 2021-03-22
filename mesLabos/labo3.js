function Employer(nom, branche, salaire){                                   //fonction de la class Employer avec des parametres qui fait office de constructeur
    this.nomVoiture = nom;                                                  //la propriété exposé d'un objet son définie à l'interieur de la fonction par le préfixe this.
    this.nomBranche = branche;                                              //une autre propriété exposé !
    var leSalaire = salaire;                                                //un attibut privé se définnissent classiquement par le mot-clé var.

    //méthodes
    this.salaireAnnuel = function(){ return leSalaire *12; };                 //calcule la salaire sur 1 an // attribut privé ici donc pas de préfixe this.

    this.modifieSalaire = function(nouveauSalaire){ if(leSalaire < nouveauSalaire) {leSalaire = nouveauSalaire;};};         //setter de la class Employer

    this.getSalaire = function() {return leSalaire;}                         //getter de la class Employer pour la lecture du salaire


};

//instanciation de 2 objets
var employer1 = new Employe("Jean", "dev", 2000);
var employer2 = new Employe("Toto", "Production", 1800);

//manipulation de l'objet
employer1.modifieSalaire(2500);                          //nouvelle affectation a l''attribut privé
afficher(employer1.salaireAnnuel());                     // affectation ok
afficher(employer1.nom);                                 // affichera le nom

// enrichissement du prototype 
Employer.prototype.sonChef = null;                        //ajout de la propriété a la classe Employe















































function afficher(objet){
    return console.log(objet);
}
