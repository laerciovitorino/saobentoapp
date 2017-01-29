(function () {
	'use strict';

	angular.module('app', [
		'ui.router',
	])
  .config(['$stateProvider', '$urlRouterProvider', stateConfig]);

	function stateConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('app', {
			url: '/landing',
			templateUrl: 'app/landing/landing.html'
		});

		$urlRouterProvider.when('', '/landing');
		$urlRouterProvider.otherwise('/page-not-found');
	}
})();
