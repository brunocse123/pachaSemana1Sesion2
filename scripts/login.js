
$(function() {
    $(window).bind("load resize change", function () {
        if ($(window).width() > 400) {
            $('#login').centrar(false, 'y');
        }
    });
});
imgAl = function () {
    var list = ['http://proveedores.ext.austral.com.pe/images/login//02.png', 'http://proveedores.ext.austral.com.pe/images/login//02.png'];
    var rand = list[Math.floor(Math.random() * list.length)]; return rand;
};
jQuery.fn.centrar = function (padre, eje) {
    this.css("position", "absolute");
    if (eje) {
        eje === 'x' ? this.css("left", Math.max(0, ((padre ? $(this).parent().width() : $(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px") : this.css("top", Math.max(0, ((padre ? $(this).parent().height() : $(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    } else {
        this.css("left", Math.max(0, ((padre ? $(this).parent().width() : $(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px")
        this.css("top", Math.max(0, ((padre ? $(this).parent().height() : $(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    }


    return this;
};
$(document).ready(function(){
	var imagen = imgAl();
	$('#background').css({'background':'url('+imagen+') no-repeat', '-webkit-background-size':'cover', '-moz-background-size': 'cover', '-o-background-size': 'cover', 'background-size': 'cover' }); 
});