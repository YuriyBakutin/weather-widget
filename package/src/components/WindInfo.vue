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
  <div>
    <div v-if="weatherData">
      <div class="flex justify-start items-center">
        <WindDirectionIndicator class="ml3" :deg="windDeg" />
        <div class="ml1"><b>{{windRoseName}}</b></div>
        <div class="ml1"><b>{{windSpeed}}</b>m/s</div>
      </div>
      <div class="ml3">
        <b>{{beaufortName}}</b>
      </div>
    </div>
  </div>
</template>
