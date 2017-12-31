app.controller("SmithSmartsCtrl", function($location, $scope) {

	$scope.showNSSDesc = false;

	$scope.showAboutNSS = () => {
		console.log("toggling");
		$scope.showNSSDesc = $scope.showNSSDesc === false ? true: false;
	};

});