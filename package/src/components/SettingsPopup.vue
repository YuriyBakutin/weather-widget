<script lang="ts" setup>
  import store from '../store'



  const closeSettingsForm = () => {
    store.settings.state.settingsMode.value = false
  }
</script>
<template>
  <div class="base border relative">
    <ci-close-big
      class="absolute top-0 right-0 mt1 mr1 h1 btn-color btn"
      @click="closeSettingsForm()"/>
    <div class="h1 bold mt3 ml3">Settings</div>
    <location-input />
  </div>
</template>
