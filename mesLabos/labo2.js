//les expression de fonctions en JAVAScript
// Les expressions de fonctions diffèrent des instructions de fonctions :
//  Elles peuvent être déclarées n’importe où dans le code (dans un if() par exemple),
//  Elles ne sont pas remontées automatiquement en haut du bloc de script (elles ne
// peuvent donc pas être appelées avant d’avoir été déclarées).
//  Si l’expression de fonctions utilise une fonction anonyme, elle ne pourra pas être
// récursive

/* ////////////////////// instruction de fonction \\\\\\\\\\\\\\\\\\\\\\\\\\ */
// création d'une fonction simple procédure
function hello() { alert("Bonjour"); }
//fonction variable => instruction afficher BONJOUR
//création d'une fonction retournant une valeur
function rectangle(largeur, longueur){
    return largeur * longueur;
}
//fonction 
function afficher(objet){
    return console.log(objet);
}

/* //////////////////////////////// expression de fonction \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
//création fonction anomyne et comment le lire
var getSurface = function(largeur, hauteur){
   return largeur * hauteur;
}; //ne pas oublier le ; pour la function anonyme
var s = getSurface(8,4);

//utilisation d'une fonction depuis une variable
var getCoucou = coucou;
function coucou() { afficher("COUCOU !"); }

/* //////////////////////////////// AFFICHAGE de test \\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
//affichage test 
afficher("affichage du resultat de 2 parametre en rectangle est "+rectangle(4,2));
//lecture d'une fonction anonyme
afficher("le resultat d'un surface de fonction anonyme est "+s);
//lecture d'une fonction depuis une variable 
getCoucou(); //getCoucou est devenue lui meme une fonction héritage de typage de coucou()



/******************************************        callBack             ********************************************/
// var i = 10;

//var decompte = setInterval(function(){ afficher(i--); if(i == 0){ alert("BONNE ANNEE 2020 !"); clearInterval(decompte);} }, 100);

//var minuteur = setTimeout(function(){ var d= new Date(); var date = d.getHours()+ ":"+ d.getMinutes(); alert("Après 10 secondes, il est "+date); clearInterval(decompte); }, 10000); //se lance après 10 seconde
for(i = 0; i < 10; i++){
    var iBomb= setTimeout(function(){alert("TEST !!!!") }, 1000);
}
