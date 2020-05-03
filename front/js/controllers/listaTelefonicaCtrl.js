angular.module("listaTelefonica").controller("listaTelefonicaCtrl",function ($scope, $http, contatos, contatosAPI, operadoras, config, serialGenerator) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = contatos.data;
    $scope.operadoras = operadoras.data;

    const init = function() {
      calcularImpostos($scope.contatos)
      generateSerial($scope.contatos);

    };
    const calcularImpostos = function(contatos){
      contatos.forEach(function(contato){
        contato.operadora.precoComImposto = calcularImposto(contato.operadora.preco);
      })
    };
    const generateSerial = function(contatos) {
      contatos.forEach(function(item) {
        item.serial = serialGenerator.generate()
      });
    };
    const calcularImposto = function(preco) {
      const imposto = 1.2;
      return preco * imposto
    };
    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function(contato) {
            if(!contato.selecionado) return contato;
        });
        $scope.verificarContatoSelecionado($scope.contatos);
    };
    $scope.verificarContatoSelecionado = function(contatos) {
      $scope.hasContatoSelecionado = contatos.some(function(contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function(campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao
    };
    init();
});