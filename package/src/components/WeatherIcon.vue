<script lang="ts" setup>
  import state from '../store/state'

  const props = defineProps<{
    location: string,
  }>()

  let weatherData = computed(() => state.weatherData.value[props.location])
  // console.log('weatherData: ', weatherData)
  // console.log('weatherData.value!.iconId: ', weatherData.value?.iconId);

  const weatherImageUrl = computed(() => !weatherData.value
    ? ''
    : `http://openweathermap.org/img/wn/${weatherData.value!.iconId}@2x.png`
  )

  console.log('weatherImageUrl: ', weatherImageUrl.value)

  let isLoaded = ref(false)

  const onImgLoad = () => {
    isLoaded.value = true
  }

</script>
<template>
  <div class="flex flex-column items-center justify-center">
    <WaitingSpinner
      class="btn-color"
      :visible="!isLoaded" />
    <div
      v-show="isLoaded"
      style="height: 100px;">
      <img
          v-show="isLoaded"
          :src="weatherImageUrl"
          style="width: 100px; height: 100px;"
          @load="onImgLoad" />
    </div>
  </div>
</template>
