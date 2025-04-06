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
                        <img :src=item.img />
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
                <button v-for="page in totalPages" :key="page">
                    {{ page.page }}
                </button>
            </div>
            <button>&gt;</button>
        </div>
    </div>
</template>

<script>
import { useProductStore } from '@/stores/productStore';

export default {
    name: 'Main_product_list',
    setup() {
        const productStore = useProductStore();
        const selectProduct = (product) => {
            productStore.selectProduct(product);
        }
        const subcate = [
            { name: '고급볼펜' },
            { name: '만년필' },
            { name: '고급샤프' },
        ];
        const product_list1 = [
            {
                img: 'assets/premium/product1.jpg',
                cate: '프리미엄 팬',
                name: '제니스7 데스크펜'
            }
        ];
        const totalPages = [
            { page: 1 },
            { page: 2 },
            { page: 3 },
            { page: 4 },
        ];

        return {
            subcate,
            product_list1,
            totalPages,
            selectProduct
        };
    }
};

</script>

<style></style>