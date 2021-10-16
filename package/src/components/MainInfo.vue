<script lang="ts" setup>
  import firstLetterToUpperCase from '../helpers/firstLetterToUpperCase'
  import store from '../store'

  const props = defineProps<{
    location: string,
  }>()

  let weatherData = computed(() => store.data.state.weathersData.value[props.location])
</script>
<template>
  <div class="px3 py1 flex flex-column justify-center" style="height: 100rem;">
    <div class="fit" v-if="weatherData">
      <div class="h0 fit mb2 bold">
        {{Math.round(weatherData!.temperature)}}°c
      </div>
      <div>
        <div class="py1 flex justify-between">
          <div class="pr2 line-height-1">
            <div class="h1"><b>{{Math.round(weatherData!.feelsLike)}}°C</b></div>
            <custom-icon-palm class="h0 mt1" />
          </div>
        </div>
        <div class="h3 mt1 fit line-height-1">
          <b>{{firstLetterToUpperCase(weatherData!.description)}}</b>
        </div>
      </div>
    </div>
  </div>
</template>
