<template>
  <div class="container">
    <div id="page-tit">
      <h2>모나미제품</h2>
      <p>모나미는 당신의 행복한 기록과 늘 함께합니다</p>
    </div>
    <div id="pagetaps">
      <div id="product_type">
        <ul>
          <li v-for="(item, index) in productType" :key="index">
            <a href="#">{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <div id="title">
        <span>PRODUCT</span>
        <span>INFO</span>
      </div>
      <div id="contents">
        <Main_product_list v-if="!productStore.selectedProduct" />
        <Main_product_detail v-else :product="productStore.selectedProduct" @go-back="productStore.clearProduct" />
      </div>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '@/stores/productStore.js';
import Main_product_list from './Main_product_list.vue';
import Main_product_detail from './Main_product_detail.vue';

export default {
  name: 'Main_product',
  components: {
    Main_product_list,
    Main_product_detail
  },
  setup() {
    const productStore = useProductStore();
    return {
      productStore,
    };
  },
  data() {
    return {
      productType: [
        { name: '프리미엄 펜' },
        { name: '펜·펜슬' },
        { name: '마카·컬러링' },
        { name: '노트·사무용품' },
        { name: '잉크·리필' },
        { name: '카탈로그' },
      ],
    };
  },
}
</script>

<style></style>