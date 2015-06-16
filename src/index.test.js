import 'angular';
import 'angular-mocks';
import ngModuleName from './index';
import {expect} from 'chai';

describe('azPromiseShow', function() {
  beforeEach(window.module(ngModuleName));

  const basicTemplate = '<div az-promise-show="aPromise"></div>';
  let scope, el, $timeout, $compile;

  beforeEach(inject((_$compile_, $rootScope, _$timeout_) => {
    $timeout = _$timeout_;
    $compile = _$compile_;
    scope = $rootScope.$new();
  }));

  it('should initialize as display none', () => {
    compileAndDigest();
    expectHidden();
  });

  it('should display when promise is in flight', () => {
    compileAndDigest();
    scope.aPromise = $timeout(() => {});
    scope.$digest();
    expectShowing();
    $timeout.flush();
    scope.$digest();
    expectHidden();
  });

  it('should log an error when the given value is not a promise and not show the element', inject(($log) => {
    compileAndDigest();
    scope.aPromise = 'ಠ_ಠ';
    expect(() => scope.$digest()).to.throw('must pass a promise to az-promise-show');
    expect($log.error.logs).have.length(1);
    expectHidden();
  }));

  it(`should allow you to specify a custom class`, () => {
    const customClassName = 'display-none';
    compileAndDigest(`<div az-promise-hide="aPromise" az-promise-show-hide-class="${customClassName}"></div>`);
    scope.aPromise = $timeout(() => {});
    scope.$digest();
    expectHidden(customClassName);
    $timeout.flush();
    scope.$digest();
    expectShowing(customClassName);
  });

  function compileAndDigest(template = basicTemplate) {
    el = $compile(template)(scope);
    scope.$digest();
  }

  function expectShowing(className = 'ng-hide') {
    expect(el.hasClass(className)).to.be.false;
  }

  function expectHidden(className = 'ng-hide') {
    expect(el.hasClass(className)).to.be.true;
  }
});
