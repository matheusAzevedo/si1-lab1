$(document).ready(function(){
	$("#addTema").click(function(){
		var tema = $("#assunto").val();
		$(".AssuntosParaAprender").append(
			"<li id='Tema'> " +
			"<a href='javascript:void(0);' value="+tema+" class='btn btn-default btn-lg aprendi'> Já Aprendi esse tema </a>" +
			"<a href='javascript:void(0);' value="+tema+" class='btn btn-default btn-lg removi'> Remover esse tema</a>"
			+ tema + 
			"</li>");
		});
	
	// Mover ;
	$(document).on('click', 'a.aprendi', function() {
        var assunto = $(this).attr('value');
        $(".AssuntosAprendidos").append("<li id='TemaAprendido'> " +
 			"<a href='javascript:void(0);' value="+assunto+" class='btn btn-default btn-lg removi'>Remover esse tema</a>"
 			+ assunto + 
 			"</li>");
        $(this).closest('li').remove();
	});
	
	$(document).on('click', 'a.removi', function() {
		$(this).closest('li').remove();
	});   
    });

/*
 * function TransferirTema(tema){ var temaAprendido = $this;
 * //console.log(temaAprendido);
 * $(".AssuntosParaAprender").remove(temaAprendido);
 * $(".AssuntosAprendidos").append(temaAprendido); };
 */