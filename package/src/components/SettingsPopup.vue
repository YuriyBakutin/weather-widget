<script lang="ts" setup>
  import { VueDraggableNext } from 'vue-draggable-next'
  import { useStore } from '../store'
  import { storeToRefs } from 'pinia'

  const store = useStore()
  const { settingsMode, locations, isDark } = storeToRefs(store)

  const closeSettingsForm = () => {
    settingsMode.value = false
  }

  const removeLocation = (location: string) => {
    console.log('location: ', location);

    store.removeLocation(location)
  }

  const toggleDark = () => {
    isDark.value = !isDark.value
    store.setIsDarkToLocalStorage(isDark.value)
  }
</script>
<template>
  <div class="base border relative p3" :class="isDark ? 'base-dark' : 'base'">
    <div class="absolute top-0 right-0 mt1 mr1">
      <carbon-moon v-if="isDark" class="h1 btn-color btn" @click="toggleDark" />
      <carbon-sun v-else class="h1 btn-color btn" @click="toggleDark" />
      <ci-close-big class="h1 btn-color btn ml1" @click="closeSettingsForm()"/>
    </div>
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
