import angular from 'angular';
import DetailController from './detail.controller'
import detailConfig from './detail.config'

let detailModule = angular.module('detail.module', [])
        .controller('DetailController', DetailController)
        .config(detailConfig)

export default detailModule;