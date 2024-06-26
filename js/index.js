function getWeather() {
 var x=document.getElementById('Find').value;
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=4d404b9967ac4672a8a181651242506&q=${x}`;

 
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      document.getElementById('num').value = data.current.temp_c;
      document.getElementById('city').value = data.location.name;
    })
    .catch(error => {
      console.error('Error:', error);
    });



}
