import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [],
        selectedProduct: null,
        productAttributes: null,
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

        async fetchProductAttributes(productId) {
            try {
                const res = await fetch(`/api/product-attributes/${productId}`);
                this.productAttributes = await res.json();
            } catch (error) {
                console.log('제품 속성 불러오기 실패:', error);
            }
        },

        clearProduct() {
            this.selectedProduct = null;
            this.productAttributes = null;
        }
    }
});