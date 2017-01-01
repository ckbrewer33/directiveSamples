/*
 *   A directive demonstrating isolate scope using '@'
 *   '@' allows for binding to a string value
 */
(function() {

    angular
        .module('funWithDirectives')
        .directive('isolateScopeStringBind', isolateScopeStringBind);

    isolateScopeStringBind.$inject = [];

    function isolateScopeStringBind() {
        return {
            restrict: 'E',
            scope: {
                name: "@",
                street: "@"
            },
            template:
                '<div class="directiveBorder">' +
                    '<div class="title">Isolate Scope with @</div>' +
                    'Name:  {{name}} ' +
                    '<br /> ' +
                    'Street:  {{street}}' +
                '</div>'

        };
    }

}());
