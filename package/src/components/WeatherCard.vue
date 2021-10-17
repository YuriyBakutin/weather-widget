<script lang="ts" setup>
  import IWeather from '../types/IWeather'

  const props = defineProps<{
    weatherData: IWeather,
  }>()

</script>
<template>
  <div class="fit relative" style="min-height: 130px;">
    <div class="h1 bold mt3 ml3">
      {{props.weatherData.city}}
    </div>
    <div>
      <div class="clearfix">
        <WeatherIcon
          class="col col-6"
          style="height: 100px;"
          :weatherData="weatherData"
        />
        <MainInfo
          class="col col-6"
          style="height: 100px;"
          :weatherData="weatherData"
        />
      </div>
      <div class="clearfix">
        <WindInfo
          class="col col-6"
          :weatherData="weatherData"
        />
        <HumidityInfo
          class="col col-6"
          :weatherData="weatherData"
        />
      </div>
      <div class="clearfix">
        <VisibilityInfo
          class="col col-6"
          :weatherData="weatherData"
        />
        <PressureInfo
          class="col col-6"
          :weatherData="weatherData"
        />
      </div>
    </div>
  </div>
</template>
