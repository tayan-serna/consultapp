import angular from 'angular';
import appConfig from './app.config';
import appRun from './app.run';
import constants from './app.constant';
import dependenciesModule from './app.dependencies';
import homeModule from './components/home/home.module';

let appModule = angular.module('app', [
    dependenciesModule.name,
    homeModule.name])
    .constant('ngAuthSettings',constants)
    .config(appConfig)
    .run(appRun);

export default appModule;