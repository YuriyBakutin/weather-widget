import IWeather from './IWeather'

export default interface IWeathers {
  [key: string]: IWeather | null
}
