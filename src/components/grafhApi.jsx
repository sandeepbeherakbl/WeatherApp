const API_KEY = "3b144a713d4b9e2025b079f4aed663da";
const API_URL_3HOURS = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

const weatherApi = {
  get3HoursData(currentCity) {
    return fetch(API_URL_3HOURS + "&q=" + currentCity)
      .then(response => {
        return response.json();
      })
      .then(data =>
        data.list.map(list => ({
          max: parseInt(list.main.temp_max, 0),
          min: parseInt(list.main.temp_min, 0),
          time: this.formatDate(list.dt, data.currentCity.timezone, "time"),
          weekday: this.formatDate(list.dt, data.currentCity.timezone, "weekday"),
          weather_icon: this.getIconUrl(list.weather[0].icon)
        }))
      )
      .catch(error => {
        return [];
      });
  },
};

export default weatherApi;