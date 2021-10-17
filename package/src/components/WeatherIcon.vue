<script lang="ts" setup>
  import IWeather from '../types/IWeather'
  import getWeatherImageUrl from '../helpers/getWeatherImageUrl'

  const props = defineProps<{
    weatherData: IWeather,
  }>()

  const weatherImageUrl = computed(() => getWeatherImageUrl(props.weatherData.iconId))
  const isLoaded = ref(false)

  const onImgLoad = () => {
    isLoaded.value = true
  }

</script>
<template>
  <div class="flex flex-column items-center justify-center">
    <WaitingSpinner
      class="btn-color"
      :visible="!props.weatherData.isLoaded" />
    <div
      v-show="props.weatherData.isLoaded"
      style="height: 100px;">
      <img
          v-show="props.weatherData.isLoaded"
          :src="weatherImageUrl"
          style="width: 100px; height: 100px;"
          @load="onImgLoad" />
    </div>
  </div>
</template>
