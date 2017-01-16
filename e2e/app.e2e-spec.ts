import { browser, element, by } from 'protractor';

describe('Tour of Heroes E2E Tests', function () {

  let expectedTitle = 'Tour of Heroes';
  let expectedMsg = 'Windstorm details!' 
  //let heroName = element(by.binding('hero.name'));
  let expectedHeroName = 'Windstorm';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedTitle, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedTitle);
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h2')).getText()).toEqual(expectedMsg);
  });

  // it('should display: ' + expectedHeroName, function () {
  //   expect(element(by.id('heroName')).getText()).toEqual(expectedHeroName);
  // });

});
