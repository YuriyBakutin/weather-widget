<script lang="ts" setup>
  import state from '../store/state'
  import getDewPoint from '../helpers/getDewPoint'

  const props = defineProps<{
    location: string,
  }>()

  let weatherData = computed(() => state.weatherData.value[props.location])
  let humidity = computed(() => weatherData.value?.humidity)
  let temperature = computed(() => weatherData.value?.temperature)
  let dewPoint = computed(() => getDewPoint(humidity.value, temperature.value).toFixed(0))
</script>
<template>
  <div class="px3" v-if="weatherData">
    <div class="flex justify-start items-center">
      <carbon-humidity class="h3" />
      <div class="ml3"><b>{{humidity}}</b> %</div>
    </div>
    <div
      v-if="(temperature != null) &&  temperature >= 0"
      class="flex justify-start items-center">
      <custom-icon-dew-point class="h1" />
      <div class="ml3"><b>{{dewPoint}}</b>°C</div>
    </div>
  </div>
</template>
