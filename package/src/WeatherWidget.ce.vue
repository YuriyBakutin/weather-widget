<script lang="ts" setup>
  import { useStore } from './store'
  import { storeToRefs } from 'pinia'

  const store = useStore()
  const { settingsMode, locations } = storeToRefs(store)

  store.initLocationsFromLocalStorage()
  store.fetchAllWeathers()

  const fetchInterval = 1000 * 60 // ms (= 1 min)
  const fetchIntervalId = setInterval(() => store.fetchAllWeathers(), fetchInterval)

  const openSettingsForm = () => {
    settingsMode.value = true
  }

  onUnmounted(() => {
    clearInterval(fetchIntervalId)
  })
</script>
<template>
  <div class="r relative base">
    <SettingsPopup class="absolute left-0 top-0 z1" v-if="settingsMode"/>
    <WelcomeView v-if="!locations.length" :class="settingsMode ? 'base-settings' : 'base'" />
    <div
      v-else
      class="h4 border" :class="settingsMode ? 'base-settings' : 'base'">
      <octicon-gear-16
        class="absolute right-0 top-0 mt2 mr2 h1 btn-color btn"
        @click="openSettingsForm()"/>
      <WeatherCard
        v-for="location in locations"
        :weatherData="store.getWeatherDataByLocation(location)"
        />
    </div>
  </div>
</template>
<style>
  @import '../node_modules/basscss/css/basscss.min.css';
  @import './styles/style.css';
</style>
