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
    <div class="h1 pl1 col col-11 handle">{{location}}</div>
    <fluent-delete-24-regular
      class="h1 col col-1 btn"
      @click="$emit('removeLocation', location)" />
  </div>
</template>
