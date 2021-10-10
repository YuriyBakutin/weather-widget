<template>
  <div class="fit relative border" style="min-height: 130px;">
    <div class="h1 bold mt3 ml3">
      Location
    </div>
    <waiting-spinner
      class="absolute btn-color"
      style="top: 56px; left: 40px"
      v-if="false" />
    <section class="clearfix">
      <div
        v-show="true"
        class="col col-6 border"
        style="height: 100px;">
        <img
          alt="Weather Icon"
          style="width: 100px; height: 100px;" />
      </div>
      <main-info
        class="col col-6"
        style="height: 100px;"
      />
      <wind-info class="col col-6" />
      <humidity-info class="col col-6" />
      <visibility-info class="col col-6" />
      <pressure-info class="col col-6" />
    </section>
  </div>
</template>
