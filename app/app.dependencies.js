/*import angular from 'angular';

let dependenciesModule = angular.module('app.dependencies',[
    'ngMaterial',
    'angular-jwt',
    'ui.bootstrap',
    'ngAria',
    'ngMessages',
    'ngAnimate',
    'ui.router',
    'ui.grid',
    'ui.grid.selection',
    'ui.grid.resizeColumns',
    'ui.grid.edit',
    'ui.grid.rowEdit',
    'ui.grid.cellNav',
    'ui.grid.pinning',
    'ui.grid.pagination',
    'ui.grid.grouping',
    'ui.grid.exporter',
    'ui.tree',
    'ngIdle',
    'cfp.hotkeys',
    'vs-repeat',
    'angular-loading-bar',
    'gm.datepickerMultiSelect',
    'oc.lazyLoad']);

export default dependenciesModule;*/

import angular from 'angular';

let dependenciesModule = angular.module('app.dependencies', [
    'ui.router',
    'ui.grid',
    'ui.grid.grouping',
    'ui.bootstrap'
])

export default dependenciesModule;