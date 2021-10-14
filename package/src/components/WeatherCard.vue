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
    <section class="clearfix">
      <WeatherIcon
        class="r col col-6"
        style="height: 100px;"
        :location="location"
      />
      <MainInfo
        class="r col col-6"
        style="height: 100px;"
        :location="location"
      />
      <WindInfo
        class="r col col-6"
        :location="location"
      />
      <HumidityInfo class="r col col-6" />
      <VisibilityInfo class="r col col-6" />
      <PressureInfo class="r col col-6" />
    </section>
  </div>
</template>
