import { defineStore } from 'pinia'
import fetchWeatherByLocationPromise from '../helpers/fetchWeatherByLocationPromise'
import getWeatherDataFromResponse from '../helpers/getWeatherDataFromResponse'
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
      const locations: string[] = JSON.parse(localStorage.getItem('locations') ?? '[]')

      this.locations = locations

      locations.forEach((location) => {
        this.weathersData[location] = (new Weather).weather
      })
    },
    addLocationWithWeatherData(
      { location, weatherData }: { location: string, weatherData: IWeather }
    ) {
      if ( this.locations.includes(location) ) {
        return false
      }

      this.locations.push(location)
      this.weathersData[location] = weatherData

      localStorage.setItem('locations', JSON.stringify(this.locations))

      return true
    },
    async fetchWeatherByLocation(location: string) {
      const response = await fetchWeatherByLocationPromise(location)

      if (response === null) {
        return false
      }

      const newWeatherData = getWeatherDataFromResponse(response)

      if (!this.weathersData[location]) {
        this.weathersData[location] = { ...emptyWeatherData }
      }

      // Deep assignment is necessary for the reactivity of properties
      // to work correctly
      Weather.deepAssignment(
        newWeatherData as IWeather,
        this.weathersData[location] as IWeather
      )

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

      localStorage.setItem('locations', JSON.stringify(this.locations))

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
