angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, $http, config, serialGenerator, $location, operadoras) {
    $scope.operadoras = operadoras.data
    
    $scope.adicionarContato = function(contato) {
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        $http.post(config.baseUrl + "/contatos", contato).then(function(response){
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path("/contatos");
        });
    };
});