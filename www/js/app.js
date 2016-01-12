/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...
var module = angular.module("MyApp", ['ngCordova']);

module.controller('BarcodeCtrl', function($scope, $cordovaBarcodeScanner) {

  $scope.scanner = function() {
    document.addEventListener("deviceready", function () {

      $cordovaBarcodeScanner
      .scan()
      .then(function(barcodeData) {
        // Success! Barcode data is here
      }, function(error) {
        // An error occurred
      });


    // NOTE: encoding not functioning yet
    $cordovaBarcodeScanner
    .encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com")
    .then(function(success) {
        // Success!
      }, function(error) {
        // An error occurred
      });

  }, false);
  };
    
    $scope.scanner();
});