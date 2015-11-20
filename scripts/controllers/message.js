'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, messageService) {
    $scope.messages = messageService.getMessages().then(function ( response ) {
      console.log('And then!')
      console.log(response.data);
      $scope.messages = response.data;
    });
    $scope.addMessage = function ( message ) {
      console.log("it's sort of working");
      if (message) {
        messageService.addMessage(message).then(function ( response ) {
          console.log('made it');
          $scope.messages = messageService.getMessages().then(function ( response ) {
            console.log('And then!')
            console.log(response.data);
            $scope.messages = response.data;
          });
          $scope.newMessage = '';
        });
      }
    };

  });
