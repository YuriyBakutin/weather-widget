<script lang="ts" setup>
  import state from '../store/state'

  const props = defineProps<{
    location: string,
  }>()

  let weatherData = computed(() => state.weatherData.value[props.location])
</script>
<template>
  <div class="px3 py1 flex flex-column justify-center" style="height: 100rem;">
    <div class="fit" v-if="weatherData">
      <div class="h0 fit mb2 bold center">
        {{Math.round(weatherData!.temperature)}}°c
      </div>
       <div class="fit left">
        <div class="h2 fit">Feels like <b>{{Math.round(weatherData!.feelsLike)}}°C</b></div>
        <div class="h2 fit"><b><i>{{weatherData!.description}}</i></b></div>
      </div>
    </div>
  </div>
</template>
