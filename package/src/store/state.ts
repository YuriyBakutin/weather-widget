import IWeathers from '../types/IWeathers'

export default {
  locations: ref([] as string[]),
  weatherData: ref({} as IWeathers),
}
