import { Basic } from 'unsplash-js/dist/methods/photos/types';

export interface ModBasic extends Basic {
  price?: number;
  quantity?: number;
}

export interface ProductState {
  productList?: ModBasic[];
  totalPage?: number;
  loading: boolean;
}

export interface ParamsRequest {
  query: string;
  page: number;
  perPage: number;
  totalPage: number;
}
