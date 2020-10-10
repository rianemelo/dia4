(function () {
    "use strict";

    // CONTROLLER
    angular.module('listaComprasApp')
        .controller('AcessoController', acessoController);

    acessoController.$inject = ['$rootScope','ListaComprasService'];

    function acessoController($rootScope, service) {
        var vm = this;
        
        /* ***************    INIT VARIÁVEIS    *********************************** */
        
        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.logar = logar;

        function logar() {
            return service.logar(vm.login)
                .then(function (_resp) {
                    if (_resp.error) {
                        $rootScope.listaMensagens.push({text: _resp.msg, tipo: 'danger'});
                    } else {
                        $rootScope.listaMensagens.push({text: _resp.message, tipo: 'success'});
                        $rootScope.userLogged = _resp.userLogged;
                    }
                });
        }

        /* ***************    FUNÇÕES INSTERNAS    ******************************** */

    }

})();
