var app = angular.module('app', ['ui.router', 'ui.bootstrap']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'components/login/login.html',
            controller: 'login'
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'components/dashboard/dashboard.html',
            controller: 'dashboard'
        });
    $urlRouterProvider.otherwise('/dashboard');
    //    $locationProvider.html5Mode({
    //      enabled: true,
    //      requireBase: false
    //    });
});

app.filter('capitalizeWord', function () {
    return function (text) {
        return (!!text) ? text.charAt(0).toUpperCase() + text.substr(1).toLowerCase() : '';
    }
});
