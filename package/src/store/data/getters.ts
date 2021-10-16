import state from './state'

export default {
  getWeatherDataByCity(city: string) {
    return state.weathersData.value[city]
  }
}