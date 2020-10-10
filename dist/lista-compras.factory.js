(function () {
    "use strict"; //são usadas p manipular objetos e serviçõs de utilidades

    // MODULO
    angular.module('listaComprasApp')
        .factory('ListaComprasFactory', listaComprasFactory);

    listaComprasFactory.$inject = [];

    function listaComprasFactory() {
        return {
            name:name

        }
        
        // ============
        function name(params) {
            //implementar    
        }

    }



})();
