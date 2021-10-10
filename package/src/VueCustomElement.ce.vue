<template>
  <div class="color-green">
    <mdi-tools />
    Vue Custom Element
    <custom-icon-easel class="big-size" />
  </div>
</template>
<style scoped>
@import '../node_modules/basscss/css/basscss.min.css';
/*  this class is necessary to check for the absence of conflicts
    of classes of elements and environments */
.big-size {
  font-size: 30px;
}

.color-green {
  color: green;
}
</style>
