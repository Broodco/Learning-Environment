/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length
}

var remplaceECar = function (texte) {
    var eReplaced = false;
    var newTxt = "";
    for (var car in texte){
        if (texte[car] == "e" && eReplaced ==false){
            eReplaced = true;
            newTxt += " "
        } else {
            newTxt += texte[car]
        }
    }
    return newTxt
}

var concatString = function (texte1, texte2) {
    return texte1+texte2

}
var afficherCar5 = function (texte) {
    for (var car in texte){
        if (car == 4){
            return texte[car]
        }
    }
}
var afficher9Car = function (texte) {
    var newTxt =""
    for (var car in texte){
        if (car < 9){
            newTxt += texte[car]
        }
    }
    return newTxt

}
var majusculeString = function (texte) {
    return texte.toUpperCase()
}
var minusculeString = function (texte) {
    return texte.toLowerCase()
}
var SupprEspaceString = function (texte) {
    var newTxt = "";
    for (var car in texte){
        if (texte[car] !== " " || ((car != 0 && texte[car]==" ") && (car != (texte.length-1) && texte[car]==" "))){
            newTxt += texte[car];
        }
    }
    console.log(newTxt)
    return newTxt
}
var IsString = function (texte) {
    
}

var AfficherExtensionString = function (texte) {

}
var NombreEspaceString = function (texte) {

}
var InverseString = function (texte) {

}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {

}
var valeurAbsolue = function (nombre) {

}
var valeurAbsolueArray = function (array) {

}
var sufaceCercle = function (rayon) {

}
var hypothenuse = function (ab, ac) {

}
var calculIMC = function (poids, taille) {

}
