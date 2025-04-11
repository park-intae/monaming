import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [],
        selectedProduct: null
    }),
    actions: {
        async fetchProducts() {
            try {
                const res = await fetch('/api/products');
                this.products = await res.json();
            } catch (error) {
                console.error('제품 목록 불러오기 실패:', error)
            }
        },
        selectProduct(product) {
            this.selectedProduct = product;
        },
        clearProduct() {
            this.selectedProduct = null;
        }
    }
});