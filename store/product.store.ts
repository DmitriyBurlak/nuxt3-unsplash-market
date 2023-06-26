import { defineStore } from 'pinia';
import { api } from '@/server/api/apiUnsplash';
import { ProductState } from '@/interface/product';
import { useBasketStore } from '@/store/basket.store';

export const useProductStore = defineStore('products', {
  state: (): ProductState => ({
    loading: false,
    productList: [],
    totalPage: 0,
  }),
  actions: {
    async getProduct(params: any) {
      try {
        const BasketStore = useBasketStore();

        this.loading = true;
        this.productList = [];
        const { response, errors } = await api.search.getPhotos(params);

        if (!!errors) {
          errors.length &&
            errors.forEach((err) => {
              throw new Error(err || 'Неизвестная ошибка');
            });
        }
        this.productList = response?.results;

        if (this.productList && this.productList.length) {
          this.productList = this.productList.map((i) => {
            let currentProduct = BasketStore.shoppingList.find(
              (product) => product.id == i.id,
            );

            if (currentProduct) {
              i = currentProduct;
            } else {
              let price = Math.floor(Math.random() * (60000 - 1000 + 1) + 1000);
              i.price = price;
              i.quantity = 0;
            }

            return i;
          });
        }

        this.totalPage = response?.total_pages;
      } catch (err: any) {
        console.log('err:', err);
        throw err;
      } finally {
        this.loading = false;
      }
    },
  },
});
