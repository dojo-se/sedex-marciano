

function calculaHipotenusa(cateto1, cateto2) {
	var hipotenusa = Math.pow(cateto1*cateto1 + cateto2*cateto2, 0.5);

	return hipotenusa;
}

function verificaCaixa(largura, altura, profundidade, raio) {
	var maior, diagonal1, diagonal2;
	diagonal1 = calculaHipotenusa(profundidade, largura);

	diagonal2 = calculaHipotenusa(profundidade, altura);

	maior = diagonal1 >= diagonal2 ? diagonal1 : diagonal2;

	if (maior <= raio*2 ) {
		return 'S';
	} else {
		return 'N';
	}
}

module.exports.verificaCaixa = verificaCaixa;
