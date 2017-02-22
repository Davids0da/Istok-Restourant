function initMap() {
  var myLatLng = { lat: 44.818857, lng: 20.462820 };
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 16,
    scrollwheel: false,
    styles: [
    {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
      {
        "saturation": 36
      },
      {
        "color": "#000000"
      },
      {
        "lightness": 40
      }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#000000"
      },
      {
        "lightness": 16
      }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 20
      }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 17
      },
      {
        "weight": 1.2
      }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 20
      }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 21
      }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 17
      }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 29
      },
      {
        "weight": 0.2
      }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 18
      }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 16
      }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 19
      }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 17
      }
      ]
    }
    ]
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: {
      text: 'Vijetnamski Restoran Istok',
      color: 'white'
    },
  });
}

$(document).ready(function () {
  menu.navLinks();
});

var menu = {
  navLinks: function(){
    $('.navbar a').click(function(e){
      let to = $(this).attr('href');
      console.log(to);
      $('html, body').animate({
        scrollTop: $(to).offset().top
      })
    })
  }
}