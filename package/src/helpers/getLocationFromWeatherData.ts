import IWeather from "../types/IWeather"

export default (weatherData: IWeather) => (
  weatherData.city + ', ' + weatherData.country
)