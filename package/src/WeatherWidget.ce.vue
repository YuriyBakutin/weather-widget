<script lang="ts">
  // FIXME: This is test initialization
  localStorage.setItem('locations', '["London", "Havana", "Saint Petersburg"]')
  const fetchInterval = 1000 * 60 // ms (= 1 min)
</script>
<script lang="ts" setup>
  import store from './store'

  let settingsMode = computed(() => store.settings.state.settingsMode.value)
  store.data.actions.initLocationsFromLocalStorage()
  let locations = computed(() => store.data.state.locations.value)
  store.data.actions.fetchAllWeathers()
  const fetchIntervalId = setInterval(() => store.data.actions.fetchAllWeathers(), fetchInterval)

  const openSettingsForm = () => {
    store.settings.state.settingsMode.value = true
  }

  onUnmounted(() => {
    clearInterval(fetchIntervalId)
  })
</script>
<template>
  <div class="r relative base">
    <SettingsPopup class="absolute left-0 top-0 z1" v-if="settingsMode"/>
    <div class="h4 border" :class="settingsMode ? 'base-settings' : 'base'">
      <octicon-gear-16
        class="absolute right-0 top-0 mt2 mr2 h1 btn-color btn"
        @click="openSettingsForm()"/>
      <WeatherCard
        v-for="location in locations"
        :location="location" />
    </div>
  </div>
</template>
<style>
  @import '../node_modules/basscss/css/basscss.min.css';
  @import './styles/style.css';
</style>
