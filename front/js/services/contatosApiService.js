angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {
    const _getContatos = function() {
        return $http.get(config.baseUrl + "/contatos");
    }

    const _getContato = function(id){
        return $http.get(config.baseUrl + "/contatos/" + id)
    }

    return {
        getContatos : _getContatos,
        getContato : _getContato
    };
});