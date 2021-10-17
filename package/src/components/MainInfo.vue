<script lang="ts" setup>
  import IWeather from '../types/IWeather'
  import firstLetterToUpperCase from '../helpers/firstLetterToUpperCase'

  const props = defineProps<{
    weatherData: IWeather,
  }>()
</script>
<template>
  <div class="px3 py1 flex flex-column justify-center" style="height: 100rem;">
    <div class="fit" v-if="props.weatherData.isLoaded">
      <div class="h0 fit bold">
        {{Math.round(props.weatherData.temperature ?? 0)}}°c
      </div>
      <div>
        <div class="py1 flex justify-between">
          <div class="pr2 line-height-1">
            <div class="h1"><b>{{Math.round(props.weatherData.feelsLike ?? 0)}}°C</b></div>
            <custom-icon-palm class="h0 mt1" />
          </div>
        </div>
        <div class="h3 fit line-height-1">
          <b>{{firstLetterToUpperCase(props.weatherData.description ?? '')}}</b>
        </div>
      </div>
    </div>
  </div>
</template>
