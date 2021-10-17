<script lang="ts" setup>
  import IWeather from '../types/IWeather'
  import getDistanceString from '../helpers/getDistanceString'

  const props = defineProps<{
    weatherData: IWeather,
  }>()

  const distanceData = computed(() => getDistanceString(props.weatherData.visibility))
</script>
<template>
  <div
    class="my3 flex justify-start items-center"
    v-if="props.weatherData.isLoaded">
    <dashicons-visibility class="ml3"/>
    <codicon-arrow-small-right class="h1"/>
    <div class="ml1 h3">
      <b>{{distanceData.distance}} {{distanceData.unit}}</b>
    </div>
  </div>
</template>
