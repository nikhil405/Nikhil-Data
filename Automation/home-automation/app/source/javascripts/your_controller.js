goog.provide('automationApp.controllers.YourController');


/** @constructor @ngInject */
automationApp.controllers.YourController = function($element, $scope, $http) {
  this.$element = $element;
  this.$http = $http;
  this.$scope = $scope;
  this.text = null;
};


/** @export */
automationApp.controllers.YourController.prototype.sayHelloGuys = function(value) {
  var el = this.$element[0];
  var buttonEl = el.querySelector('button');
  buttonEl.textContent = value;
};
