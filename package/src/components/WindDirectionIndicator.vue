<script lang="ts" setup>
  const props = withDefaults(
    defineProps<{
      deg?: number,
      size?: number,
    }>(), {
      deg: 0,
      size: 14,
    }
  )

  const transformString = computed(() => `rotate(${props.deg + 180},29.830955,29.809854)`)

</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style="fill:currentColor"
    :width="props.size"
    :height="props.size"
    viewBox="0 0 59.663096 59.663096">
    <g
      :transform="transformString">
      <path
        d="m 29.830955,0.00118554 18.896,52.91400046 -18.897,-13.247 -18.897999,13.247 z" />
    </g>
  </svg>
</template>