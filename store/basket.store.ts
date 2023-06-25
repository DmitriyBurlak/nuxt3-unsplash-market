import { defineStore } from 'pinia'
import { BasketState } from '@/interface/basket'

export const useBasketStore = defineStore('basket',{
  state: (): BasketState => ({
    shoppingList: []
  }),
  getters: {
    purchaseAmount: (state) => {
      console.log('purchaseAmount');
      
      console.log(state.shoppingList.length, 'length');
      console.log(state.shoppingList, 'shoppingList');
      
      let res = state.shoppingList.reduce((acc, cur) => {
        if (cur.quantity && cur.price) {
          acc += cur.quantity * cur.price;
          return acc
        }
      }, 0) 
      console.log(res, 'res');
      
      return Math.floor(res);
    },
  },
  // actions: {},
})