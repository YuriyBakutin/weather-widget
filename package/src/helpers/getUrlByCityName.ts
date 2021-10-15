export default (city: string) => {
  const WeatherWidgetToken = localStorage.getItem('WeatherWidgetToken')
  const url = 'https://api.openweathermap.org/data/2.5/weather'
    + `?q=${city}`
    + `&appid=${WeatherWidgetToken}`
    + '&lang=en&units=metric'

  return url
}
