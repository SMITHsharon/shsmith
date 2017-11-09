app.controller("PortfolioCtrl", function($scope, $location) {

	$scope.CommonMeals = false;
	$scope.BackEnd = false;

	$scope.showCommonMeals = () => {
		$scope.CommonMeals = true;
	};

	$scope.showBackEnd = () => {
		$scope.BackEnd = true;
	};
    

});