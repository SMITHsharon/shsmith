app.controller("SmithExpCtrl", function($location, $scope) {

	$scope.expHats = false;

	$scope.showHats = () => {
		
		console.log("toggling");
		$scope.expHats = $scope.expHats === false ? true: false;
	};

});