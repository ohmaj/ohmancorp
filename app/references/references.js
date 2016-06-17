'use strict';

angular.module('myApp.references', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/references', {
    templateUrl: 'references/references.html',
    controller: 'referencesCtrl'
  });
}])

.controller('referencesCtrl', [function() {

}]);