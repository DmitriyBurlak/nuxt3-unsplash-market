<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="block-pagination">
        <Paginate
          v-model="props.params.page"
          :page-count="props.params.totalPage"
          :click-handler="functionName"
          container-class="pagination"
          page-class="page"
          prev-class="prev-class"
          next-class="next-class"
        />
      </div>
      <div class="basket">
        {{ formatNumbers(purchaseAmount) }} руб.
        <object
          type="image/svg+xml"
          data="/icons/basket.svg"
          width="24"
          height="24"
          class="basket__icon"
        ></object>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { formatNumbers } from '@/utils/formaterUtil';
import { useBasketStore } from '@/store/basket.store';
import Paginate from 'vuejs-paginate-next';

const props = defineProps({
  params: Object,
});

const BasketStore = useBasketStore();
const purchaseAmount = computed(() => BasketStore.purchaseAmount);
</script>

<style scoped lang="scss">
@import '@/assets/scss/mixins/display.scss';

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.89);

  @include sm-screen() {
    width: 100%;
  }

  &__wrapper {
    position: relative;
    width: 100%;
    padding: 18px 10px 18px 0;
    color: #fff;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @include sm-screen() {
      width: calc(100% - 40px);
      padding: 18px 0;
      justify-content: flex-end;
    }

    @include md-screen() {
      width: 86%;
    }

    @include lg-screen() {
      width: 66%;
    }
  }
}

.block-pagination {
  width: 210px;
  display: flex;
  justify-content: center;

  .pagination {
    display: flex;
    align-items: flex-end;
  }

  :deep(.prev-class) {
    display: none;
  }

  :deep(.next-class) {
    display: none;
  }

  :deep(.page) {
    font-size: 14px;
    padding: 0 7px;
    cursor: pointer;

    &.active {
      font-size: 18px;
      font-weight: 700;
    }
  }

  @include sm-screen() {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
  }
}

.basket {
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;

  &__icon {
    margin-left: 6px;
  }
}
</style>
