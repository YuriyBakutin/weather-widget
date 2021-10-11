<script lang="ts">
  // FIXME: This is test initialization
  localStorage.setItem('locations', '["London", "qq", "Moscow"]')
  // FIXME: Test fetchInterval value
  const fetchInterval = 1000 // * 60 // ms (= 1 min)
</script>
<script lang="ts" setup>
  import actions from './store/actions'
  import state from './store/state'

  actions.initLocationsFromLocalStorage()
  let locations = computed(() => state.locations.value)

  actions.fetchAllWeathers()

  const fetchIntervalId = setInterval(() => actions.fetchAllWeathers(), fetchInterval)

  onUnmounted(() => {
    clearInterval(fetchIntervalId)
  })

</script>
<template>
  <div class="r relative border h2 base">
    <div>
      <weather-card
        v-for="location in locations"
        :location="location" />
    </div>
  </div>
</template>
<style>
  @import '../node_modules/basscss/css/basscss.min.css';
  @import './styles/style.css';
</style>
