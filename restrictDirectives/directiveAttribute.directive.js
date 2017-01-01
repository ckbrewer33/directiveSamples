(function() {

    angular
        .module('funWithDirectives')
        .directive('directiveAttribute', directiveAttribute);

    directiveAttribute.$inject = [];

    function directiveAttribute() {
        return {
            restrict: 'A',
            template:
            '<div class="directiveBorder">' +
                '<div class="title">Directive Attribute</div>' +
                'Name: {{customer.name}} ' +
                '<br /> ' +
                'Street:  {{customer.street}}' +
            '</div>'

        };
    }

}());