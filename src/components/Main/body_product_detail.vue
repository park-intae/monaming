<template>
    <div class="sub_contents2">
        <div class="product_view">
            <div class="conwrap">
                <div class="product_info">
                    <div class="bgarea"></div> <!-- p_info_list 배경용 div-->
                    <div class="numbering">
                        <span>{{ (selectedIndex + 1).toString().padStart(2, '0') }}</span>
                        /
                        <span>{{ (mergedProduct.thumb?.length || 0).toString().padStart(2, '0') }}</span>
                    </div>
                    <div class="products">
                        <div class="p_gall">
                            <div class="big">
                                <div class="tprev">
                                    <img :src="`/img/${bigImage}`" />
                                </div>
                            </div>
                            <div class="thumb">
                                <div class="tprev">
                                    <img src="/img/tprev.gif" />
                                </div>
                                <div class="tnext">
                                    <img src="/img/tnext.gif" />
                                </div>
                                <div class="small_thumb_wrap">
                                    <ul>
                                        <li v-for="(item, index) in mergedProduct.thumb" :key="index"
                                            @click="setBigImage(item.url, index)">
                                            <img :src="`/img/${item.url}`" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="p_info">
                            <div class="p_name">
                                <div class="pname">
                                    {{ mergedProduct.name }}
                                </div>
                                <div class="cate">
                                    {{ mergedProduct.category }}
                                </div>
                            </div>
                            <div class="info_list">
                                <div class="key_features" v-if="mergedProduct.key_features?.length">
                                    <div class="tit">KEY FEATURES</div>
                                    <ol>
                                        <ul v-for="(feature, index) in mergedProduct.key_features" :key="index">
                                            -{{ feature.text }}
                                        </ul>
                                    </ol>
                                </div>
                                <div class="ink_color" v-if="mergedProduct.ink_color?.length">
                                    <div class="tit">INK COLOR</div>
                                    <div class="color_list">
                                        <div class="color_chip" v-for="(color, index) in mergedProduct.ink_color"
                                            :key="index"
                                            :style="{ backgroundColor: color.code, width: '43px', height: '42px' }">
                                            {{ color.name }}
                                        </div>
                                    </div>
                                </div>
                                <div class="body_color" v-if="mergedProduct.body_color?.length">
                                    <div class="tit">BODY COLOR</div>
                                    <div class="color_list">
                                        <div class="color_chip" v-for="(color, index) in mergedProduct.body_color"
                                            :key="index"
                                            :style="{ backgroundColor: color.code, width: '43px', height: '42px' }">
                                            {{ color.name }}
                                        </div>
                                    </div>
                                </div>
                                <div class="point_size" v-if="mergedProduct.point_size?.length">
                                    <div class="tit">POINT SIZE</div>
                                    <p>{{ mergedProduct.point_size }}</p>
                                </div>
                                <div class="download" v-if="mergedProduct.download?.length">
                                    <div class="tit">DOWNLOAD</div>
                                    <div class="download_list">
                                        <div class="download_btn" v-for="(file, index) in mergedProduct.download"
                                            :key="index" @click="handleDownload(file)">
                                            <img :src="`/img/down_type${index + 1}.gif`" />
                                            {{ file.name }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="btn_buy">
                                <a href="https://brand.naver.com/monami/products/10763169038" target="_blank">
                                    <img src="/img/btn_buy.gif" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="view_btns">
                    <a @click="$emit('go-back')">List</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useProductStore } from '@/stores/productStore';


const props = defineProps({
    product: Object,
    onGoBack: Function
});

const store = useProductStore();
const attributes = computed(() => store.productAttributes);

onMounted(() => {
    if (props.product) {
        store.fetchProductAttributes(props.product.id);
    }
});

const mergedProduct = computed(() => {
    const attrArray = attributes.value;

    const attrObject = Array.isArray(attrArray)
        ? attrArray.reduce((acc, item) => ({ ...acc, ...item.value }), {})
        : {};

    return {
        ...props.product,
        ...attrObject
    };
});

// numbering

const thumb = computed(() => attributes.value?.thumb || []);

// 대표 이미지

const bigImage = ref(''); // 대표 이미지 상태
const selectedIndex = ref(0);

watch(
    () => mergedProduct.value?.thumb,
    (thumbs) => {
        if (thumbs?.length) {
            bigImage.value = thumbs[0].url;
            selectedIndex.value = 0;
        }
    },
    { immediate: true }
); //초기 대표이미지 설정

const setBigImage = (url, index) => {
    bigImage.value = url;
    selectedIndex.value = index;
};

// 다운로드
function handleDownload(file) {
    if (!file || !file.url) {
        console.error('file이나 url이 유효하지 않습니다:', file);
        return;
    }

    console.log(file.url);
    window.open(file.url, '_blank');
}
</script>

<style></style>