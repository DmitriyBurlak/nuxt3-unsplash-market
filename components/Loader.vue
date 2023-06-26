<template>
  <div class="loading" :style="{ height: size }">
    <object
      type="image/svg+xml"
      data="/icons/loader.svg"
      class="loading__icon"
    ></object>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  size: String,
});
</script>

<style scoped lang="scss">
.loading {
  height: 20px;
  width: max-content;

  &__icon {
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }
}
</style>
