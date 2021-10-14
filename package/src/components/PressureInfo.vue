<script lang="ts" setup>
  import state from '../store/state'
  import getDistanceString from '../helpers/getDistanceString'

  const props = defineProps<{
    location: string,
  }>()

  let weatherData = computed(() => state.weatherData.value[props.location])
  console.log('weatherData: ', weatherData.value);
  let pressure = computed(() => weatherData.value?.pressure)

  // https://en.wikipedia.org/wiki/Atmospheric_pressure
  const normalPressure = 1013.25 // hPa

  // min sea-level pressure = 870 hPa, deviation "-" from the norm = 1013 - 870 = 143
  // max sea-level pressure = 1080 hPa, deviation "+" from the norm = 1080 - 1013 = 67
  // For expressive indication it is possible to take the 1° of rotation equal to 1hPa
  let gaugeAngle = computed(() => pressure.value ? pressure.value - normalPressure : 0)


</script>
<template>
  <div class="my3 flex justify-start items-center" v-if="weatherData">
    <PressureIndicator :size="16" :deg="gaugeAngle" class="ml3"/>
    <div class="ml1"><b>{{pressure}}</b> hPa</div>
  </div>
</template>
