var assert = require('assert');
var sedexMarciano = require('../src/hello');

describe('Sedex Marciano', function(){

	it('Deve retornar S para caso simples', function() {
		var L = 10;
		var A = 20;
		var P = 30;
		var R = 30;
		assert.equal(sedexMarciano.verificaCaixa(L, A, P, R),'S');
	});

	it('Deve retornar N pra o segundo caso fornecido', function() {
		var L = 10;
		var A = 10;
		var P = 10;
		var R = 7;
		assert.equal(sedexMarciano.verificaCaixa(L, A, P, R),'N');
	});

	it('Deve retornar S pra o terceiro caso', function () {
		var L = 2;
		var A = 4;
		var P = 4;
		var R = 3;
		assert.equal(sedexMarciano.verificaCaixa(L, A, P, R),'S');
	});

	it('Teste da sacanagem', function() {
		var L = 20;
		var A = 10;
		var P = 30;
		var R = 30;
		assert.equal(sedexMarciano.verificaCaixa(L, A, P, R),'S');
	});

});
