(function () {
    "use strict";

    // CONTROLLER
    angular.module('listaComprasApp')
        .controller('HeaderController', headerController);

    headerController.$inject = ['$location', 'ListaComprasService'];

    function headerController($location, service) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */
        
        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.go = go;
        //vm.service = serviceF;
        vm.ativo = false;

        function go(_path) {
            $location.path(_path);
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


        /* ***************    FUNÇÕES INSTERNAS    ******************************** */

    }

})();
