$(document).bind('keydown', 'ctrl+q', function(event){
    event.preventDefault();
    console.log('Ctrl+Q');
    jQuery("#query").focus();
});


var deleteRows = function (arg_controller) {

    var data = $('.form-rows').serialize();
    if(typeof arg_controller != "undefined"){
        var controller = arg_controller;
    } else {
        var controller = window.app.controller;
    }
    console.log(data);

    $.ajax({
        url: window.app.baseUrl+"/app/"+controller+"/delete/",
        type: 'POST',
        async: true,
        cache: false,
        data: data,
        success: function(data){ 
            location.reload();
        }
    });
};

var CountSelectedRows = function () {
    return $('.select-row:checked').length;
};

$(document).ready(function(){

    toastr.options = {
      "closeButton": true,
      "debug": true,
      "progressBar": true,
      "positionClass": "toast-top-right",
      "onclick": null,
      "showDuration": "400000",
      "hideDuration": "1000",
      "timeOut": "0",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }

    $.blockUI.defaults.message = $('#block-ui');
    $(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);
    
    $('#RequestSendForm').on('submit',function(e){
        e.preventDefault();

        var data = $(this).serialize();
        $.ajax({
            url: window.app.actionSendRequest,
            type: 'POST',
            async: true,
            cache: false,
            dataType: 'json',
            data: data,
            success: function(data){
                if (data['result']) {
                    $('#right-sidebar').removeClass("sidebar-open");
                    $('#RequestReason').val('');
                    $('#RequestDescription').val('');
                    toastr.success(data['message'], "Felicitaciones !");
                }else{
                    toastr.error(data['message'], "Error !");
                }
            }
        });
    });

    $('.i-check').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });
    
    $('.btn-delete').click(function(event) {
        event.preventDefault();
        if(CountSelectedRows()){
            //Si el boton tiene especificada una data-controller para especÃ­ficar el borrado se lo
            //agrego al botÃ³n
            var controller = $(this).data('controller')
            if(typeof controller != "undefined"){
                $('#modal-confirm-delete-rows').find('#btn-confirm-delete').attr('data-controller',controller);
            }
            $('#modal-confirm-delete-rows').modal('show');
        }
    });

    $('.deletePet').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        $('#modal-confirm-delete-pet').find('#btn-confirm-delete-pet').attr('data-controller',href);
        $('#modal-confirm-delete-pet').modal('show');
    });

    $('#btn-confirm-delete-pet').click(function(event) {
        $('#modal-confirm-delete-pet').modal('hide'); 
        var controller = $(this).data('controller');
        location.href = controller;
    });    

    $('#btn-confirm-delete').click(function(event) {
        $('#modal-confirm-delete-rows').modal('hide'); 
        var controller = $(this).data('controller');
        deleteRows(controller);
    });
    
    $('.chosen-select').chosen({
        width: "365px"
    });
    
    $('.datepicker').datetimepicker({
        format: 'd-m-Y',
        timepicker:false,
        lang: 'es',
        todayButton: true,
        scrollInput: false
    });
    
    $('.datetimepicker').datetimepicker({
        format: 'd-m-Y H:i',
        timepicker:true,
        lang: 'es',
        todayButton: true,
        step: 30,
        scrollInput: false
    });

    $('.timepicker').datetimepicker({
        format: 'H:i',
        timepicker:true,
        datepicker:false,
        lang: 'es',
        step: 30,
        scrollInput: false
    });
    
    $('.animation-hover').each(function() {
        animationHover(this, 'pulse');
    });

    $('.tooltip-js').each(function() {
        $(this).tooltip({    
            placement : $(this).data('tooltip-placement'),
            title : $(this).data("tooltip-title")         
        });
    });

    $('.popover-js').each(function() {
        $(this).popover({
            content : $(this).attr("data-popover-content"),
            placement : $(this).attr('data-popover-placement'),
            html: true
        });
    });
    
});
