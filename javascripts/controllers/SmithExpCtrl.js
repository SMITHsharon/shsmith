app.controller("SmithExpCtrl", function($location, $scope) {

$scope.expHats = false;
$scope.MLKMission - false;

$scope.showHats = () => {
		$scope.expHats = true;
	};

$scope.showMLK = () => {
		$scope.MLKMission = true;
	};

/*
$scope.displayPortfolio = () => {
	$location.url("/portfolio");
};
*/

});