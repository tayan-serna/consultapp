import angular from 'angular';
import AdminController from './admin.controller'
import adminConfig from './admin.config'
import adminModalComponent from './admin.modal.component'

let adminModule = angular.module('admin.module', [])
        .component('adminModalComponent', adminModalComponent)
        .controller('AdminController', AdminController)
        .config(adminConfig)

export default adminModule;