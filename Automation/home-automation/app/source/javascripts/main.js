goog.provide('automationApp');

goog.require('automationApp.controllers.DemoController');
goog.require('automationApp.controllers.MainNavCommunityManager');


/** @export */
automationApp.main = function() {
  angular.module('automationApp', [])
    .controller({
      'DemoController': automationApp.controllers.DemoController,
      'YourController': automationApp.controllers.YourController,
      'MainNavCtrl': automationApp.controllers.MainNavCommunityManager
    });
  angular.bootstrap(document, ['automationApp']);

  /** Enable tooltip globally */
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
};
