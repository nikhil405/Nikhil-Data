goog.provide('automationApp.controllers.MainNavCommunityManager');

/** @constructor @ngInject */
automationApp.controllers.MainNavCommunityManager = function($element, $scope, $location) {
  this.$element = $element;
  this.$location = $location;
  this.$scope = $scope;
};


/** @export */
automationApp.controllers.MainNavCommunityManager = function() {
  this.$scope.menuItems = [
    {
      name: 'HOME',
      url:  '/home'
    },
    {
      name:   'TEAM',
      url:    '/team'
    }
  ];

  this.$scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
};
