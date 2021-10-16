import state from './state'
import getUrlByCityName from '../../helpers/getUrlByCityName'
import getWeatherDataFromResponse from '../../helpers/getWeatherDataFromResponse'
import IWeatherResponse from '../../types/IWeatherResponse'
import IWeather from '../../types/IWeather'

const getWeatherResponseByLocation = async (location: string) => fetch(getUrlByCityName(location))
.then((response) => response.ok ? response.json() : null)
.catch(() => null) as unknown as IWeatherResponse | null

export default {
  async fetchWeatherByLocation(location: string) {
    const response = await getWeatherResponseByLocation(location)

    if (response === null) {
      return false
    }

    state.weatherData.value = getWeatherDataFromResponse(response) as IWeather

    return true
  },

  updateLocationsInLocalStorage() {
    localStorage.setItem('locations', JSON.stringify(state.locations.value))
  },
}
