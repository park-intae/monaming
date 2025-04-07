<template>
    <div class="sub_contents1">
        <ul class="sub_cate">
            <li v-for="(item, index) in subcate" :key="index">
                <p>{{ item.name }}</p>
            </li>
        </ul>
        <div class="product_list">
            <ul>
                <li v-for="(item, index) in product_list1" :key="index" @click="selectProduct(item)">
                    <div class="img_wrap">
                        <img :src="item.img" />
                    </div>
                    <div class="product_info">
                        <p>{{ item.cate }}</p>
                        <p>{{ item.name }}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="pagination">
            <button>&lt;</button>
            <div class="pagination_num">
                <button v-for="page in totalPages" :key="page.page" @click="goToPage(page.page)">
                    {{ page.page }}
                </button>
            </div>
            <button>&gt;</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useProductStore } from '@/stores/productStore';

const subcate = ref([
    { name: '고급볼펜' },
    { name: '만년필' },
    { name: '고급샤프' },
]);
const product_list1 = ref([
    {
        img: '..\assets\premium\product1.jpg',
        cate: '프리미엄 팬',
        name: '제니스7 데스크펜'
    }
]);
const totalPages = ref([
    { page: 1 },
    { page: 2 },
    { page: 3 },
    { page: 4 },
]);

const productStore = useProductStore();
const selectProduct = (product) => {
    productStore.selectProduct(product);
}

const goToPage = (pageNum) => {
    console.log(`Go to page ${pageNum}`);
    // 페이지 이동 로직 추가 필요
}
</script>

<style></style>