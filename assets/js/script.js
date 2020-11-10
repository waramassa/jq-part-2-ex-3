$(document).ready(function(){     

    $('#show').click(function(){
        $('#text').show(2000);
    });
    // je cible id "show" avec le gestionnaire d'évenenment "click" 
    //(au click sur la cible et je déclare une function anonyme qui cible mon id "texte" avec le gestionnaire d'evenenement "show" qui dévoile le paragraphe.
    // 2000 correspond à une tempo "2000" milliseconde

    $('#hide').click(function(){
        $('#text').hide(2000);
    })
});
    // idem mais àl'inverse le gestionnaire "hide" masque le paragraphe

