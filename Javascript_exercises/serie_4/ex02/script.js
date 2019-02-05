function maskOrNot(i){
    var text_disp = document.querySelector("#texte").style;
    if (i ==1) {
        text_disp.display="none";
    } else if (i==0){
        text_disp.display="block";
    }
}