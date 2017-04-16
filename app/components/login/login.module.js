import angular from 'angular';
import loginController from './login.controller'
import loginConfig from './login.config'

let loginModule = angular.module('login.module', [])
        .controller('LoginController', loginController)
        .config(loginConfig)

export default loginModule;