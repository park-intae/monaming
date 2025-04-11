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
                                            <li v-for="(feature, index) in product.key_features" :key="index">
                                                {{ feature.text }}
                                            </li>
                                        </ol>
                                    </div>
                                    <div class="ink_color" v-if="product.ink_color">
                                        <div class="tit">INK COLOR</div>
                                        <div class="color_list">
                                            <div class="color_chip" v-for="(color, index) in product.ink_color"
                                                :key="index" :style="{ backgroundColor: color.code }">
                                                {{ color.name }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="body_color" v-if="product.body_color">
                                        <div class="tit">BODY COLOR</div>
                                        <div class="color_list">
                                            <div class="color_chip" v-for="(color, index) in product.body_color"
                                                :key="index" :style="{ backgroundColor: color.code }">
                                                {{ color.name }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="download" v-if="product.download && product.download.length">
                                        <div class="tit">DOWNLOAD</div>
                                        <div class="download_btn" v-for="(file, index) in product.download" :key="index"
                                            @click="window.open(file.url, '_blank')">
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
                    <button @click="goBack">List</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['product'])

const goBack = () => {
    history.back();
}
</script>

<style></style>