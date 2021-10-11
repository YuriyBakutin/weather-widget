import state from './state'
import getUrlByCityName from '../helpers/getUrlByCityName'
import getWeatherDataFromResponse from '../helpers/getWeatherDataFromResponse'
import IWeatherResponse from '../types/IWeatherResponse'
import IWeathers from '../types/IWeathers'

export default {
  initLocationsFromLocalStorage() {
    const locations = JSON.parse(localStorage.getItem('locations') ?? '[]')

    state.locations.value = locations
  },

  updateLocationsInLocalStorage() {
    localStorage.setItem('locations', JSON.stringify(state.locations.value))
  },

  async fetchWeatherByLocation(location: string) {
    const url = getUrlByCityName(location)

    const response = await fetch(url)

    if (!response.ok) {
      return false
    }

    const weatherData_ = { ...state.weatherData.value }

    weatherData_[location] = getWeatherDataFromResponse(
      (await response.json()) as unknown as IWeatherResponse
    )

    state.weatherData.value = weatherData_

    return true
  },

  async fetchAllWeathers() {
    const locations = state.locations.value

    const responseDataArray = await Promise.all(
      locations.map(
        (location) => fetch(getUrlByCityName(location))
          .then((response) => response.ok ? response.json() : null)
          .catch(() => null) as unknown as IWeatherResponse | null
      )
    )

    state.weatherData.value = responseDataArray.reduce(
      (a, responseData, index) => {
        a[locations[index]] = responseData ? getWeatherDataFromResponse(responseData) : null

        return a
      },
      {} as IWeathers,
    )
  },
}
