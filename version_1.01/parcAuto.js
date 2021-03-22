//constructor(immat, color, weight, power, capReserv, nbPlace)

// création des objets voiture instancié depuis la class Voiture()
var Picasso = new Voiture();
var zoe = new Voiture('FD-124-SE', "bleu", 1268, 110);
var kona = new Voiture("FF-114-TR", "blanche Nacré", 1800, 204, 64.0, 5);
    
/* afficher("version Picasso *****************************************************************************************************");
// modifier une couleur
Picasso.repeindre("");
Picasso.getMessageTableauBord();

//activation de l'assurance
Picasso.setAssurer(false);
Picasso.getMessageTableauBord();

//deplacement sur une distance avec une vitesse moyenne
Picasso.seDeplacer(50,100);
Picasso.getMessageTableauBord();
 */

/* afficher("version ZOE *****************************************************************************************************");
// modifier une couleur
zoe.repeindre("RoSe");
zoe.getMessageTableauBord();

//activation de l'assurance
zoe.setAssurer(false);
zoe.getMessageTableauBord();

//deplacement sur une distance avec une vitesse moyenne
zoe.seDeplacer(120,80);
zoe.getMessageTableauBord();
 */
afficher("version KONA *****************************************************************************************************");
afficher(kona.toString());

//changement couleur
kona.repeindre("VErt");
kona.getMessageTableauBord();

//ajout du carburant
kona.mettreEssence(26.43);
kona.getMessageTableauBord();

//activation de l'assurance
kona.setAssurer(true);
kona.getMessageTableauBord();

//deplacement sur une distance avec une vitesse moyenne
kona.seDeplacer(200,131);
kona.getMessageTableauBord();