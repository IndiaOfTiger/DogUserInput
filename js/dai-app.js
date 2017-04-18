$(function () {

    var map;
    var latDom = $('#LatSec > span');
    var lngDom = $('#LngSec > span');

    function initialize() {

      // Create an array of styles.
      var styles = 
      [
          {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#d3d3d3"
                  }
              ]
          },
          {
              "featureType": "transit",
              "stylers": [
                  {
                      "color": "#808080"
                  },
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#b3b3b3"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#ffffff"
                  },
                  {
                      "weight": 1.8
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#d7d7d7"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#ebebeb"
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#a7a7a7"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#efefef"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#696969"
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#737373"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#d6d6d6"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {},
          {
              "featureType": "poi",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#dadada"
                  }
              ]
          }
      ];
      // Create a new StyledMapType object, passing it the array of styles,
      // as well as the name to be displayed on the map type control.
      var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});

      // Create a map object, and include the MapTypeId to add
      // to the map type control.
      var mapOptions = {
        zoom: 19,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false,
        center: new google.maps.LatLng(24.7899711, 120.9967021),
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
      };
      map = new google.maps.Map(document.getElementById('Location-map'),
        mapOptions);

      //Associate the styled map with the MapTypeId and set it to display.
      map.mapTypes.set('map_style', styledMap);
      map.setMapTypeId('map_style');

      google.maps.event.addListener(map, 'click', function(event) {
          var LatLng = event.latLng;
          var lat = LatLng.lat().toPrecision(12);
          var lng = LatLng.lng().toPrecision(12);
          latDom.text(lat);
          lngDom.text(lng);
      })
    }

    window.onload = initialize();

   
    
    
    var r;
    var g;
    var b;
    var markers = [];
    var GeoLo_N;
    var GeoLo_E;
    
    
    $('#submit').on('click', function(){
        $('#submit').toggle(500).toggle(500);
        

        /*if($('#red').hasClass('clicked'))
        {
            r = 255;
            g = 0;
            b = 0;
        }
        if($('#orange').hasClass('clicked'))
        {
            r = 255;
            g = 85;
            b = 17;
        }
        if($('#purple').hasClass('clicked'))
        {
            r = 102;
            g = 0;
            b = 255;
        }
        if($('#green').hasClass('clicked'))
        {
            r = 0;
            g = 255;
            b = 0;
        }

      
        markers.push(index);*/

    });

    $('.button').on('click', function() {
        $('.button').removeClass('clicked');
        $(this).toggleClass('clicked');}) 
    

    function IDGeoLoTime_I  (){
        var jsonArr = [];
        var trackerID = 0;
        var receiveTime = 0;
        jsonArr.push({TrackerID: trackerID , N: GeoLo_N, E: GeoLo_E , Time: receiveTime });
        return jsonArr;
    }

    function iot_app () {
        
    }

    


    var profile = {
        'dm_name': 'DogUserInput',
        'is_sim': false,
        'df_list':[IDGeoLoTime_I],
        'origin_df_list': [IDGeoLoTime_I],

    }

    var ida = {
        'iot_app': iot_app,
    };

    dai(profile, ida);

});
