<script setup lang="ts">
  import fetchWeatherByLocationPromise from '../helpers/fetchWeatherByLocationPromise'
  import getWeatherDataFromResponse from '../helpers/getWeatherDataFromResponse'
  import IWeather from '../types/IWeather'
  import { useStore } from '../store'
  import { storeToRefs } from 'pinia'

  const store = useStore()
  const { locations } = storeToRefs(store)

  const city = ref('')
  const waiting = ref(false)
  const notFound = ref(false)
  const alreadyExists = ref(false)

  const locationValidate = async () => {
    if (!city?.value) {
      return
    }

    console.log('city: ', city.value);
    waiting.value = true

    const response = await fetchWeatherByLocationPromise(city.value)
    console.log('response: ', response)

    waiting.value = false

    if (!response) {
      notFound.value = true

      return
    }

    const newWeatherData = getWeatherDataFromResponse(response) as IWeather

    if ( locations.value.includes(newWeatherData!.city) ) {
      alreadyExists.value = true

      return
    }

    store.addLocationWithWeatherData({
      location: city.value,
      weatherData: newWeatherData
    })

    city.value = ''
  }

  watch(city,() => {
    notFound.value = false
    alreadyExists.value = false
  })
</script>
<template>
  <div class="fit flex flex-column items-center">
    <div
      class="fit flex flex-row justify-around clearfix">
      <input
        class="input mt2 mr2 h2 col col-11"
        :class="waiting ? 'disabled' : ''"
        type="text"
        v-model="city"
        placeholder="Add Location" />
      <fluent-arrow-enter-left-20-filled
        class="h1 mt4 col-1"
        :class="city ? 'btn' : '', city ?  'btn-color' : 'off-btn-color'"
        @click="locationValidate()" />
    </div>
    <div class="h1 my4" v-if="waiting">
      <WaitingSpinner visible />
    </div>
    <div class="center fit mt2 h1 text-error" v-if="notFound">
      Location <b>{{city}}</b> could not be found!
    </div>
    <div class="center fit mt2 h1 text-error" v-if="alreadyExists">
      Location <b>{{city}}</b> already exists!
    </div>
  </div>
</template>
