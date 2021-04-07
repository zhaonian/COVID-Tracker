/**fetches data from server and adds to DOM */
function loadData() {
    fetch('/covidData').then(response => response.json()).then((state) => {
        state.forEach((state) => {
            console.log(1);
        });
    });
        
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

/** Creates an element that represents a message */
function createDataElement(data) {
    
    const covidDataElement = document.createElement('li');
    covidDataElement.className = 'covidData';
    
    
    const dataElement = document.createElement('span');
    dataElement.innerText = JSON.stringify(data);

	
    covidDataElement.appendChild(dataElement);
  	
    return covidDataElement;
}