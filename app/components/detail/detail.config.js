import tempalte from './detail.template.html'

appConfig.$inject = ['$stateProvider']
function appConfig ($stateProvider) {
    $stateProvider
        .state('detail', {
            url: "/detail",
            template,
            controller: "DetailController",
            controllerAs: "detailCtrl"
        });
}
export default appConfig;