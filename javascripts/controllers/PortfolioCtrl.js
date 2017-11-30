app.controller("PortfolioCtrl", function($scope, $location) {

	$scope.techCommonMeals = false;
	$scope.techBackEnd = false;
	$scope.techWYSIWYG = false;
	$scope.techAddressBook = false;
	$scope.techThisSite = false;

	$scope.showCommonMeals = () => {
		$scope.techCommonMeals = $scope.techCommonMeals === false ? true: false;
	};

	$scope.showBackEnd = () => {
		$scope.techBackEnd = $scope.techBackEnd === false ? true: false;
	};

	$scope.showWYSIWYG = () => {
		$scope.techWYSIWYG = $scope.techWYSIWYG === false ? true: false;
	};

	$scope.showAddressBook = () => {
		$scope.techAddressBook = $scope.techAddressBook === false ? true: false;
	};

	$scope.showThisSite = () => {
		$scope.techThisSite = $scope.techThisSite === false ? true: false;
	};
    

});