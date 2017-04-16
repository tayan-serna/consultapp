import angular from 'angular';
import AdminController from './admin.controller'
import adminConfig from './admin.config'

let adminModule = angular.module('admin.module', [])
        .controller('AdminController', AdminController)
        .config(adminConfig)

export default adminModule;