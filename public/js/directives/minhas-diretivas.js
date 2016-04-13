angular.module('minhasDiretivas',[]).directive('meuPainel',function(){
	var ddo = {}; //directive definition object
	
	ddo.restrict = "AE"; //pode ser comportar como elemento ou como atributo
	
	ddo.scope = {
		titulo: '@titulo' //ou simplesmente @, aqui o escopo da diretiva irá receber o valor de titulo
	}
	ddo.transclude = true; //o angular entende que tem que manter a consistencia com os filhos, no caso tag img
	
	//ddo.templateUrl= 'js/directives/meu-painel.html'; //ele sempre procura dentro da pasta public

	ddo.template = 
			'<div class="panel panel-default">'
	    + 	'	<div class="panel-heading">'
	    +	'    	<h3 class="panel-title">{{titulo}}</h3>'
	    +	'	</div>'
	    +	'	<div class="panel-body" ng-transclude>'
	    +	'	</div>'
		+	'</div>';
		
	return ddo;
});