function adicionaDisciplinaLista() {
	$(document).ready(function(){
		var assunto = $("#AssuntosParaAprender").val();
		var elemento = $("<input>");
		var texto = $("<label></label>");

		elemento.attr("type", "checkbox");
		elemento.attr("class", "caixa movel");
		texto.html(assunto);
		texto.append(elemento);

		$("#listaAssuntosAprender").append(texto);
			});
				});
				
function adicionaDisciplinaListaAprendida() {
	var assunto = $("#assuntosAprendidos").val();
	var elemento = $("<input>");
	var texto = $("<label></label>");

	elemento.attr("type", "checkbox");
	elemento.attr("class", "caixa");
	texto.html(assunto);
	texto.append(elemento);

	$("#AssuntosAprendidos").append(texto);
}

function removeDisciplina() {
    $(".caixa:checked").parents("label").remove();
}

function moveDisciplina() {
    var assuntos = $(".movel:checked")
        .prop("checked", false)
        .removeClass("movel")
        .parents("label");
    $("#AssuntosAprendidos").append(assuntos);
}