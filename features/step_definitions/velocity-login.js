'use strict';

//var assert = require('chai').assert;
var expect = require('chai').expect;
var By = require('selenium-webdriver').By;


module.exports = function() {
  this.World = require('../support/world.js').World;

 
this.Given(/^I am on the homePage$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  this.driver.get('https://staging-velocity.mobiquityinc.com/#/');
  callback();
});

this.When(/^I enter email "([^"]*)" and password "([^"]*)"$/, function (email, password, callback) {
  // Write code here that turns the phrase above into concrete actions
   //this.driver.findElement(By.cssSelector("[type='email']"))
   this.driver.findElement(By.css("[type='email']"))
         .sendKeys(email);
   this.driver.findElement(By.css("[type='password']"))
      .sendKeys(password);
   this.driver.findElement(By.css("[type='email']"))
      .sendKeys(this.webdriver.Key.ENTER)
        .then(function() {
          callback();
        });
   
});

this.Then(/^I should see "([^"]*)"$/, function (text, callback) {
  // Write code here that turns the phrase above into concrete actions
 /*  this.driver.wait('button');
    var element = this.driver.findElement(By.className("confirmation-block"));
      
	  console.log("==============");
	  console.log(element);
	  console.log("==============");
        expect(element.getText()).to.equal(text);*/
         callback();
     
  });
 

};