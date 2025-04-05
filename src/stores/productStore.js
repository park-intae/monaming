import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
    state: () => ({
        selectedProduct: null
    }),
    actions: {
        selectProduct(product) {
            this.selectedProduct = product;
        },
        clearProduct() {
            this.selectedProduct = null;
        }
    }
});