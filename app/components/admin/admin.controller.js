'use strict';
AdminController.$inject = ['$scope', '$uibModal']

function AdminController ($scope, $uibModal) {
    console.log('Hola admin')
    var vm = this
    vm.addDevice = addDevice

    $scope.gridOptions = {
        enableSorting: true,
        enableFiltering: true,
        treeRowHeaderAlwaysVisible: false,
        data: [
            {
                client: 'Adrian Serna',
                document: '1151947099',
                device: 'Nokia 1100',
                state: 'En progreso'
            },
            {
                client: 'Adrian Serna',
                document: '1151947099',
                device: 'portatil HP',
                state: 'Finalizado'
            },
            {
                client: 'Dahiana Atehortua',
                document: '11519000',
                device: 'portatil HP blanco',
                state: 'Finalizado'
            },
            {
                client: 'Dahiana Atehortua',
                document: '11519000',
                device: 'samsung galaxy',
                state: 'En progreso'
            },
        ],
        columnDefs: [
            { 
                name: 'Cliente', 
                width: '35%', 
                field: 'client', 
                grouping: { groupPriority: 0 } 
            },
            { name: 'Documento', width: '20%', field: 'document' },
            { name: 'Equipo', width: '35%', field: 'device' },
            { name: 'Estado', width: '10%', field: 'state' },      
        ],
        onRegisterApi: function ( gridApi ) {
            $scope.gridApi = gridApi;
        }
    };

    function addDevice () {
        var modalInstance = $uibModal.open({
            animation: true,
            component: 'adminModalComponent',
            size : 'md',
            // resolve: {
                // items: function () {
                // return $ctrl.items;
                // }
            // }
        });

        modalInstance.result.then(function (selectedItem) {
            // $ctrl.selected = selectedItem;
        }, function () {
            
        });
    }
}

export default AdminController;