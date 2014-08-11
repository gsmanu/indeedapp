var indeedApp = angular.module('indeedApp', []);

indeedApp.controller('JobListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('//gsmanu.github.io/indeedapp/data/jobs.json').
    success(function(data, status, headers, config) {
	$scope.status = status;
        $scope.data = data;
	$scope.jobs = $scope.data.results;
}).
    error(function(data, status, headers, config) {
	$scope.data = data || "Request failed";
        $scope.status = status;
});
}]);
