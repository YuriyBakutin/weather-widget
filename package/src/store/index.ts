import { defineStore } from 'pinia'
import fetchWeatherByLocationPromise from '../helpers/fetchWeatherByLocationPromise'
import getWeatherDataFromResponse from '../helpers/getWeatherDataFromResponse'
import getLocationFromWeatherData from '../helpers/getLocationFromWeatherData'
import IWeathers from '../types/IWeathers'
import IWeather from '../types/IWeather'
import Weather from '../types/Weather'

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

export const useStore = defineStore('main', {
  state: () => ({
      settingsMode: false,
      locations: [] as string[],
      weathersData: {} as IWeathers,
      isDark: true,
  }),
  getters: {
    getWeatherDataByLocation: (state) => {
      return (location: string) => {
        return state.weathersData[location] as IWeather
      }
    }
  },
  actions: {
    initLocationsFromLocalStorage() {
      const locations: string[] = JSON.parse(localStorage.getItem('WeatherWidgetLocations') ?? '[]')

      this.locations = locations

      locations.forEach((location) => {
        this.weathersData[location] = (new Weather).weather
      })
    },
    initIsDarkFromLocalStorage() {
      this.isDark = !!JSON.parse(localStorage.getItem('WeatherWidgetIsDark') ?? '0')
    },
    setIsDarkToLocalStorage(isDark: boolean) {
      localStorage.setItem('WeatherWidgetIsDark', JSON.stringify(isDark ? 1 : 0))
    },
    addLocationWithWeatherData(
      { location, weatherData }: { location: string, weatherData: IWeather }
    ) {
      if ( this.locations.includes(location) ) {
        return false
      }

      const locationWithCountry = getLocationFromWeatherData(weatherData)
      this.locations.push(locationWithCountry)
      this.weathersData[locationWithCountry] = weatherData

      localStorage.setItem('WeatherWidgetLocations', JSON.stringify(this.locations))

      return true
    },
    removeLocation(location: string) {
      if (!this.locations.includes(location)) {
        return false
      }

      this.locations = this.locations.filter((location_) => location_ != location)

      if (this.weathersData[location]) {
        delete this.weathersData[location]
      }

      localStorage.setItem('WeatherWidgetLocations', JSON.stringify(this.locations))

      return true
    },
    async fetchAllWeathers() {
      const responseDataArray = await Promise.all(
        this.locations.map(
          (location) => fetchWeatherByLocationPromise(location)
          )
      )

      responseDataArray.forEach(
        (responseData, index) => {
          this.weathersData[this.locations[index]] = getWeatherDataFromResponse(responseData)
        }
      )
    },
  }
})
