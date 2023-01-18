var styles=new Map();

/**
 * Fonction qui permet d'ajouter des 'option' à la liste déroulante de sélection de style
 */
function afficherStylesOptions(){

}

/**
 * Fonction chargée de mettre à jour suivant le style sélectionné
 * @param {*} style : le style sélectionné
 */
function majStyle(style){
    var elementTxt = document.getElementById("txt");
    elementTxt.removeAttribute("class")
    var elementsImg = document.getElementsByTagName("img");
    for(let elementImg of elementsImg) {
        elementImg.removeAttribute("class") 
    }
    
    elementTxt.setAttribute("class",styles.get(style).fond +" "+ styles.get(style).txt)
    
    for(let elementImg of elementsImg) {
        elementImg.setAttribute("class",styles.get(style).img )
    }
    
}

/**
 * Fonction qui permet d'ajouter un nouveau style par rapport à notre sélection
 */
function ajouterStyle(){
    
}

function init(){
    styles.set("defaut",{txt:"txtBlue",fond:"fondRouge",img:"imgNB"})
}