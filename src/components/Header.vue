<template>
    <div id="header">
        <div class="header_top">
            <div class="conwrap">
                <div class="links">
                    <div class="langs">
                        <div class="dropdown">
                            <div class="dropdown-btn" @click="toggleDropdown()">
                                <a>
                                    {{ selectedLang.name }}
                                </a>
                            </div>
                            <div class="dropdown-content" :class="{ on: isDropdownOpen }">
                                <div v-for="(lang, index) in langs" :key="index" class="dropdown-item">
                                    <a href="#">
                                        {{ lang.name }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sns">
                        <ul>
                            <li v-for="(item, index) in sns" :key="index">
                                <a :href="item.link" target="_blank" rel="noopener noreferrer">
                                    <img :src="item.icon" :alt="item.name" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="topMenu">
                    <ul>
                        <li v-for="(item, index) in topMenu" :key="index">
                            <a :href="item.link">{{ item.name }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="header_menu">
            <div class="gnb">
                <div class="conwrap">
                    <h1 class="logo">
                        <a href="#">
                            <img src="\img\logo.jpg">
                        </a>
                    </h1>
                    <div class="nav">
                        <ul class="dropdown">
                            <li class="menuEle" v-for="(item, index) in mainMenu" :key="index"
                                @mouseenter="hoverIndex = index" @mouseleave="hoverIndex = null">
                                <a :href="item.link">{{ item.name }}</a>
                                <ul class="dropdown-content" v-if="isDropdownVisible.value">
                                    <li v-for="(subItem, subIndex) in item.subMenu" :key="subIndex">
                                        <template v-if="item.subMenu && item.subMenu.length > 0">
                                            <div class="submenu-group">
                                                <div class="submenu-title">{{ item.name }}</div>
                                                <ul>
                                                    <li v-for="(subItem, j) in item.subMenu" :key="j">
                                                        <a :href="subItem.link">{{ subItem.name }}</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </template>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="toolbar">
                        <div class="all_btn" :class="{ open: isOpen }" @click="isOpen = !isOpen">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div class="search">
                            <a>
                                <img src="\img\btn_search.gif" alt="search" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    langs: {
        type: Array,
        default: () => [
            { emoji: '🇰🇷', name: 'KOR' },
            { emoji: '🇺🇸', name: 'ENG' },
        ],
    }
})
// mainMenu
const mainMenu = ref([
    {
        name: '모나미소개',
        link: '#',
        subMenu: [
            { name: "CEO 메세지", link: '#' },
            { name: "회사정보", link: '#' },
            { name: "회사연혁", link: '#' },
            { name: "윤리강령", link: '#' },
            { name: "투자정보", link: '#' },
            { name: "CI", link: '#' },
            { name: "찾아오시는 길", link: '#' },
            { name: "안전보건 경영방침", link: '#' },
        ]
    },
    {
        name: '모나미제품',
        link: '#',
        subMenu: [
            { name: "프리미엄 펜", link: '#' },
            { name: "펜·펜슬", link: '#' },
            { name: "마카·컬러링", link: '#' },
            { name: "노트·사무용품", link: '#' },
            { name: "잉크·리필", link: '#' },
            { name: "카탈로그", link: '#' },
        ]
    },
    {
        name: 'NEWS & VIDEO',
        link: '#',
        subMenu: [
            { name: "보도자료", link: '#' },
            { name: "동영상자료", link: '#' },
        ]
    },
    {
        name: '모나미 미술대회',
        link: '#',
        subMenu: [
            { name: "미술대회 소개", link: '#' },
            { name: "수상작 발표", link: '#' },
        ]
    },
    {
        name: '고객지원',
        link: '#',
        subMenu: [
            { name: "자주묻는질문", link: '#' },
            { name: "문의하기", link: '#' },
        ]
    },
    {
        name: '기업 구매 / 개발',
        link: '#',
        subMenu: [
            { name: "대량 구매 문의", link: '#' },
            { name: "기업 및 단체 구매", link: '#' },
            { name: "산업용 맞춤 개발발", link: '#' },
        ]
    },
]);
//lang
const selectedLang = ref({ //기본 언어
    name: 'KOR'
});
const langs = ref([
    { name: 'ENG' },
]);
// sns
const sns = ref([
    { name: 'Facebook', icon: '/img/sns_facebook.gif', link: '#' },
    { name: 'Instagram', icon: '/img/sns_insta.gif', link: '#' },
    { name: 'YouTube', icon: '/img/sns_youtube.png', link: '#' }
]);
// topMenu
const topMenu = ref([
    { name: 'HOME', link: '#' },
    { name: 'SITE MAP', link: '#' },
    { name: 'CONTACT US', link: '#' },
]);
// dropdown
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
    console.log(isDropdownOpen)
    isDropdownOpen.value = !isDropdownOpen.value;
    console.log(isDropdownOpen)
};
// all_btn hamburger
const isOpen = ref(false);
// hover
const isDropdownVisible = ref(false);
</script>

<style>
.logo {
    float: none;
    width: 162px;
    position: absolute;
    left: 0;
    top: 0;
}

/* dropdown */
.dropdown-content.on {
    display: block;
}

.dropdown-icon {
    width: 13px;
    height: auto;
}

.dropdown-btn {
    padding-left: 15px;
    background: url(/img/lang_kor.gif) no-repeat 10px center;
}

.dropdown-btn a {
    display: block;
    width: 38px;
    padding-left: 15px;
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    color: #000;
    background: url(/img/lang_arr.gif) no-repeat right center;
}

.display-non {
    display: none;
}
</style>