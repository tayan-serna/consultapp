/*appRun.$inject = ['$rootScope','$window','WindowViewFactory'];

function appRun($rootScope, $window,WindowViewFactory){
    $rootScope.app = {
        theme :'red'
    };
    $rootScope.showPadlock = false;
    console.log("WindowViewFactory.changeRestart(true) del app");
    //WindowViewFactory.changeRestart(true);
    // console.log(angular.copy(WindowViewFactory.getRestart()));
    //$rootScope.online = navigator.onLine;
    //$window.addEventListener("offline", function () {
    //	$rootScope.$apply(function() {
    //		$rootScope.online = false;
    //	});
    //}, false);
    //$window.addEventListener("online", function () {
    //	$rootScope.$apply(function() {
    //		$rootScope.online = true;
    //	});
    //}, false);
}

export default appRun;*/

appRun.$inject = [];
function appRun () {
    // TODO
}
export default appRun;