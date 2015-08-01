var admin = angular.module('admin', [
    'ui.router',
    'subject',
    'faculty',
    'speciality',
    'group'
]);

admin.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('groups', {
            url: '/groups',
            templateUrl: TABLE_TEMPLATES_URL,
            controller: 'GroupsListCtrl'
        })
        .state('subjects', {
            url: '/subjects',
            templateUrl: TABLE_TEMPLATES_URL,
            controller: 'SubjectsListCtrl'
        })
        .state('specialities', {
            url: '/specialities',
            templateUrl: TABLE_TEMPLATES_URL,
            controller: 'SpecialitiesListCtrl'
        })
        .state('faculties', {
            url: '/faculties',
            templateUrl: TABLE_TEMPLATES_URL,
            controller: 'FacultiesListCtrl'
        })
}]);