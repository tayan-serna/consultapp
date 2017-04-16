appConfig.$inject = ['$stateProvider', '$urlRouterProvider']
function appConfig ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
}
export default appConfig;