//Posici�n: En todas las p�ginas
$(document).ready(function () {
    if(/^\/t(\d+)/.test(location.pathname)){

        //Conectado
        $('.online .postprofile').prepend('<div class="online-img" style="position: absolute; width: 100%;"><img src="http://i.imgur.com/PBcX2Dp.png" style="float: right; margin-right: 5px; margin-top: -5px;" /></div>');

        //Desconectado
        $('.postprofile:not(.online .postprofile)').prepend('<div class="online-img" style="position: absolute; width: 100%;"><img src="http://i.imgur.com/o4xq4cc.png?1" style="float: right; margin-right: 5px; margin-top: -5px;" /></div>');

    }
});