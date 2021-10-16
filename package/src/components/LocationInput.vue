<script setup lang="ts">
  let city = ref('')

  const testLocation = () => {
    if (!city.value) {
      return
    }

    console.log('city: ', city.value);
  }
</script>
<template>
  <div class="fit flex flex-column items-center">
    <div
      class="fit flex flex-row justify-around clearfix">
      <input
        class="input mt4 mx2 h2 col col-11"
        type="text"
        name="LocationInput"
        id="LocationInput"
        v-model="city"
        placeholder="Add Location" />
      <fluent-arrow-enter-left-20-filled
        class="h1 mt4 mr2"
        :class="city ? 'btn' : '', city ?  'btn-color' : 'off-btn-color'"
        @click="testLocation()" />
    </div>
    <div class="mb4 h1 my4 mr1 col col-1" v-if="true">
      <WaitingSpinner visible />
    </div>
    <div class="mx4 center fit mb4 text-error" v-if="false">
      Location<br><b>{{city}}</b><br>could not be found!
    </div>
  </div>
</template>
