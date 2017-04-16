import login from './login.template.html'

appConfig.$inject = ['$stateProvider']
function appConfig ($stateProvider) {
    $stateProvider
        .state('login', {
            url: "/login",
            template: login,
            controller: "LoginController",
            controllerAs: "LoginCtrl"
        });
}
export default appConfig;