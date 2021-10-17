<script lang="ts" setup>
  import IWeather from '../types/IWeather'
  import getBeaufortName from '../helpers/getBeaufortName'
  import getWindRoseName from '../helpers/getWindRoseName'
  import { useStore } from '../store'

  const store = useStore()

  const props = defineProps<{
    weatherData: IWeather,
  }>()

  const windRoseName = computed(() => getWindRoseName(props.weatherData.windDeg))
  const beaufortName = computed(() => getBeaufortName(props.weatherData.windSpeed))
</script>
<template>
  <div v-if="props.weatherData.isLoaded" class="mb1 h4">
    <div class="flex justify-start items-baseline">
      <WindDirectionIndicator class="ml3" :deg="props.weatherData.windDeg" />
      <div class="ml1 h5"><b>{{windRoseName}}</b></div>
      <div class="ml1 h3"><b>{{props.weatherData.windSpeed?.toFixed(1)}} m/s</b></div>
    </div>
    <div class="ml3 mt1 h3 line-height-1">
      <b>{{beaufortName}}</b>
    </div>
  </div>
</template>
