<template>
    <div class="sub_contents2">
        <div class="product_view">
            <div class="conwrap">
                <div class="product_info">
                    <div class="bgarea"></div>
                    <div class="numbering">
                        <!-- 나중에 sql로 파일 첨부할 때 subcate에서의 index -->
                    </div>
                    <div class="p_gall">
                        <div class="big"></div>
                        <div class="small_thumb_wrap">
                            <div class="tprev"></div>
                            <ul>
                                <li v-for="(item, index) in thumb" :key="index">
                                    <img :src=item.img />
                                </li>
                            </ul>
                            <div class="tnext">
                                <div class="p_name">
                                    <div class="pname"></div>
                                    <div class="cate"></div>
                                </div>
                                <div class="info_list">
                                    <div class="key_features">
                                        <div class="tit">KEY FEATURES</div>
                                        <ol>
                                            <li></li>
                                        </ol>
                                    </div>
                                    <div class="ink_color">
                                        <div class="tit"></div>
                                        <div class="color_list"></div>
                                    </div>
                                    <div class="body_color">
                                        <div class="tit"></div>
                                        <div class="color_list"></div>
                                    </div>
                                    <div class="download">
                                        <button class="제품상세"></button>
                                        <button class="이미지"></button>
                                    </div>
                                </div>
                                <button class="btn_buy">BUY NOW</button>
                            </div>
                        </div>
                    </div>
                    <div class="p_info">
                        <div></div>
                    </div>
                </div>
                <div class="view_btn">
                    <button @click="goBack">List</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useProductStore } from '@/stores/productStore';

export default {
    name: 'Main_product_detail',
    data() {
        return {
            thumb: [
                { img: 'assets/premium/product1.jpg' },
                { img: 'assets/premium/product2.jpg' },
                { img: 'assets/premium/product3.jpg' },
                { img: 'assets/premium/product4.jpg' },
            ],
        };
    },
    methods: {
        goBack() {
            const productStore = useProductStore();
            productStore.clearProduct();
        }
    }
}
</script>

<style></style>