(function () {
    "use strict";

    // CONTROLLER
    angular.module('listaComprasApp')
        .controller('HeaderController', headerController);

    headerController.$inject = ['$location', 'ListaComprasService', 'helperFactory'];

    function headerController($location, service, helper) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */
        
        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.go = go;
        //vm.service = serviceF;
        vm.ativo = false;
        vm.logout = logout;

        function go(_path) {
            var path = _path ? _path : $location.path(); //$location.path() retorna o path atual 
            //var path = _path para checar se a variável _path está "setada"
            if (path === '/login' || path === '/register') {
                $location.path(path); //redireciona para o path
            } else {
                isLoggedIn(path); //senão, para ir para o HOME deve estar logado
            }
            setPage();
            //console.log($location.path().substring(1));
        }

        function logout() {
            helper.setRootScope('userLogged', null);
            //console.log("=====", helper.getRootScope('userLogged'));
        }

        /* ***************    FUNÇÕES INTERNAS    ******************************** */
        function isLoggedIn(_path) {
            if (helper.getRootScope('userLogged')) {
                //console.log(helper.getRootScope('userLogged'));
                $location.path(_path);                
            } else {
                helper.addMsg('Você não tem acesso a esta página.', 'danger', 'Faça o login.');
                $location.path('/login');
            }   
            
        }

        function setPage() {
            helper.setRootScope('page', $location.path().substring(1)); //'melo'.substring(1) = elo 
        }







         /*vm.service = service.exemplo;
         function go(_path) {
            service.exemplo();
            $location.path(_path);
        } */
        
        /* function serviceF(_path) {
            return service.exemplo()
                .then(function (response) {
                    console.log('veio da service', response);                    
                });
         
        } */

    }

})();

