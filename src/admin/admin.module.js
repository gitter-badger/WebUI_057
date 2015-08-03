angular.module('admin', [
    'ui.router',
    'subject',
    'faculty',
    'speciality',
    'group',
    'table'
]);

angular.module('admin').config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('admin.home', {
            url: '/',
            templateUrl: "partials/components/homeAdmin/homeAdmin.html"
        })
        .state('admin.groups', {
            url: '/groups',
            templateUrl: "partials/components/groups/groups.html",
            controller: 'GroupsListCtrl'
        })
        .state('admin.subjects', {
            url: '/subjects',
            templateUrl: "partials/components/subjects/subjects.html",
            controller: 'SubjectsListCtrl'
        })
        .state('admin.specialities', {
            url: '/specialities',
            templateUrl: "partials/components/specialities/specialities.html",
            controller: 'SpecialitiesListCtrl'
        })
        .state('admin.faculties', {
            url: '/faculties',
            templateUrl: "partials/components/faculties/faculties.html",
            controller: 'FacultiesListCtrl'
        })
}]);
