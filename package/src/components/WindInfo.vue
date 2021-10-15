<script lang="ts" setup>
  import state from '../store/state'
  import getBeaufortName from '../helpers/getBeaufortName'
  import getWindRoseName from '../helpers/getWindRoseName'

  const props = defineProps<{
    location: string,
  }>()

  let weatherData = computed(() => state.weatherData.value[props.location])

  let windDeg = computed(() => weatherData.value?.windDeg)
  let windRoseName = computed(() => getWindRoseName(windDeg.value))
  let windSpeed = computed(() => weatherData.value?.windSpeed.toFixed(1))
  let beaufortName = computed(() => getBeaufortName(weatherData.value?.windSpeed))
</script>
<template>
  <div v-if="weatherData" class="mb1 h4">
    <div class="flex justify-start items-baseline">
      <WindDirectionIndicator class="ml3" :deg="windDeg" />
      <div class="ml1 h5"><b>{{windRoseName}}</b></div>
      <div class="ml1 h3"><b>{{windSpeed}} m/s</b></div>
    </div>
    <div class="ml3 mt1 h3 line-height-1">
      <b>{{beaufortName}}</b>
    </div>
  </div>
</template>
