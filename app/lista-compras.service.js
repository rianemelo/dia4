(function () {
    "use strict"; //são usadas para requisições, integração com o back-end
                 

    // MODULO
    angular.module('listaComprasApp')
    .service('ListaComprasService', listaComprasService);

    listaComprasService.$inject = ['$http', 'constantes']; //importamos $http para fazer chamadas http

    function listaComprasService($http, constantes) {
    // uma service vai ser uma instância dela mesma, na vdd é um singleton.
    //UM MODO PARA A SERVICE
        /* this.name = name;

        function (params) {
            //implementar
        } */
        
        return {
            exemplo: exemplo, //dessa forma conseguimos ter os nomes de todas as funções dessa service juntas
            logar : logar

        }
        
        // ============

        function exemplo() {
            //implementação
            return $http.get('http://worldclockapi.com/api/json/est/now') //não podemos garantir q algo será retornado, então usamos a promisse
                .then(function (response) { //quando ela retornar alguma coisa, façamos isso
                    console.log(response);
                    return response.data; //
                })
                .catch(function (error) { //se tiver algum erro, faça isso
                    return error;
                });

        }

        function logar(_params) {// note que é o service que se conecta com a api externa!
            //implementação
            return $http.post('constantes.URL_BASE' + '/login', _params)
                .then(function (response) {
                    return response.data; //vai ta sempre no data, padrão
                })
                .catch(function (error) {
                    return { error: true, msg: error.data.message };
                });

        }


//http://worldclockapi.com/api/json/est/now
//constantes.URL_BASE + '/'

    }











})();
