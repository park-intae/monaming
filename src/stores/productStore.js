import { defineStore } from 'pinia';

function parseJSON(value) {
    if (!value) return [];
    try {
        return typeof value === 'string' ? JSON.parse(value) : value;
    } catch (e) {
        console.error('JSON 파싱 실패:', e);
        return [];
    }
}

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
                const data = await res.json();

                if (data.length > 0) {
                    // const parsed = data[0];
                    // this.productAttributes = parsed.value;

                    this.productAttributes = [];

                    for (let i = 0; i < data.length; i++) {
                        const item = data[i];
                        this.productAttributes.push({
                            attribute: item.attribute_name,
                            value: item.value
                        });
                    }

                    console.log('📦 productAttributes:', this.productAttributes);
                } else {
                    this.productAttributes = null;
                }
            } catch (error) {
                console.log('제품 속성 불러오기 실패:', error);
            }
        },

        clearProduct() {
            this.selectedProduct = null;
            this.productAttributes = null;
        },
    }
});