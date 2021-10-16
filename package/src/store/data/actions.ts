import state from './state'
import getUrlByCityName from '../../helpers/getUrlByCityName'
import getWeatherDataFromResponse from '../../helpers/getWeatherDataFromResponse'
import IWeatherResponse from '../../types/IWeatherResponse'

const getWeatherResponseByLocation = async (location: string) => fetch(getUrlByCityName(location))
.then((response) => response.ok ? response.json() : null)
.catch(() => null) as unknown as IWeatherResponse | null

export default {
  initLocationsFromLocalStorage() {
    const locations = JSON.parse(localStorage.getItem('locations') ?? '[]')

    state.locations.value = locations
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
      (responseData, index) => { state.weathersData.value[
          locations.value[index]
        ] = getWeatherDataFromResponse(responseData)
      }
    )
  },
}
