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
    _setupSwipe();

    //Public methods
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


    //Private methods
    function _getPagedData (){
      tilesService.getData(startTile, endTile).then(function(response){
        $scope.tilesList = response.data;
        totalItems = response.meta.totalItems;
      });
    }

    function _setupSwipe() {
        var xDown = null,
            yDown = null;

        //Attaching listener to handle swipe
        document.addEventListener('touchstart', function(evt) {
            xDown = evt.touches[0].clientX;
            yDown = evt.touches[0].clientY;
        },
        false);

        document.addEventListener('touchmove', function(evt) {
            if ( ! xDown || ! yDown ) {
                return;
            }

            var xUp = evt.touches[0].clientX;
            var yUp = evt.touches[0].clientY;

            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;

            if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
                if ( xDiff > 0 ) {
                    /* left swipe */
                    $scope.next();
                } else {
                    /* right swipe */
                    $scope.prev();
                }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        },
        false);
    }
});
