var app = angular.module('truefactorApp', []);

var mainController = app.controller('truefactorMainController', ['$scope', function ($scope) {
    $scope.toggleSettings = function () {
        if ($scope.settings) {
            $scope.settings = false;
        } else {
            $scope.settings = true;
        }
    }
}]);
