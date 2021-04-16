function createMap2() {
    console.log("map here");    
    list_lat_long = [[37.420947,-122.095643], [37.357049,-121.939285], [37.40299,-122.079401]];
    var test = list_lat_long[0]; //test is the first array in the list 
   
    const centerUS = { lat: 39.8283, lng: -98.5795 };
    const map = new google.maps.Map(document.getElementById('map'),
      {center: centerUS,
       zoom: 3.5});
       
    for(i =0; i<list_lat_long.length ; i++){
        var temp = list_lat_long[i];
            var uluruTEST={ lat: temp[0], lng: temp[1]}
            const marker = new google.maps.Marker({
            position: uluruTEST,
            map: map,
    })
    }
}
function findPlace(){
    
}