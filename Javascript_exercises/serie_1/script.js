// ---------------------EXO 1

// var bteDialog = "Hello World"

// alert(bteDialog)

// ----------------------EXO 2

// var nom = "Broodco"
// var prenom = "Max"
// var ville = "St-Gilles"

// alert(
//     "Nom : "+nom+"\n"+
//     "Prénom : " + prenom+"\n"+
//     "Ville : "+ville
// )

// -----------------------EXO 3

// prenom = prompt("Veuillez entrer votre prénom");
// alert("Bonjour "+prenom)

// -----------------------EXO 5

function multip(e){
    e.preventDefault();
    var form = document.querySelector("#op_math");
    var num1 = Math.floor(form.premier_nombre.value);
    var num2 = form.deuxieme_nombre.value;
    var mul = (num1*num2);
    alert(mul);
}
// -----------------------EXO 6

function divis(e){
    e.preventDefault();
    var form = document.querySelector("#op_math");
    var num1 = Math.floor(form.premier_nombre.value);
    var num2 = form.deuxieme_nombre.value;
    var div_ent = Math.floor(num1/num2);
    var restdiv = (num1%num2);
    alert(div_ent+" modulo "+ restdiv);
}
// ------------------------EXO 7

function calcul7(e){
    e.preventDefault();
    var form= document.querySelector("#formexo7");
    var point = form.pointure.value;
    var annee = form.annee.value;
    var resultat = (1766 - annee + 50*(5+(2*point)));
    alert(resultat);
}
// ------------------------EXO 8

function majornot(e){
    e.preventDefault();
    var form = document.querySelector("#formage");
    var age = form.age.value;
    if ((age-18) >= 0) {
        console.log("ok");
        alert("Vous êtes majeur");
    } else{
        console.log("min");
        alert("Vous êtes mineur");
    }
}