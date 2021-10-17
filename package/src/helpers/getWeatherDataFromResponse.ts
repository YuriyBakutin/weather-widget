import IWeatherResponse from '../types/IWeatherResponse'

export default (weatherResponse: IWeatherResponse | null) => {
  if (!weatherResponse) {
    return null
  }

  return {
    id: weatherResponse!.id,
    city: weatherResponse!.name,
    country: weatherResponse!.sys.country,
    description: weatherResponse!.weather[0].description,
    iconId: weatherResponse!.weather[0].icon,
    temperature: weatherResponse!.main.temp,
    feelsLike: weatherResponse!.main.feels_like,
    windSpeed: weatherResponse!.wind.speed,
    windDeg: weatherResponse!.wind.deg,
    pressure: weatherResponse!.main.pressure,
    humidity: weatherResponse!.main.humidity,
    visibility: weatherResponse!.visibility,
    isLoaded: true,
  }
}
