<script lang="ts" setup>
  import state from '../store/state'
  import getDistanceString from '../helpers/getDistanceString'

  const props = defineProps<{
    location: string,
  }>()

  let weatherData = computed(() => state.weatherData.value[props.location])
  let distanceData = computed(() => getDistanceString(weatherData.value?.visibility))
</script>
<template>
  <div
    class="my3 flex justify-start items-center"
    v-if="weatherData">
    <dashicons-visibility class="ml3"/>
    <codicon-arrow-small-right class="h1"/>
    <div class="ml1 h3">
      <b>{{distanceData.distance}} {{distanceData.unit}}</b>
    </div>
  </div>
</template>
