// some versions of angular don't export the angular module properly,
// so we get it from window in this case.
import angular from 'angular';
let root = {angular};

/* istanbul ignore next */
if (!angular.version) {
  root = window;
}

export default root.angular
  .module('azPromiseShow', [])
  .directive('azPromiseShow', azPromise(true))
  .directive('azPromiseHide', azPromise(false))
  .name; // <-- exported property

function azPromise(show) {
  var attr = show ? 'azPromiseShow' : 'azPromiseHide';
  var changeTo = show ? 'removeClass' : 'addClass';
  var changeFrom = show ? 'addClass' : 'removeClass';
  return /* @ngInject */ function azPromiseShowDefinition($log) {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        var displayNone = attrs.azPromiseShowHideClass || 'ng-hide';
        scope.$watch(attrs[attr], function(newVal) {
          if (newVal) {
            if (!newVal.finally) {
              $log.error('Passed ', newVal, 'to', el, 'on scope', scope);
              throw new Error('must pass a promise to az-promise-show');
            }
            el[changeTo](displayNone);
            newVal.finally(function() {
              el[changeFrom](displayNone);
            });
          } else {
            el[changeFrom](displayNone);
          }
        });
      }
    };
  };
}
