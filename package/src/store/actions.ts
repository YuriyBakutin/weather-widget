import state from './state'
import getUrlByCityName from '../helpers/getUrlByCityName'
import getWeatherDataFromResponse from '../helpers/getWeatherDataFromResponse'
import IWeatherResponse from '../types/IWeatherResponse'

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

    const weatherData_ = { ...state.weatherData.value }

    weatherData_[location] = getWeatherDataFromResponse(await (
      (await fetch(url)).json()
    ) as unknown as IWeatherResponse)

    state.weatherData.value = weatherData_
  },

  async fetchAllWeathers() {
    const locations = state.locations.value

    const responseDataArray = await Promise.all(
      locations.map(
        (location) => fetch(getUrlByCityName(location))
          .then((response) => response.json())
          .catch(() => null) as unknown as IWeatherResponse | null
      )
    )

    responseDataArray.forEach(
      (responseData, index) => {
        const weatherData_ = { ...state.weatherData.value }
        weatherData_[locations[index]] = getWeatherDataFromResponse(responseData)
        state.weatherData.value = weatherData_
      }
    )
  },
}
