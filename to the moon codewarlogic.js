function foldTo(distance) {
 
    let epaisseur=0.0001
    let compteur=0
    while (epaisseur<distance) {
    epaisseur = epaisseur * 2;
    compteur ++;
    }
    return compteur
}

console.log(foldTo(384000000))