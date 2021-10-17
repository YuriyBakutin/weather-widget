<script lang="ts" setup>
  const props = defineProps<{
    location: string
  }>()

  const emits = defineEmits<{
    removeLocation: (payload: string) => null,
  }>()

</script>
<template>
  <div class="fit my3 p1 clearfix control-box">
    <cil-hamburger-menu class="h1 col col-1" />
    <div class="h1 pl1 col col-10">{{location}}</div>
    <fluent-delete-24-regular
      class="h1 col col-1"
      @click="$emit('removeLocation', location)" />
  </div>
</template>
