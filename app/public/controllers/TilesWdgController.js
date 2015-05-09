'use strict';

angular.module('tilesApp', [])
  .controller('tilesWdgController', function($scope, tilesService) {

    var md = new MobileDetect(window.navigator.userAgent);
    var tilesOnScreen = 1; //we assume that the client is mobile, only one tile is shown
    var startTile = 0;
    var endTile = 0;
    var totalItems = 0;
    $scope.showNext = true;
    $scope.showPrev = true;

    if (md.tablet()) {
        tilesOnScreen = 3; //the first 3 tiles will be on screen
    } else if(!md.mobile()) {
        tilesOnScreen = 5; //the first 5 tiles will be on screen
    }

    endTile = tilesOnScreen;

    _getPagedData();

    function _getPagedData (){
      tilesService.getData(startTile, endTile).then(function(response){
        $scope.tilesList = response.data;
        totalItems = response.meta.totalItems;
      });
    }

    $scope.prev = function(){
      startTile--;
      endTile = startTile + tilesOnScreen;
      _getPagedData();
    };

    $scope.next = function(){
      startTile++;
      endTile = startTile + tilesOnScreen;
      _getPagedData();
    };

    $scope.showNext = function() {
      return endTile < totalItems ? true : false;
    }

    $scope.showPrev = function() {
      return startTile > 0 ? true : false;
    }
  });
