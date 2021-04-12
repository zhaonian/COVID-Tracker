function createMap() {
    console.log("map here");
    const uluru = { lat: 41.8807, lng: -87.6742 };
    const map = new google.maps.Map(document.getElementById('map'),
      {center: uluru,
       zoom: 16});
       // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
  });

}

