// créez un carré de 50px sur 50px en html (aidez vous de backgroundColor pour la visualisation), ce carré possèdera une position: absolute, ce carré possédera l’id “square”
// déplacer le carré de 10px dans la direction donné par les touches du clavier (haut bas gauche droite)
var cadre = document.getElementById('square'),
    s = cadre.style, // Un petit raccourci
    i = cadre.offsetLeft, // On récupère la position absolue initiale.
    j = cadre.offsetTop;
document.onkeydown = function(event){
    var event = event || window.event,
        keyCode = event.keyCode;
     
    // On détecte l'événement puis selon la fleche, on incrémente ou décrément les variables globales de position, i et j.
    switch(keyCode){
        case 38:
            j-=10;
            break;
        case 40:
            j+=10;
            break;
        case 37:
            i-=10;
            break;
        case 39:
            i+=10;
            break;
    }
    // Et enfin on applique les modifications :
    s.left = String(i)+'px';
    s.top = parseInt(j) + 'px';;
}