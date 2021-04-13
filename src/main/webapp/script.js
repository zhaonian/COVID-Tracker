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
    
    const vaccineDataTable = document.getElementById("myTable");
    vaccineDataTable.className = 'table table-responsive table-bordered';
    var tbody = document.createElement("tbody");
    
    const stateRow = document.createElement('tr');    
    const statecell = document.createElement('td');
    
    const state = document.createElement('td');
    state.innerHTML = " name of state ";
    statecell.innerHTML = JSON.stringify(data.state);

    stateRow.appendChild(state);
    stateRow.appendChild(statecell);
    tbody.append(stateRow);

    const distRow = document.createElement('tr');    
    const distcell = document.createElement('td');
    
    const dist = document.createElement('td');
    dist.innerHTML = " Distributed vaccines ";
    distcell.innerHTML = JSON.stringify(data.actuals.vaccinesDistributed);
    
    distRow.appendChild(dist);
    distRow.appendChild(distcell);
    tbody.append(distRow);

    const initRow = document.createElement('tr');    
    const initcell = document.createElement('td');
    
    const init = document.createElement('td');
    init.innerHTML = " Vaccinations intitiated ";
    initcell.innerHTML = JSON.stringify(data.actuals.vaccinationsInitiated);
    
    initRow.appendChild(init);
    initRow.appendChild(initcell);
    tbody.append(initRow);

    const compRow = document.createElement('tr');    
    const compcell = document.createElement('td');
    
    const comp= document.createElement('td');
    comp.innerHTML = " Vaccinations completed ";
    compcell.innerHTML = JSON.stringify(data.actuals.vaccinationsCompleted);
    
    compRow.appendChild(comp);
    compRow.appendChild(compcell);
    tbody.append(compRow);
    vaccineDataTable.appendChild(tbody);

    const adminRow = document.createElement('tr');    
    const admincell = document.createElement('td');
    
    const admin = document.createElement('td');
    admin.innerHTML = " Total vaccines adminstered ";
    admincell.innerHTML = JSON.stringify(data.actuals.vaccinesAdministered);
    
    adminRow.appendChild(admin);
    adminRow.appendChild(admincell);
    tbody.append(adminRow);
    vaccineDataTable.appendChild(tbody);


    return vaccineDataTable;
}
