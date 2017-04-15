import home from './home.template.html'

appConfig.$inject = ['$stateProvider']
function appConfig ($stateProvider) {
    $stateProvider
        .state('home', {
            url: "/home",
            template: home,
            controller: "HomeController",
            controllerAs: "HomeCtrl"
        });
}
export default appConfig;