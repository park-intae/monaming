import { defineStore } from 'pinia';
import { ref } from 'vue';

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
    selectedProductType: '프리미엄 펜',
  }),
  actions: {
    async fetchProducts() {
      try {
        const res = await fetch('/api/products');
        this.products = await res.json();
      } catch (error) {
        console.error('제품 목록 불러오기 실패:', error);
      }
    },

    selectProduct(product) {
      this.selectedProduct = product;
    },

    async fetchAttributes() {
      try {
        const res = await fetch('/api/attributes');
        this.attributes = await res.json();
      } catch (error) {
        console.error('속성 목록 불러오기 실패:', error);
      }
    },

    async fetchProductAttributes(productId) {
      try {
        const res = await fetch(`/api/product-attributes/${productId}`);
        const data = await res.json();

        console.log('✅ 받아온 data:', data);

        if (data.length > 0) {
          this.productAttributes = [];

          for (let i = 0; i < data.length; i++) {
            const item = data[i];
            console.log('➡️ 각각 item:', item);

            this.productAttributes.push({
              attribute: item.attribute_name,
              value: item.value,
            });
          }
        } else {
          this.productAttributes = null;
        }
      } catch (error) {
        console.log('제품 속성 불러오기 실패:', error);
      }
    },

    setSelectedProductType(type) {
      this.selectedProductType = type;
      this.selectedProduct = null;
    },

    clearProduct() {
      this.selectedProduct = null;
      this.productAttributes = null;
    },
  },
});
