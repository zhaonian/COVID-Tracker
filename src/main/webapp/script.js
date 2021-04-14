function createMap() {
    //double lat[] = {41.881832, 34.052235, 48.864716};
   // double long[] = {-87.623177, 34.052235, 48.864716};
    //ArrayList<String[]> list = new ArrayList<String[]>();
    list_lat_long = [[37.420947,-122.095643], [37.357049,-121.939285], [37.40299,-122.079401]];
    var test = list_lat_long[0]; //test is the first array in the list 
    //console.log("my test!!");
    //console.log(test[0]);
    //console.log(test[1]);
    //console.log(list_lat_long.length);
    //console.log(test.length);
    const uluru = { lat: 41.8807, lng: -87.6742 };
    const centerUS = { lat: 39.8283, lng: -98.5795 };
    const map = new google.maps.Map(document.getElementById('map'),
      {center: centerUS,
       zoom: 3.5});
       // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    })
    //test loop for many markers
    for(i =0; i<list_lat_long.length ; i++){
        var temp = list_lat_long[i];
        //for(j= 0; j< test.length, j++){
            var uluruTEST={ lat: temp[0], lng: temp[1]}
            const marker = new google.maps.Marker({
            position: uluruTEST,
            map: map,
    })
        //}
    }
}

/**fetches coviddata from api and adds to DOM */
function loadData() {
  fetch('https://api.covidactnow.org/v2/states.json?apiKey=4ac37661a08a40b5a50cbe35eb941043').then(response => response.json()).then((data) => {
    const dataElement = document.getElementById('data-container');
    data.forEach((ind_data) => {
        dataElement.appendChild(createDataElement(ind_data));
        var linebreak = document.createElement("br");
        dataElement.appendChild(linebreak);
  		dataElement.appendChild(linebreak);
        
    })
  });

}

/** Fetches the string from the server and returns it */
async function getString() {
  const responseFromServer = await fetch('/vaccines');
  const stringFromResponse = await responseFromServer.json();
  
    const state = stringFromResponse[0].state;
    return state;

}

/**fetches coviddata from api to access vaccine info and adds to DOM */
async function loadVaccineSearchBarData() {
  const state = await getString();
  fetch('https://api.covidactnow.org/v2/states.json?apiKey=4ac37661a08a40b5a50cbe35eb941043').then(response => response.json()).then((vaccine) => {
    const vaccineElement = document.getElementById('vaccine-container');
    vaccine.forEach((ind_vaccine) => {
        if(state.localeCompare(ind_vaccine.state) == 0){
        vaccineElement.appendChild(createVaccineElement(ind_vaccine));
        var linebreak = document.createElement("br");
        vaccineElement.appendChild(linebreak);
  		vaccineElement.appendChild(linebreak);
        
     }
     })
  });

}

/** Creates an element that represents a coviddata */
function createDataElement(data) {
    
    const covidDataElement = document.createElement('li');
    covidDataElement.className = 'covidData';
    
    
    const stateElement = document.createElement('span');
    stateElement.innerText = JSON.stringify(data.state);
    
    const casesElement = document.createElement('span');
    casesElement.innerText = " has " + JSON.stringify(data.actuals.cases) + " positive cases";

	
    covidDataElement.appendChild(stateElement);
  	covidDataElement.appendChild(casesElement);
    return covidDataElement;
}

/** Creates an element that represents a vaccinedata */
function createVaccineElement(data) {
    
    const vaccineDataElement = document.createElement('p');
    vaccineDataElement.className = 'vaccineData';
    
    
    const stateElement = document.createElement('span');
    stateElement.innerText = JSON.stringify(data.state);
    
    const vaccinesElement = document.createElement('span');
    vaccinesElement.innerText = " has " + JSON.stringify(data.actuals.vaccinesDistributed) + " vaccines distributed \n";

    const vaccineInitElement = document.createElement('span');
    vaccineInitElement.innerText = "has started" + JSON.stringify(data.actuals.vaccinationsInitiated) + " vaccines \n";
    
    const vaccineCompElement = document.createElement('span');
    vaccineCompElement.innerText = "has completed" + JSON.stringify(data.actuals.vaccinationsCompleted) + " vaccines \n";

    const vaccineAdminElement = document.createElement('span');
    vaccineAdminElement.innerText = "has in total adminstered " + JSON.stringify(data.actuals.vaccinesAdministered) + " vaccines \n";
    var linebreak = document.createElement("br");
        

    vaccineDataElement.appendChild(stateElement);
    vaccineDataElement.appendChild(vaccinesElement);
    vaccineDataElement.appendChild(linebreak);

    vaccineDataElement.appendChild(vaccineInitElement);
    vaccineDataElement.appendChild(linebreak);

    vaccineDataElement.appendChild(vaccineCompElement);
    vaccineDataElement.appendChild(linebreak);

    vaccineDataElement.appendChild(vaccineAdminElement);
    vaccineDataElement.appendChild(linebreak);

    return vaccineDataElement;
}

