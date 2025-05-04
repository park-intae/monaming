<template>
    <div class="sub_contents2">
        <div class="product_view">
            <div class="conwrap">
                <div class="product_info">
                    <div class="bgarea"></div>
                    <div class="numbering">
                        {{ selectedIndex + 1 }} / {{ mergedProduct.thumb?.length || 0 }}
                    </div>
                    <div class="p_gall">
                        <div class="big">
                            <div class="tprev">
                                <img :src="`/img/${bigImage}`" />
                            </div>
                        </div>
                        <div class="small_thumb_wrap">
                            <ul>
                                <li v-for="(item, index) in mergedProduct.thumb" :key="index"
                                    @click="setBigImage(item.url, index)">
                                    <img :src="`/img/${item.url}`" />
                                </li>
                            </ul>
                            <div class="tnext">
                                <div class="p_name">
                                    <div class="pname">
                                        {{ mergedProduct.name }}
                                    </div>
                                    <div class="cate">
                                        {{ mergedProduct.category }}
                                    </div>
                                </div>
                                <div class="info_list">
                                    <div class="key_features">
                                        <div class="tit">KEY FEATURES</div>
                                        <ol v-if="parsedKeyFeatures && parsedKeyFeatures.length">
                                            <ul v-for="(feature, index) in parsedKeyFeatures" :key="index">
                                                {{ feature.text }}
                                            </ul>
                                        </ol>
                                    </div>
                                    <div class="ink_color" v-if="mergedProduct.ink_color?.length">
                                        <div class="tit">INK COLOR</div>
                                        <div class="color_list">
                                            <div class="color_chip" v-for="(color, index) in mergedProduct.ink_color"
                                                :key="index" :style="{ backgroundColor: color.code }">
                                                {{ color.name }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="body_color" v-if="mergedProduct.body_color?.length">
                                        <div class="tit">BODY COLOR</div>
                                        <div class="color_list">
                                            <div class="color_chip" v-for="(color, index) in mergedProduct.body_color"
                                                :key="index" :style="{ backgroundColor: color.code }">
                                                {{ color.name }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="download" v-if="mergedProduct.download?.length">
                                        <div class="tit">DOWNLOAD</div>
                                        <div class="download_btn" v-for="(file, index) in mergedProduct.download"
                                            :key="index" @click="window.open(file.url, '_blank')">
                                            {{ file.name }}
                                        </div>
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
                    <button @click="$emit('go-back')">List</button>
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

const parsedKeyFeatures = computed(() => {
    const features = mergedProduct.value?.key_features;

    if (!features) return [];

    // 문자열 배열인 경우
    if (Array.isArray(features) && typeof features[0] === 'string') {
        return features.map(text => ({ text }));
    }

    // 이미 text가 있는 객체 배열인 경우
    return features;
});

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

</script>

<style></style>