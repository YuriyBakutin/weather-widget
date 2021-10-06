<template>
  <div class="color-green">
    <mdi-tools />
    Vue Custom Element
    <custom-icon-easel class="big-size" />
  </div>
</template>
<style scoped>
/*  this class is necessary to check for the absence of conflicts
    of classes of elements and environments */
.big-size {
  font-size: 30px;
}

.color-green {
  color: green;
}
</style>
