(function() {
    angular
        .module('funWithDirectives')
        .controller('customersController', customersController);

    customersController.$inject = ['$scope'];

    function customersController($scope) {
        var counter = 0;

        $scope.customer = {
            name: 'David',
            street: '1234 Anywhere St.'
        };

        $scope.customers = [
            {
                name: 'David',
                street: '1234 Anywhere St.'
            },
            {
                name: 'TIna',
                street: '1800 Crest St.'
            },
            {
                name: 'Michelle',
                street: '890 Main St.'
            }
        ];

        $scope.addCustomer = function () {
            counter++;
            $scope.customers.push({
                name: 'New Customer' + counter,
                street: counter + ' Cedar Point St.'
            });
        };

        $scope.changeData = function () {
            counter++;
            $scope.customer = {
                name: 'James',
                street: counter + ' Cedar Point St.'
            }
        }

    }

}());
