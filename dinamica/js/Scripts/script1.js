$(document).ready(function(){
	$("#addTema").click(function(){
		var tema = $("#assunto").val();
		$(".AssuntosParaAprender").append(
			"<li> <input type='checkbox' value="+ tema + "> " + tema + " </li>");
	});
	
	/*$("#transfereTema").click(function(){
		var temaAprendido = $("#assunto").val(); 
		$(".AssuntosAprendidos").append(
				"<li> <input type='checkbox' value="+ temaAprendido + "> " + temaAprendido + " </li>");	);*/
	//});

	});