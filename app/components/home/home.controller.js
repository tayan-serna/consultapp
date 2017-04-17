'use strict';
HomeController.$inject = ['$scope']

function HomeController ($scope) {
    console.log('Hola home')

    $scope.gridOptions = {
        enableSorting: true,
        enableFiltering: true,
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
            }
        ],
        columnDefs: [
            { 
                name: 'Cliente', 
                width: '35%', 
                field: 'client'
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

export default HomeController;