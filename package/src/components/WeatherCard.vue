<script lang="ts" setup>
  const props = defineProps<{
      location: string,
    }>()

</script>
<template>
  <div class="r fit relative border" style="min-height: 130px;">
    <div class="r h1 bold mt3 ml3">
      {{location}}
    </div>
    <waiting-spinner
      class="r absolute btn-color"
      style="top: 56px; left: 40px"
      v-if="false" />
    <section class="clearfix">
      <div
        v-show="true"
        class="r col col-6 border"
        style="height: 100px;">
        <img
          alt="Weather Icon"
          style="width: 100px; height: 100px;" />
      </div>
      <main-info
        class="r col col-6"
        style="height: 100px;"
      />
      <wind-info class="r col col-6" />
      <humidity-info class="r col col-6" />
      <visibility-info class="r col col-6" />
      <pressure-info class="r col col-6" />
    </section>
  </div>
</template>
