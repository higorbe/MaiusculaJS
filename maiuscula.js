function letraMaiuscula()
{
	// função para mudar para maiúscula a letra pressiona no teclado
	var letra = document.getElementById("idtexto").value;
	letra = letra.toUpperCase();
	document.getElementById("idtexto").value =	letra;
}