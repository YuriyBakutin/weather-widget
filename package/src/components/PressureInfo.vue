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

  // min sea-level pressure = 907 hPa, deviation "-" from the norm = 1013 - 907 = 106
  // max sea-level pressure = 1080 hPa, deviation "+" from the norm = 1080 - 1013 = 67
  // For expressive indication the dependence of the gaugeAngle is nonlinear.
  let gaugeAngle = computed(
    () => pressure.value ? Math.tanh((pressure.value - normalPressure) / 45) * 170 : 0
  )
</script>
<template>
  <div class="my3 flex justify-start items-center" v-if="weatherData">
    <PressureIndicator :size="16" :deg="gaugeAngle" class="ml3"/>
    <div class="ml1 h3"><b>{{pressure}} hPa</b></div>
  </div>
</template>
