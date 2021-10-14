import type { Ref } from 'vue'
import IWeather from './IWeather'

export default interface IWeathers {
  [key: string]: Ref<IWeather | null>
}
