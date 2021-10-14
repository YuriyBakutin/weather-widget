<script lang="ts" setup>
  const props = defineProps<{
    location: string,
  }>()

</script>
<template>
  <div class="fit relative" style="min-height: 130px;">
    <div class="h1 bold mt3 ml3">
      {{location}}
    </div>
    <div>
      <div class="clearfix">
        <WeatherIcon
          class="col col-6"
          style="height: 100px;"
          :location="location"
        />
        <MainInfo
          class="col col-6"
          style="height: 100px;"
          :location="location"
        />
      </div>
      <div class="clearfix">
        <WindInfo
          class="col col-6"
          :location="location"
        />
        <HumidityInfo
          class="col col-6"
          :location="location"
        />
      </div>
      <div class="clearfix">
        <VisibilityInfo
          class="col col-6"
          :location="location"
        />
        <PressureInfo
          class="col col-6"
          :location="location"
        />
      </div>
    </div>
  </div>
</template>
