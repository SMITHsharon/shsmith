app.controller("SmithSmartsCtrl", function($location, $scope) {

$scope.showNSSDesc = false;

$scope.showAboutNSS = () => {
		$scope.showNSSDesc = true;
	};

});