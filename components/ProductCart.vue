<template>
  <div class="product-cart">
    <NuxtLink
      :to="product.user.links.html"
      target="_blank"
      class="product-cart__header"
    >
      <div class="photo">
        <img
          :src="product?.user.profile_image.small"
          v-if="product?.user.profile_image.small"
        />
      </div>

      <div class="author">
        <div class="name">{{ product?.user.name }}</div>
        <div class="link">
          <NuxtLink
            :to="'https://www.instagram.com/' + product.user.instagram_username"
            target="_blank"
            class="link__rout"
            v-if="product?.user.instagram_username"
            >{{ `@${product.user.instagram_username}` }}</NuxtLink
          >
          <span v-else>-</span>
        </div>
      </div>
    </NuxtLink>

    <div
      class="product-cart__images"
      :style="{ backgroundImage: 'url(' + product?.urls.regular + ')' }"
    ></div>
    <div class="product-cart__footer">
      <CardControl v-model="product.quantity" />
      <div class="price" v-if="product?.price">
        {{ formatNumbers(product.price) }}
        руб.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatNumbers } from '@/utils/formaterUtil';
import { watch } from 'vue';

const props = defineProps({
  product: Object,
  addBasket: Function,
  removeBasket: Function,
});

watch(
  () => props.product?.quantity,
  (newVal) => {
    if (newVal > 0) {
      if (props.addBasket) {
        props.addBasket(props.product, newVal);
      }
    }

    if (newVal == 0) {
      if (props.removeBasket) {
        props.removeBasket(props.product);
      }
    }
  },
);
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/display.scss';

.product-cart {
  width: 100%;

  &__header {
    display: flex;
    padding: 10px;
    text-decoration: none;
    color: #333;
    width: max-content;

    .photo {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #ccc;

      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }

    .author {
      padding-left: 10px;
      font-size: 12px;
      .name {
        font-weight: 700;
      }
      .link {
        color: #8d8d8d;
        &__rout {
          text-decoration: none;
          color: #8d8d8d;
        }
      }
    }
  }

  &__footer {
    padding: 10px;
    padding-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include sm-screen() {
      padding-bottom: 6px;
    }

    @include md-screen() {
      padding-bottom: 8px;
    }

    .price {
      font-weight: 700;
    }
  }

  &__images {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    width: 100%;
    padding-top: calc(72%);
  }
}
</style>
