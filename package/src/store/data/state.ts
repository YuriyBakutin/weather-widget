import IWeathers from '../../types/IWeathers'

export default {
  locations: ref([] as string[]),
  weathersData: ref({} as IWeathers),
}
