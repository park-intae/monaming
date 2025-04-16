<template>
    <div class="sub_contents1">
        <ul class="sub_cate">
            <li v-for="(item, index) in subcate" :key="index">
                <p>{{ item.name }}</p>
            </li>
        </ul>
        <div class="product_list">
            <ul>
                <li v-for="product in paginatedProducts" :key="product.id" @click="selectProduct(product)">
                    <div class="img_wrap">
                        <img :src="`/img/${product.img}`" alt="상품이미지" />
                    </div>
                    <div class="product_info">
                        <p>{{ product.category }}</p>
                        <p>{{ product.name }}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1">&lt;</button>
            <div class="pagination_num">
                <button v-for="page in totalPages" :key="page" @click="goToPage(page)"
                    :class="{ active: currentPage === page }">
                    {{ page }}
                </button>
            </div>
            <button @click="nextPage" :disabled="currentPage === totalPages">&gt;</button>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect, onMounted, computed, watch } from 'vue';
import { useProductStore } from '@/stores/productStore';

const subcate = ref([
    { name: '고급볼펜' },
    { name: '만년필' },
    { name: '고급샤프' },
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

//페이지네이션
const currentPage = ref(1);
const itemsPerPage = 10;

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return productStore.products.slice(start, end);
});

const totalPages = computed(() => {
    return Math.ceil(productStore.products.length / itemsPerPage);
})

const goToPage = (pageNum) => {
    currentPage.value = pageNum;
    console.log(`Go to page ${pageNum}`);
}

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}
const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}
</script>

<style></style>