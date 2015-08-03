var admin = angular.module('admin', [
    'ui.router'
    /*'subject',
    'faculty',
    'speciality',
    'group'*/
]);

admin.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('admin.home', {
            url: '/',
            templateUrl: URL_FOR_ROUTER + "partials/admin/view.html"
        });/*
        .state('admin.groups', {
            url: '/groups',
            templateUrl: URL_FOR_ROUTER + "partials/components/groups/groups.html",
            controller: 'GroupsListCtrl'
        })
        .state('admin.subjects', {
            url: '/subjects',
            templateUrl: URL_FOR_ROUTER + "partials/components/subjects/subjects.html",
            controller: 'SubjectsListCtrl'
        })
        .state('admin.specialities', {
            url: '/specialities',
            templateUrl: URL_FOR_ROUTER + "partials/components/specialities/specialities.html",
            controller: 'SpecialitiesListCtrl'
        })
        .state('admin.faculties', {
            url: '/faculties',
            templateUrl: URL_FOR_ROUTER + "partials/components/faculties/faculties.html",
            controller: 'FacultiesListCtrl'
        })*/
}]);
