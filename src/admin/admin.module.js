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
            templateUrl: TABLE_TEMPLATES_URL,
            controller: 'GroupsListCtrl'
        })
        .state('admin.subjects', {
            url: '/subjects',
            templateUrl: TABLE_TEMPLATES_URL,
            controller: 'SubjectsListCtrl'
        })
        .state('admin.specialities', {
            url: '/specialities',
            templateUrl: TABLE_TEMPLATES_URL,
            controller: 'SpecialitiesListCtrl'
        })
        .state('admin.faculties', {
            url: '/faculties',
            templateUrl: TABLE_TEMPLATES_URL,
            controller: 'FacultiesListCtrl'
        })
}]);