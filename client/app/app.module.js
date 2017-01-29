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
			views: {
				'': {templateUrl: 'app/home/home.html'},
				'header@home': {templateUrl: 'app/header/header.html'},
				'content@home': {templateUrl: 'app/main-content/main-content.html'},
				'footer@home': {templateUrl: 'app/footer/footer.html'}
			}
		});

		$urlRouterProvider.when('', '/home');
		$urlRouterProvider.otherwise('/page-not-found');
	}
})();
