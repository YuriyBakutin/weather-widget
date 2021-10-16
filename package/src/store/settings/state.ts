import IWeather from '../../types/IWeather'

export default {
  settingsMode: ref(false),
  location: ref(''),
  weatherData: ref({} as IWeather),
  locations: ref([] as string[]),
}
