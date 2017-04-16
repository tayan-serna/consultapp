import template from './admin.template.html'

appConfig.$inject = ['$stateProvider']
function appConfig ($stateProvider) {
    $stateProvider
        .state('admin', {
            url: "/admin",
            template,
            controller: "AdminController",
            controllerAs: "adminCtrl"
        });
}
export default appConfig;