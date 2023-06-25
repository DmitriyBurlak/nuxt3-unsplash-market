<template>
  <div class="container">
    <div class="container__wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang=scss>
@import '@/assets/scss/mixins/display.scss';

.container {
  background-color: #fff;
    
  &__wrapper {
    width: 100%;
    margin: 0 auto 60px;

    @include sm-screen() { 
      width: calc(100% - 40px);
      margin: 0 auto 65px;
    }

    @include md-screen() { 
      width: 86%;
    }

    @include lg-screen() { 
      width: 66%;
    }
  }
}
</style>