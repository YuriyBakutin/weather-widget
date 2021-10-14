import state from './state'
import getUrlByCityName from '../helpers/getUrlByCityName'
import getWeatherDataFromResponse from '../helpers/getWeatherDataFromResponse'
import IWeatherResponse from '../types/IWeatherResponse'
import IWeathers from '../types/IWeathers'

const getWeatherResponseByLocation = async (location: string) => fetch(getUrlByCityName(location))
.then((response) => response.ok ? response.json() : null)
.catch(() => null) as unknown as IWeatherResponse | null

export default {
  initLocationsFromLocalStorage() {
    const locations = JSON.parse(localStorage.getItem('locations') ?? '[]')

    state.locations.value = locations
  },

  updateLocationsInLocalStorage() {
    localStorage.setItem('locations', JSON.stringify(state.locations.value))
  },

  async fetchWeatherByLocation(location: string) {
    const response = await getWeatherResponseByLocation(location)

    if (response === null) {
      return false
    }

    state.weatherData.value[location] = getWeatherDataFromResponse(response)

    return true
  },

  async fetchAllWeathers() {
    const locations = computed(() => state.locations.value)

    const responseDataArray = await Promise.all(
      locations.value.map(
        (location) => fetch(getUrlByCityName(location))
          .then((response) => response.ok ? response.json() : null)
          .catch(() => null) as unknown as IWeatherResponse | null
      )
    )

    responseDataArray.forEach(
      (responseData, index) => { state.weatherData.value[
          locations.value[index]
        ] = getWeatherDataFromResponse(responseData)
      }
    )
  },
}
