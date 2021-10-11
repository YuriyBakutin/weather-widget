<script lang="ts">
  // FIXME: This is test initialization
  localStorage.setItem('locations', '["London", "Paris"]')
</script>
<script lang="ts" setup>
  import WStore from './store/index'

  WStore.actions.setLocationsFromLocalStorage()
  let locations = computed(() => WStore.state.locations.value)

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
