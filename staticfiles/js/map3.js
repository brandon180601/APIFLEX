function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 19.431547164916992, lng: -98.95824432373047},
        zoom: 14
    });

    // Array de ubicaciones (latitud, longitud, título y URL del ícono)
    var locations = [
        {lat: 19.423, lng: -98.940, title: 'Electricista', icon: 'https://cdn-icons-png.flaticon.com/128/1995/1995628.png'}
        // Agrega más ubicaciones según sea necesario
    ];

    // Itera sobre el array de ubicaciones y crea un marcador para cada una
    for (var i = 0; i < locations.length; i++) {
        var location = locations[i];

        var marker = new google.maps.Marker({
            position: {lat: location.lat, lng: location.lng},
            map: map,
            title: location.title,
            icon: {
                url: location.icon,
                scaledSize: new google.maps.Size(50, 50) // Ajusta el tamaño de la imagen según sea necesario
            }
        });
    }

    // Fija la ubicación actual a una coordenada específica
    var userLocation = {lat: 19.428, lng: -98.957};
    var electricianLocation = {lat: 19.423, lng: -98.940};

    // Crea un marcador para la ubicación del electricista
    var electricianMarker = new google.maps.Marker({
        position: electricianLocation,
        map: map,
        title: 'Electricista'
    });

    // Crea un marcador para la ubicación actual del usuario
    var userMarker = new google.maps.Marker({
        position: userLocation,
        map: map,
        title: 'Tu ubicación'
    });

    // Centra el mapa en la ubicación actual del usuario
    map.setCenter(userLocation);

    // Direcciones desde la ubicación del usuario hasta la ubicación del electricista
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer({
        suppressMarkers: true, // Suprime los marcadores de inicio y final de la ruta
        map: map
    });

    var request = {
        origin: userLocation,
        destination: electricianLocation,
        travelMode: 'DRIVING' // Puedes cambiarlo según el modo de transporte que prefieras
    };

    directionsService.route(request, function(result, status) {
        if (status == 'OK') {
            directionsRenderer.setDirections(result);
        } else {
            console.error('Error al obtener direcciones:', status);
        }
    });
}
