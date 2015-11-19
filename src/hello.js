

function calculaHipotenusa(cateto1, cateto2) {
	var hipotenusa = Math.pow(cateto1*cateto1 + cateto2*cateto2, 0.5);

	return hipotenusa;
}

function verificaCaixa(largura, altura, profundidade, raio) {
	return (calculaHipotenusa(calculaHipotenusa(profundidade, largura), altura) <= raio*2 ) ?	'S' : 'N';
}

module.exports.verificaCaixa = verificaCaixa;
