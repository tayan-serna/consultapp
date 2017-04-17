import 'bootstrap/dist/css/bootstrap.min.css'
import 'angular-ui-grid/ui-grid.min.css'
import './assets/css/style.css'
import angular from 'angular';
import appConfig from './app.config';
import appRun from './app.run';
import constants from './app.constant';
import dependenciesModule from './app.dependencies';
import homeModule from './components/home/home.module';
import loginModule from './components/login/login.module';
import adminModule from './components/admin/admin.module';
import detailModule from './components/detail/detail.module';

let appModule = angular.module('app', [
    dependenciesModule.name,
    homeModule.name,
    loginModule.name,
    adminModule.name,
    detailModule.name])
    .constant('ngAuthSettings',constants)
    .config(appConfig)
    .run(appRun);

export default appModule;