function changeclr(i){
    let parag = document.querySelector("p");
    if (i==0){
        parag.style.color = "green";
    } else if (i == 1){
        parag.style.color = "red";
    } else if (i == 2){
        parag.style.color = "blue";
    }
}