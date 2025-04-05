<template>
    <div id="sub_contents1">
        <ul id="sub_cate">
            <li v-for="(item, index) in subcate" :key="index">
                <p>{{ item.name }}</p>
            </li>
        </ul>
        <div id="product_list">
            <ul>
                <li v-for="(item, index) in prodcut_list1" :key="index">
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
        <div id="pagination">
            <button>&lt;</button>
            <div id="pagination_num">
                <button v-for="page in totalPages" :key="page">
                    {{ page.page }}
                </button>
            </div>
            <button>&gt;</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Main_product_list',
    data() {
        return {
            subcate: [
                { name: '고급볼펜' },
                { name: '만년필' },
                { name: '고급샤프' },
            ],
            prodcut_list1: [
                {
                    img: 'assets/premium/product1.jpg',
                    cate: '프리미엄 팬',
                    name: '제니스7 데스크펜'
                }
            ],
            // 임시 페이지네이션 페이지 수
            totalPages: [
                { page: 1 },
                { page: 2 },
                { page: 3 },
                { page: 4 },
            ]
            // currentPage: 1,
            // itemsPerPage: 10,
        };
    },
    // 나중에 데이터 가져오면 페이지네이션 파트 수정 해야 됨
    // computed: {
    //     totalPages() {
    //         return Math.ceil(this.items.length / this.itemsPerPage)
    //     },
    //     paginatedItems() {
    //         const start = (this.currentPage - 1) * this.itemsPerPage;
    //         const end = start + this.itemsPerPage;
    //         return this.items.slice(start, end)
    //     }
    // },
    // methods: {
    //     goToPage(page) {
    //         this.currentPage = page;
    //     }, // 페이지 번호 이동
    //     prevPage() {
    //         if (this.currentPage > 1) {
    //             this.currentPage--;
    //         }
    //     },
    //     nextPage() {
    //         if (this.currentPage < this.totalPages) {
    //             this.currentPage++;
    //         }
    //     } // 다음 페이지
    // },
    // mounted() {
    //     this.items = Array.from({ length: 100 }, (_, i) => ({
    //         id: i + 1,
    //         name: `항목 ${i + 1}`,
    //     }));
    // }
    // 페이지네이션을 위한 데이터 생성, 나중에 sql에서 가져올 때는 이 부분을 수정해야 함
}
</script>

<style></style>