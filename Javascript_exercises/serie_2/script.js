// ----------------EXO 1

function surface(){
    long = parseFloat(prompt("Veuillez entrer la longueur du rectange"));
    larg = parseFloat(prompt("Veuillez entrer la largeur du rectange"));
    surf = (long*larg);
    alert("La surface du rectange est de "+ surf);
}

function perimetre(){
    long = parseFloat(prompt("Veuillez entrer la longueur du rectange"));
    larg = parseFloat(prompt("Veuillez entrer la largeur du rectange"));
    peri = ((long*2)+(larg*2));
    alert("La surface du rectange est de "+ peri);
}

// ------------------EXO 2

function surfdisk(){
    rayon = parseFloat(prompt("Veuillez entrer le rayon du disque (sans unité)"));
    surf= Math.PI*(rayon**2);
    var conf = confirm("Voulez-vous la surface du disque?");
    if (conf = true) {
        alert("La surface du disque est de "+ surf);
    }

}

// -------------------EXO 3

// a = 3;
// b = 2;

function triple(x){
    return (x*3);
}

function showresult(e){
    e.preventDefault;
    alert(triple(a))
    alert(triple(b))
}

// ---------------------EXO 4

tab=[-2, 1 , 4];

function additionne(x){
    return (x+2)
}

function affiche(){
    alert(additionne(tab[0]));
    console.log(tab[0]);
    console.log(tab.length);
    alert(additionne(tab[(tab.length)-1]));
}

// ---------------------EXO 5

function fun1(){
    b= 2
    var a=b++
    console.log(a)
    console.log(b)
    alert("a = "+ a +"\n"+"b = "+ b )
}
function fun2(){
    b= 2
    var a = ++b
    alert("a = "+a+"\n"+"b = "+b)
}
function fun3(){
    b= 2
    var a = b--
    alert("a = "+a+"\n"+"b = "+b)
}
function fun4(){
    b= 2
    var a = --b
    alert("a = "+a+"\n"+"b = "+b)
}
function fun5(){
    b= 2
    var a=1 ; a+=b++
    alert("a = "+a+"\n"+"b = "+b)
}
function fun6(){
    b= 2
    var a = 1 ; a+=++b
    alert("a = "+a+"\n"+"b = "+b)
}
function fun7(){
    b= 2
    var a = 1 ; a-=b++
    alert("a = "+a+"\n"+"b = "+b)
}
function fun8(){
    b= 2
    var a = 1 ; a-=++b
    alert("a = "+a+"\n"+"b = "+b)
}
function fun9(){
    b= 2
    var a = 1 ; a+=b--
    alert("a = "+a+"\n"+"b = "+b)
}
function fun10(){
    b= 2
    var a = 1 ; a+=--b
    alert("a = "+a+"\n"+"b = "+b)
}

// -----------------------EXO 6

tab=[-2, 1 , 4];

function soustrait(x){
    if (x>=0){
        result = x-2
    } else {
        result = "Nombre négatif!"
    }
    return result
}

function affiche_sous(){
    alert(soustrait(tab[0]));
    console.log(tab[0]);
    console.log(tab.length);
    alert(soustrait(tab[(tab.length)-1]));
}

// -----------------------EXO 7

function faireChoix(e){
    e.preventDefault();
    var nbr = parseInt(prompt("Veuillez entrer 1, 2 ou 3"));
    switch(nbr){
        case 1:
            alert("Merci!")
            break;
        case 2:
            alert("Bonjour!")
            break;
        case 3:
            alert("Au Revoir!")
            break;
        default :
            alert("Pardon? Que quoi voulez-vous?")
    }
}

// ------------------------EXO 8

function getTheDay(){
    current = new Date();
    var d = current.getDay();
    switch(d){
        case 0:
        alert("On est dimanche!")
        break;
        case 1:
        alert("On est lundi!")
        break;
        case 2:
        alert("On est mardi!")
        break;
        case 3:
        alert("On est mercredi!")
        break;
        case 4:
        alert("On est jeudi!")
        break;
        case 5:
        alert("On est vendredi!")
        break;
        case 6:
        alert("On est samedi!")
        break;
        default:
        alert("On est jevencredi!")
    }
}

// ------------------EXO 9

function testwhile(){
    valid = 0;
    while (valid == 0){
        char = prompt("Veuillez entrer une chaine de caractères");
        if (char.indexOf('p') > -1) {
            valid = 1;
            alert('"'+char+'"');
        } else {
            console.log(valid);
        }
    }
}

// ------------------EXO 10

function somme_3(){
    tot = 0;
    for (i = 1; i<=3; i++){
        tot += parseFloat(prompt("Veuillez entrer un nombre"));
    }
    alert("La somme est "+tot);
}

// ------------------EXO 11

