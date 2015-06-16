import angular from 'angular';
import 'angular-mocks';
import ngModuleName from './index';
import {expect} from 'chai';

describe('azPromiseShow', function() {
  beforeEach(window.module(ngModuleName));

  var scope, el;
  var displayNone = 'ng-hide';
  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    el = $compile('<div az-promise-show="aPromise"></div>')(scope);
    scope.$digest();
  }));

  it('should initialize as display none', () => {
    expect(el.hasClass(displayNone)).to.be.true;
  });

  it('should display when promise is in flight', inject(($timeout) => {
    scope.aPromise = $timeout(() => {});
    scope.$digest();
    expect(el.hasClass(displayNone)).to.be.false;
    $timeout.flush();
    scope.$digest();
    expect(el.hasClass(displayNone)).to.be.true;
  }));

  it('should log an error when the given value is not a promise and not show the element', inject(($log) => {
    scope.$digest();
    scope.aPromise = 'ಠ_ಠ';
    expect(() => scope.$digest()).to.throw('must pass a promise to az-promise-show');
    expect($log.error.logs).have.length(1);
    expect(el.hasClass(displayNone)).to.be.true;
  }));
});
