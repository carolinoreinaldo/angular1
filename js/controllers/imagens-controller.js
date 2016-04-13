angular.module('imagens-module').controller('ImagensController',function($scope){
	$scope.imagens = [
	{
		url: 'https://www.epochtimes.com.br/wp-content/uploads/2014/04/ct-sensores-bigodes-gato.jpg',
		titulo: 'Gato'
	},
	{
		url: 'http://listatop10.com.br/wp-content/uploads/2015/01/urso-polar-um-dos-animais-mais-perigosos.jpg',
		titulo: 'Urso Polar'
	},
	{
		url: 'http://mensagens.culturamix.com/blog/wp-content/gallery/mensagens-sobre-cachorros-2/mensagens-sobre-cachorros-2.jpg',
		titulo: 'Cachorro'
	},
	{
		url: 'http://brasilescola.uol.com.br/upload/e/carnivoro(1).jpg',
		titulo: 'Leão'
	}]
});