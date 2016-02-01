(function (angular) {
  'use strict';
  angular
    .module('app')
    .controller('mainController', function() {
      /* jshint validthis: true */
      var vm = this;

      // Some cropper options.
      vm.imageUrl = 'assets/images/unsplash_' + getRandomInt(1,7) + '.jpg';
      vm.showControls = true;
      vm.fit = false;

      // Cropper API available when image is ready.
      //vm.cropperApi = function(cropperApi) {
      //  cropperApi.zoom(3);
      //  cropperApi.rotate(270);
      //  cropperApi.fit();
      //  cropperApi.crop();
      //};

      /**
       * Returns a random integer between min (inclusive) and max (inclusive)
       */
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    });
})(angular);
