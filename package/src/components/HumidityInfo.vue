<script lang="ts" setup>
  import IWeather from '../types/IWeather'
  import getDewPoint from '../helpers/getDewPoint'

  const props = defineProps<{
    weatherData: IWeather,
  }>()

  const dewPoint = computed(() => getDewPoint(
    props.weatherData.humidity,
    props.weatherData.temperature).toFixed(0)
  )
</script>
<template>
  <div class="px3" v-if="props.weatherData.isLoaded">
    <div class="flex justify-start items-center">
      <carbon-humidity class="h3" />
      <div class="ml3 h3"><b>{{props.weatherData.humidity}} %</b></div>
    </div>
    <div
      v-if="(props.weatherData.temperature != null) &&  props.weatherData.temperature >= 0"
      class="flex justify-start items-center mt1">
      <custom-icon-dew-point class="h1" />
      <div class="ml3 h3"><b>{{dewPoint}}°C</b></div>
    </div>
  </div>
</template>
