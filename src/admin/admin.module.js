<<<<<<< HEAD
var admin = angular.module("admin", []);
=======
var admin = angular.module('admin', [
    'ui.router',
    'subject',
    'faculty',
    'speciality',
    'group'
]);

admin.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/homeAdmin');
    $stateProvider
        .state('admin.home', {
            url: '/',
            templateUrl: URL_FOR_ROUTER + "components/homeAdmin/homeAdmin.html"
        })
        .state('admin.groups', {
            url: '/groups',
            templateUrl: URL_FOR_ROUTER + "components/groups/groups.html",
            controller: 'GroupsListCtrl'
        })
        .state('admin.subjects', {
            url: '/subjects',
            templateUrl: URL_FOR_ROUTER + "components/subjects/subjects.html",
            controller: 'SubjectsListCtrl'
        })
        .state('admin.specialities', {
            url: '/specialities',
            templateUrl: URL_FOR_ROUTER + "components/specialities/specialities.html",
            controller: 'SpecialitiesListCtrl'
        })
        .state('admin.faculties', {
            url: '/faculties',
            templateUrl: URL_FOR_ROUTER + "components/faculties/faculties.html",
            controller: 'FacultiesListCtrl'
        })
}]);
>>>>>>> a11e1287367808cfc080b7015e45a0f1a1288052
