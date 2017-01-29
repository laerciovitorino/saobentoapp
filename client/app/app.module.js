(function () {
	'use strict';

	angular.module('app', [
		'ui.router',
	])
  .config(['$stateProvider', '$urlRouterProvider', stateConfig]);

	function stateConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
			url: '/home',
			templateUrl: 'app/home/home.html'
		});

		$urlRouterProvider.when('', '/home');
		$urlRouterProvider.otherwise('/page-not-found');
	}
})();
