function ChSrcIn(i){
    var im = document.querySelector(`#image${(i+1)}`);
    im.setAttribute("src", `images/image${(i+1)}_2.jpg`)
}

function ChSrcOut(i){
    var im = document.querySelector(`#image${(i+1)}`);
    im.setAttribute("src", `images/image${(i+1)}.jpg`)
}