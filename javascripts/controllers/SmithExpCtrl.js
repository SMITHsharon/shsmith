app.controller("SmithExpCtrl", function($location, $scope) {

$scope.expHats = false;

$scope.showHats = () => {
		$scope.expHats = true;
	};

/*
$scope.displayPortfolio = () => {
	$location.url("/portfolio");
};
*/

});