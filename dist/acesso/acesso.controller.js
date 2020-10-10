(function () {
    "use strict";

    // CONTROLLER
    angular.module('listaComprasApp')
        .controller('AcessoController', acessoController);

    acessoController.$inject = ['helperFactory','ListaComprasService'];

    function acessoController(helper, service) {
        var vm = this;
        
        /* ***************    INIT VARIÁVEIS    *********************************** */
        
        vm.tiposEmail = [
            { id:1, desc: '@hotmail.com', disable: false, tipo: 'geral'},
            { id:2, desc: '@outlook.com', disable: false, tipo: 'geral'},
            { id:3, desc: '@gmail.com', disable: false, tipo: 'geral'},
            { id:4, desc: '@stefanini.com', disable: true, tipo: 'corporativo'},
            { id:5, desc: '@yahoo.com.br', disable: true, tipo: 'geral'},
            { id:6, desc: '@empresa.com.br', disable: false, tipo: 'corporativo'},
            { id:7, desc: '@teste.com', disable: true, tipo: 'corporativo'}

        ];

        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.logar = logar;
        vm.cadastrar = register;

        function logar() {
            return service.logar(vm.login)
                .then(function (_resp) {
                    if (_resp.error) {
                        helper.addMsg(_resp.message, 'danger');
                        
                    } else {
                        //$rootScope.listaMensagens.push({text: _resp.message, tipo: 'success'}); 
                        //$rootScope.userLogged = _resp.userLogged; era assim, mas agora temos a helper
                        helper.addMsg(_resp.message, 'success');
                        helper.setRootScope('userLogged', _resp.userLogged);
                        //console.log("USERLOGGED",_resp.userLogged);
                        
                    }
                });
        }

        function register() {
            var newUser = {
                name: vm.user.nome,
                email: vm.user.email,
                username: vm.user.username,
                password: vm.user.password
            };
            return service.register(newUser)
                .then(function (_resp) {
                    if (_resp.error) {
                        console.log('ERRO', _resp);
                        helper.addMsg(_resp.msg, 'danger', 'Tente novamente');
                    } else {
                        console.log('SUCESSO', _resp);
                        helper.addMsg(_resp.msg, 'sucess');
                        helper.path('/home');
                        helper.setRootScope('userLogged', _resp.newUser);
                    }
                    
                });            
        }











        /* ***************    FUNÇÕES INSTERNAS    ******************************** */

    }

})();
