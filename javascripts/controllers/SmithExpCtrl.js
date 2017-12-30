app.controller("SmithExpCtrl", function($location, $scope) {

	$scope.expHats = false;

	$scope.showHats = () => {
		$scope.expHats = $scope.expHats === false ? true: false;
	};

});