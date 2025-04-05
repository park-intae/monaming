<template>
    <div id="sub_contents2">
        <div id="product_view">
            <div class="conwrap">
                <div id="product_info">
                    <div id="bgarea"></div>
                    <div id="numbering">
                        <!-- 나중에 sql로 파일 첨부할 때 subcate에서의 index -->
                    </div>
                    <div id="p_gall">
                        <div id="big"></div>
                        <div id="small_thumb_wrap">
                            <div id="tprev"></div>
                            <ul>
                                <li v-for="(item, index) in thumb" :key="index">
                                    <img :src=item.img />
                                </li>
                            </ul>
                            <div id="tnext"></div>
                        </div>
                    </div>
                    <div id="p_info"></div>
                </div>
                <div id="view_btn"></div>
            </div>
        </div>
    </div>
</template>

<script>
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
    }
}
</script>

<style></style>