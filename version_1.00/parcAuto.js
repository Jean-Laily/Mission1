//constructor(immat, color, weight, power, capReserv, nbPlace)

// const kona = new Voiture("FF-114-TR","BLANC",1800,204,64.0,5);
// const zoe = new Voiture("AA-454-VF","ROUge",1254,110,48.0,5);

//kona


// //Zoé
// afficher(zoe.toString());



    // création d'un objet instancié depuis la class Voiture()
    var zoe = new Voiture('FD-124-SE', "bleu", 1268, 110, 26.0, 5);

    // const dacia = new Voiture();

    const kona = new Voiture("FF-114-TR", "blanche Nacré", 1800, 204, 64.0, 5);

    // afficher les attribues du véhicule
    afficher("Voici les informations pour la Zoe "+zoe.toString());
    afficher("");
    afficher("Voici les informations pour la Kona "+kona.toString());

    // modifier une couleur

    afficher(zoe.repeindre("orange"));
    afficher(kona.toString());
    kona.repeindre("NOIR");
    kona.mettreEssence(50.34);
    kona.setAssurer(true);
    kona.seDeplacer(200,131);