var formApp = angular.module('formApp', ['ngAnimate', 'ui.router']);

formApp.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

    // Route to show base form (/form)    
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })

    // Nested states
    // Url will be nested (/form/profile)
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'form-profile.html'
        })

    // url will be (/form/interests)
        .state('form.interests', {
            url: '/interests',
            templateUrl: 'form-interests.html'
        })

        .state('form.payment', {
            url: '/payment',
            templateUrl: 'form-payment.html'
        });

    // Catch all route
    // Send users to form page
    $urlRouterProvider.otherwise('/form/profile');

});

formApp.controller('formController', function ($scope) {

    // Store all form data in this object
    $scope.formData = {};

    // Function to process the form
    $scope.processForm = function () {
        alert('Awesome!');
    };

});