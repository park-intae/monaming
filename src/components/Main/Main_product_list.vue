<template>
    <div class="sub_contents1">
        <ul class="sub_cate">
            <li v-for="(item, index) in subcate" :key="index">
                <p>{{ item.name }}</p>
            </li>
        </ul>
        <div class="product_list">
            <ul>
                <li v-for="product in products" :key="product.id" @click="selectProduct(product)">
                    <div class="img_wrap">
                        <img :src="product.img" alt="상품이미지" />
                    </div>
                    <div class="product_info">
                        <p>{{ product.category }}</p>
                        <p>{{ product.name }}</p>
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
import { ref, watchEffect, onMounted } from 'vue';
import { useProductStore } from '@/stores/productStore';

const subcate = ref([
    { name: '고급볼펜' },
    { name: '만년필' },
    { name: '고급샤프' },
]);
const totalPages = ref([
    { page: 1 },
    { page: 2 },
    { page: 3 },
    { page: 4 },
]);

const productStore = useProductStore();
const products = ref([]);

const emit = defineEmits(['selectProduct']);

watchEffect(() => {
    products.value = productStore.products;
});

onMounted(async () => {
    if (productStore.products.length === 0) {
        await productStore.fetchProducts();
    }
})

const selectProduct = async (product) => {
    productStore.selectProduct(product);
    await productStore.fetchProductAttributes(product.id);
    emit('selectProduct', product);
}

const goToPage = (pageNum) => {
    console.log(`Go to page ${pageNum}`);
    // 페이지 이동 로직 추가 필요
}
</script>

<style></style>