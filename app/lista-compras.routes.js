(function () {
    "use strict";

    angular.module('listaComprasApp')
        .config(routes)
        .run(configDefaults); //o run faz com que seja executado assim que a app é iniciada


    routes.$inject = ['$routeProvider'];
    configDefaults.$inject = ['$rootScope'];

    function routes($routeProvider) { //são as configurações das rotas
        $routeProvider
            .when('/home', { //quando bater no home, renderize o template 
                templateUrl: 'acesso/home.tpl.html'
            })
            .when('/login', {
                //controller: 'AcessoController' tb podemos acrescentar que controller, mas vamos fazê-lo no html do login
                templateUrl: 'acesso/login.tpl.html'
            })
            .when('/register', {
                templateUrl: 'acesso/register.tpl.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
        
    }

    function configDefaults($rootScope) { //inicia uma lista
        $rootScope.listaMensagens = [];
    }


})();

/*esse projeto não é uma spa(single page application). usamos as urls,
(aplicação através de rotas).
quando trocamos de url as controller são recarregadas, ela é novamente
renderizada na tela, é como se parte da nossa app reiniciasse. 

usando o ng-show e ng-hide, o conteúdo continua carregado, mas nas rotas 
esse conteúdo se perde.*/
