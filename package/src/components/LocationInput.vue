<script setup lang="ts">
  import fetchWeatherByLocationPromise from '../helpers/fetchWeatherByLocationPromise'
  import getWeatherDataFromResponse from '../helpers/getWeatherDataFromResponse'
  import getLocationFromWeatherData from '../helpers/getLocationFromWeatherData'
  import IWeather from '../types/IWeather'
  import { useStore } from '../store'
  import { storeToRefs } from 'pinia'

  const store = useStore()
  const { locations } = storeToRefs(store)

  const location = ref('')
  const waiting = ref(false)
  const notFound = ref(false)
  const alreadyExists = ref(false)
  const errorMessage = ref('')

  const onInputReady = async () => {
    if (!location?.value) {
      return
    }

    console.log('location: ', location.value);
    waiting.value = true

    const response = await fetchWeatherByLocationPromise(location.value)
    console.log('response: ', response)

    waiting.value = false

    if (!response) {
      notFound.value = true

      return
    }

    const weatherData = getWeatherDataFromResponse(response) as IWeather

    if ( locations.value.includes(getLocationFromWeatherData(weatherData)) ) {
      alreadyExists.value = true

      return
    }

    store.addLocationWithWeatherData({
      location: location.value,
      weatherData: weatherData
    })

    location.value = ''
  }

  watch(location,() => {
    notFound.value = false
    alreadyExists.value = false
  })
</script>
<template>
  <div class="fit flex flex-column items-center">
    <div
      class="fit flex flex-row justify-around clearfix">
      <input
        class="input mr2 h2 col col-11"
        :class="waiting ? 'disabled' : ''"
        type="text"
        v-model="location"
        placeholder="Add Location"
        @keyup.enter="onInputReady()" />
      <fluent-arrow-enter-left-20-filled
        class="h1 mt1 col-1"
        :class="location ? 'btn' : '', location ?  'btn-color' : 'off-btn-color'"
        @click="onInputReady()" />
    </div>
    <div class="h1 my4" v-if="waiting">
      <WaitingSpinner visible />
    </div>
    <div class="center fit mt2 h1 text-error" v-if="notFound">
      Location <b>{{location}}</b> could not be found!
    </div>
    <div class="center fit mt2 h1 text-error" v-if="alreadyExists">
      Location <b>{{location}}</b> already exists!
    </div>
  </div>
</template>
