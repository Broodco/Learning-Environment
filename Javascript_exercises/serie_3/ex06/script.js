function ChSrcIn(i){
    console.log(i)
    var im = document.querySelector(`#image${(i+1)}`);
    console.log(im)
    im.setAttribute("src", `images/image${(i+1)}_2.jpg`)
}

function ChSrcOut(i){
    var im = document.querySelector(`#image${(i+1)}`);
    im.setAttribute("src", `images/image${(i+1)}.jpg`)
}