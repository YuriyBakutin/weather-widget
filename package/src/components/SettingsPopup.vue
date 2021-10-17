<script lang="ts" setup>
  import { VueDraggableNext } from 'vue-draggable-next'
  import { useStore } from '../store'
  import { storeToRefs } from 'pinia'

  const store = useStore()
  const { settingsMode, locations } = storeToRefs(store)

  const closeSettingsForm = () => {
    settingsMode.value = false
  }

  const removeLocation = (location: string) => {
    console.log('location: ', location);

    store.removeLocation(location)
  }
</script>
<template>
  <div class="base border relative p3">
    <ci-close-big
      class="absolute top-0 right-0 mt1 mr1 h1 btn-color btn"
      @click="closeSettingsForm()"/>
    <div class="h1 bold mb2">Settings</div>
    <VueDraggableNext class="dragArea list-group w-full" :list="locations">
      <LocationHandle
        v-for="location in locations"
        :location="location"
        @removeLocation="removeLocation" />
      <LocationInput />
    </VueDraggableNext>
  </div>
</template>
