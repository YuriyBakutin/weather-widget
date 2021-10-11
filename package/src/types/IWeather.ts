export default interface IWeather {
  id: number,
  city: string,
  country: string,
  description: string,
  iconId: string,
  temperature: number,
  feelsLike: number,
  windSpeed: number,
  windDeg: number,
  pressure: number,

  humidity: number,
  visibility: number,
}
