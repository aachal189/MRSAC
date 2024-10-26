function fetchWeatherData(lat, lng, date) {
    var weatherAPI = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lng}&start_date=${date}&end_date=${date}&hourly=temperature_2m,precipitation,weathercode`;

    return fetch(weatherAPI)
        .then(response => response.json())
        .then(data => {
            if (data.hourly && data.hourly.time) {
                return {
                    time: data.hourly.time,
                    temperature: data.hourly.temperature_2m,
                    precipitation: data.hourly.precipitation,
                    weatherCode: data.hourly.weathercode
                };
            } else {
                throw new Error("No weather data available for the selected date.");
            }
        });
}

weatherBtn.addEventListener('click', function() {
    var query = searchInput.value;
    var selectedDate = dateInput.value;
    if (query && selectedDate) {
        geocodeQueryAndFetchWeather(query, selectedDate);
    } else {
        alert("Please enter a location and select a date.");
    }
});

function geocodeQueryAndFetchWeather(query, selectedDate) {
    var geocodeService = L.Control.Geocoder.nominatim();
    geocodeService.geocode(query, function(results) {
        if (results.length === 0) {
            alert("Location not found.");
        } else {
            var result = results[0];
            map.setView(result.center, 14);

            fetchWeatherData(result.center.lat, result.center.lng, selectedDate)
                .then(weatherData => {
                    var marker = L.marker(result.center).addTo(map)
                        .bindPopup(createWeatherPopupContent(result.name, weatherData, selectedDate))
                        .openPopup();

                    renderWeatherChart(weatherData);
                })
                .catch(error => {
                    alert("Error fetching weather data: " + error);
                });
        }
    });
}

function renderWeatherChart(weatherData) {
    var ctx = document.getElementById('weatherChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: weatherData.time.map(time => time.split('T')[1].slice(0, 5)), // Extract the time part (HH:MM)
            datasets: [
                {
                    label: 'Temperature (°C)',
                    data: weatherData.temperature,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Precipitation (mm)',
                    data: weatherData.precipitation,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

