

function calculaHipotenusa(cateto1, cateto2) {
	var hipotenusa = Math.pow(cateto1*cateto1 + cateto2*cateto2, 0.5);

	return hipotenusa;
}

function verificaCaixa(largura, altura, profundidade, raio) {
	var maior, diagonal1, diagonal2, diagonal3;

	diagonal1 = calculaHipotenusa(profundidade, largura);

	diagonal2 = calculaHipotenusa(profundidade, altura);

	diagonal3 = calculaHipotenusa(diagonal1, altura);

	maior = Math.max(diagonal1, diagonal2, diagonal3);

	return ( maior <= raio*2 ) ?	'S' : 'N';

}
module.exports.verificaCaixa = verificaCaixa;
