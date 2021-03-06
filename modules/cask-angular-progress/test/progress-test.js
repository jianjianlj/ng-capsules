/*
 * Copyright © 2015 Cask Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
 
/*global module, expect, inject, describe, it, before, beforeEach, after, afterEach */

describe('Unit test for cask-progress directive', function() {
  beforeEach(module('cask-angular-progress'));

  var $compile, scope;
  beforeEach(inject(function(_$compile_, $rootScope){
    $compile = _$compile_;
    scope = $rootScope.$new();
  }));


  describe('type=bar', function() {

    it('should render a progress-bar', function() {
      var el = $compile('<cask-progress type="bar" />')(scope);
      scope.$digest();

      expect(el.hasClass('progress')).toBe(true);
      expect(el.children().hasClass('progress-bar')).toBe(true);
    });

    it('add-cls attributes decoration', function() {
      var el = $compile('<cask-progress type="bar" data-add-cls="danger" />')(scope);
      scope.$digest();

      expect(el.children().hasClass('progress-bar-danger')).toBe(true);
    });


    it('sets the percentage', function() {
      var el = $compile('<cask-progress type="bar" value="5" max="10" />')(scope);
      scope.$digest();

      expect(el.children().css('width')).toBe('50%');
      expect(el.children().text()).toMatch('50%');
    });

  });


});
