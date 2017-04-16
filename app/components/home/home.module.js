import angular from 'angular';
import homeController from './home.controller'
import homeConfig from './home.config'

let homeModule = angular.module('home.module', [])
        .controller('HomeController', homeController)
        .config(homeConfig)

export default homeModule;