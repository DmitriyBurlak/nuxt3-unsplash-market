<template>
  <div class="product__wrapper">
    <ProductCart v-for="(product, idx) in productList" :key="idx" :product="product" :addBasket="addBasket" :removeBasket="removeBasket" class="product" />
    <Footer :params="params" />
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, onMounted, watch } from 'vue'
import { useProductStore } from '@/store/product.store';
import { useBasketStore } from '@/store/basket.store';
import { ModBasic, ParamsRequest } from '@/interface/product'

const ProductStore = useProductStore();
const BasketStore = useBasketStore();

const addBasket = (product: ModBasic, quantity: number) => {
  let changeProduct = BasketStore.shoppingList.find(item => item.id === product.id);

  if (changeProduct) {
    product.quantity = quantity;
  } else {
    product.quantity = quantity;
    BasketStore.shoppingList.push(product)
  }
}

const removeBasket = (product: ModBasic) => {
  BasketStore.shoppingList = BasketStore.shoppingList.filter(item => item.id !== product.id)
}  

const productList = computed(() => ProductStore.productList);

const params = reactive<ParamsRequest>({
  query: "product tech", 
  page: 1, 
  perPage: 10,
  totalPage: 0
})

watch(() => params.page, (newVal) => {
  console.log(newVal);
  onRequest();
})

const onRequest = async () => {
  let {query, page, perPage} = params;

  await ProductStore.getProduct({
    query,
    orientation: "landscape",
    page,
    perPage,
  }).then(() => {
    params.totalPage = ProductStore.totalPage || 0;
  })
}

onMounted(async () => {
  await onRequest();
})

</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/display.scss';

.product__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .product {
    width: 100%;
    margin-bottom: 8px;

    @include sm-screen() { 
      margin-bottom: 0px;
    }

    @include md-screen() { 
      flex: 0 0 calc(50% - 10px);
    }
  }
}
</style>