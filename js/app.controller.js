(function () {
    angular
        .module('bioApp')
        .controller('bioController', BioController);

    BioController.$inject = ['$scope'];

    function BioController($scope) {
        $scope.pageIsLoading = true;
        var session;
        
        $scope.initTemplates = function () {
            console.log('init templates');
            $scope.pageTemplates = [
                {
                    name: 'start',
                    shortName: '',
                    url: 'templates/start.html'
                }
            ]
        }
    }
})