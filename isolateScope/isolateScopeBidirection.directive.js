/*
 *   A directive demonstrating isolate scope using '='
 *   '=' allows for bidirectional binding to an object
 */
(function() {

    angular
        .module('funWithDirectives')
        .directive('isolateScopeBidirection', isolateScopeBidirection);

    isolateScopeBidirection.$inject = [];

    function isolateScopeBidirection() {
        return {
            restrict: 'E',
            scope: {
                customer: '='
            },
            template:
                '<div class="directiveBorder">' +
                    '<div class="title">Isolate Scope with =</div>' +
                    '<div>' +
                        'Name: <input name="name" class="form-control" type="text" ng-model="customer.name" >' +
                    '</div>' +
                    '<br /> ' +
                    '<div>' +
                        'Street: <input name="street" class="form-control" type="text" ng-model="customer.street" >' +
                    '</div>' +
                '</div>'

        };
    }

}());
