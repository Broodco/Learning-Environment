function verifmdp(){
    let mdp = document.querySelector("#motdepasse");
    let conf = document.querySelector("#confirmation");
    console.log(mdp)
    console.log(conf)
    if (mdp.value.localeCompare(conf.value)==false){
        mdp.style.border  = "2px solid green"
        conf.style.border = "2px solid green"
    } else {
        mdp.style.border  = "2px solid red"
        conf.style.border = "2px solid red"

    }
}