function calculMoyenne(){
    var nbrcheck = 0;
    var list = []
    var sum = 0;
    while (nbrcheck==0){
        var iterations = parseInt(prompt("Combien de nombres voulez-vous additionner?"));
        console.log(iterations)
        if (Number.isInteger(iterations)==true){
            nbrcheck =1;
        }
    }
    for (i = 1; i<=iterations; i++){
        var ok = 0;
        while (ok==0){
            list[i] = parseInt(prompt("Donnez un nombre"));
            if (Number.isInteger(list[i])==true){
                ok =1;
                sum += list[i];
            }
        }
    }
    var nbre = (list.length)-1;
    var moyenne = (sum / ((list.length)-1));
    alert("Vous avez entré "+nbre+" valeurs."+"\n"+"La somme est de "+sum+"\n"+"La moyenne est de "+moyenne);
}

// -----------------EXO 12

function conversionTemperature(){
    var choiceok = false;
    while (choiceok == false){
        var choice = prompt("Programme de conversion de température.\nVeuillez entrer le numéro correspondant à votre choix ci-dessous.\n O. Fin du programme \n 1. De Celsius vers Farhenheit \n 2. De Celsius vers Kelvin \n 3. De Farhenheit vers Celsius \n 4. De Farhenheit vers Kelvin \n 5. De Kelvin vers Celsius \n 6. De Kelvin vers Farhenheit")
        if (choice=="1" || choice=="2" || choice=="3" || choice=="4" || choice=="5" || choice=="6"){
            choiceok = true
        } else if (choice =="0"){
            return;
        }
    }
    var tempok = false;
    while (tempok == false){
        var temp = prompt("Veuillez entrer la température à convertir sans unité, par exemple : \n 23.4")
        if (isNaN(temp)==false){
            temp = parseFloat(temp);
            tempok = true
        }
    }
    switch(choice){
        case "1":
            var tempfinal = (temp*(9/5))+32;
            alert(temp+"°C = "+tempfinal+"°F");
            break;
        case "2":
            var tempfinal = temp + 273.15;
            alert(temp+"°C = "+tempfinal+"K");
            break;
        case "3":
            var tempfinal = (temp-32)/(9/5);
            alert(temp+"°F = "+tempfinal+"°C");
            break;
        case "4":
            var tempfinal = ((temp-32)/(9/5))+273.15;
            alert(temp+"°F = "+tempfinal+"K");
            break;
        case "5":
            var tempfinal = temp - 273.15;
            alert(temp+"K = "+tempfinal+"°C");
            break;
        case "6":
            var tempfinal = ((9/5)*temp)-459.67;
            alert(temp+"K = "+tempfinal+"°F");
            break;
    }
}

// ----------------------EXO 13

function validateNumber(InPut){
    var re = /(^\d+\.?\d*$)/;
    return re.test(InPut);
}

function transformToFloat(inPut){
    return Number.parseFloat(inPut).toFixed(2);
}

function calculIMC(){
    var tailleok = false;
    var massok = false;
    while (massok == false){
        masse = prompt("Veuillez entrer votre masse en kg. \nLes décimales sont précédées d'un point. \nN'ajoutez pas d'unité.\nPour sortir du programme entrez exit")
        if (masse == "exit"){  
            return;
        } else if (validateNumber(masse) == true){
            masse = transformToFloat(masse);
            massok = true;
        } else{
            alert("Il y a eu une erreur dans l'input, veuillez réessayer.")
        }
    }
    while (tailleok == false){
        taille = prompt("Veuillez entrer votre taille en mètres. \nLes décimales sont précédées d'un point. \nN'ajoutez pas d'unité.\nPour sortir du programme entrez exit")
        if (taille == "exit"){
            return;
        } else if (validateNumber(taille) == true){
            taille = transformToFloat(taille);
            tailleok = true;
        } else{
            alert("Il y a eu une erreur dans l'input, veuillez réessayer.")
        }
    }
    var IMC = (masse / (taille**2));
    IMC = transformToFloat(IMC);
    if (IMC<16.5){
        alert("Masse = "+masse+"kg\nTaille = "+taille+"m\nVotre indice de masse corporelle est de "+IMC+"\nVous êtes en état de dénutrition.")
    }else if (16.5<=IMC&&IMC<18.5){
        alert("Masse = "+masse+"kg\nTaille = "+taille+"m\nVotre indice de masse corporelle est de "+IMC+"\nVous êtes en état de maigreur.")
    }else if (18.5<=IMC&&IMC<25){
        alert("Masse = "+masse+"kg\nTaille = "+taille+"m\nVotre indice de masse corporelle est de "+IMC+"\nVous êtes de corpulence normale.")
    }else if (25<=IMC&&IMC<30){
        alert("Masse = "+masse+"kg\nTaille = "+taille+"m\nVotre indice de masse corporelle est de "+IMC+"\nVous êtes en surpoids.")
    }else if (30<=IMC&&IMC<35){
        alert("Masse = "+masse+"kg\nTaille = "+taille+"m\nVotre indice de masse corporelle est de "+IMC+"\nVous êtes en état d'obésité modérée'.")
    }else if (35<=IMC&&IMC<40){
        alert("Masse = "+masse+"kg\nTaille = "+taille+"m\nVotre indice de masse corporelle est de "+IMC+"\nVous êtes en état d'obésité sévère.")
    }else if(40 <= IMC){
        alert("Masse = "+masse+"kg\nTaille = "+taille+"m\nVotre indice de masse corporelle est de "+IMC+"\nVous êtes en état d'obésité morbide'.")
    }
}