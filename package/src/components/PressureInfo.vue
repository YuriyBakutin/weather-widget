<script lang="ts" setup>
  import IWeather from '../types/IWeather'
  import pressureToGaugeAngle from '../helpers/pressureToGaugeAngle'

  const props = defineProps<{
    weatherData: IWeather,
  }>()

  const gaugeAngle = computed(() => pressureToGaugeAngle(props.weatherData.pressure))
</script>
<template>
  <div class="my3 flex justify-start items-center" v-if="props.weatherData.isLoaded">
    <PressureIndicator :size="16" :deg="gaugeAngle" class="ml3"/>
    <div class="ml1 h3"><b>{{props.weatherData.pressure}} hPa</b></div>
  </div>
</template>
