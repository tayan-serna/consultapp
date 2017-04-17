'use strict';
AdminController.$inject = ['$scope']

function AdminController ($scope) {
    console.log('Hola admin')

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
}

export default AdminController;