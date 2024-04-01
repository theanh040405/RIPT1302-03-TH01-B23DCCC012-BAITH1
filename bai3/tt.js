document.addEventListener('DOMContentLoaded', function() {
    fetchWeatherData();
  });
  
  function fetchWeatherData() {
    const apiKey = '4ae04986f307408ba4222015240104';
    const apiUrl = 'https://api.weatherapi.com/v1/current.json?q=HaNoi&key=' + apiKey;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Không thể tải dữ liệu thời tiết');
        }
        return response.json();
      })
      .then(data => {
        displayWeatherInfo(data);
      })
      .catch(error => {
        console.error('Lỗi:', error);
      });
  }
  
  function displayWeatherInfo(data) {
    const weatherInfoElement = document.getElementById('weather-info');
  
    const cityName = data.location.name;
    const temperature = data.current.temp_c;
    const weatherCondition = data.current.condition.text;
  
    const weatherHTML = `
      <p>Thành phố: ${cityName}</p>
      <p>Nhiệt độ: ${temperature}°C</p>
      <p>Tình trạng thời tiết: ${weatherCondition}</p>
    `;
  
    weatherInfoElement.innerHTML = weatherHTML;
  }
  