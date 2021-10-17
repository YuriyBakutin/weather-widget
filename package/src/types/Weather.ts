import IWeather from "./IWeather"

const emptyWeatherData = {
  id: 0,
  city: '',
  country: '',
  description: '',
  iconId: '',
  temperature: 0,
  feelsLike: 0,
  windSpeed: 0,
  windDeg: 0,
  pressure: 0,
  humidity: 0,
  visibility: 0,
  isLoaded: false,
}

export default class Weather {
  weather: IWeather

  constructor() {
    this.weather = { ...emptyWeatherData }
  }

  static deepAssignment(from: IWeather, to: IWeather) {
    to!.id = from!.id
    to!.city = from!.city
    to!.country = from!.country
    to!.description = from!.description
    to!.iconId = from!.iconId
    to!.temperature = from!.temperature
    to!.feelsLike = from!.feelsLike
    to!.windSpeed = from!.windSpeed
    to!.windDeg = from!.windDeg
    to!.pressure = from!.pressure
    to!.humidity = from!.humidity
    to!.visibility = from!.visibility
    to!.isLoaded = from!.isLoaded
  }
}
