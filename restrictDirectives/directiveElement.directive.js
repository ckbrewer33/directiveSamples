(function() {

    angular
        .module('funWithDirectives')
        .directive('directiveElement', directiveElement);

    directiveElement.$inject = [];

    function directiveElement() {
        return {
            restrict: 'E',
            template:
                '<div class="directiveBorder">' +
                    '<div class="title">Directive Element</div>' +
                    'Name: {{customer.name}} ' +
                    '<br /> ' +
                    '{{customer.street}}' +
                '</div>'

        };
    }

}());