$(document).ready(function() {
	/*	
		Vars
	*/
	var clickable 	= $('.setViewed'),
		etNumero	= $('.label-primary'),
		direccion	= window.app.baseUrl+'/app/alerts/setViewed/';

	/*
		Eventos
	*/

	clickable.click(function(e){
		var id 	= $(this).data('id'),
			div	= $('#li'+id+'');
        $.ajax({
            url: direccion+id,
            dataType: 'json',
            type: 'POST',
            data: {
                id: id
            },
            success: function(data) {
                if (data['result']){
                	var numero = (parseInt(etNumero.html())-1);
                	etNumero.html(numero);
                	div.remove();
                    toastr.success(data['message'], "Felicitaciones !");
                }
            }
        });
	});

});