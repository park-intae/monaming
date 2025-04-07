<template>
    <div id="header_top">
        <div id="conwrap">
            <div id="links">
                <div id="langs">
                    <select v-model="selectedLang">
                        <option v-for="(lang, index) in langs" :key="index" :value="lang.name">
                            {{ lang.emoji }} {{ lang.name }}
                        </option>
                    </select>
                </div>
                <div id="sns">
                    <ul>
                        <li v-for="(item, index) in sns" :key="index">
                            <a :href="item.link" target="_blank" rel="noopener noreferrer">
                                <img :src="item.icon" :alt="item.name" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="topMenu">
                <ul>
                    <li v-for="(item, index) in topMenu" :key="index">
                        <a :href="item.link">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div id="header_menu">
        <nav>
            <div id="logo"></div>
            <div id="menu">
                <ul>
                    <li v-for="(item, index) in mainMenu" :key="index">
                        <a :href="item.link">{{ item.name }}</a>
                        <ul v-if="item.subMenu && item.subMenu.length > 0">
                            <li v-for="(subItem, subIndex) in item.subMenu" :key="subIndex">
                                <a :href="subItem.link">{{ subItem.name }}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div id="toolbar">
                <div id="search">
                    <input type="text" />
                    <a>
                        <img src="..\assets\btn_search.gif" alt="search" />
                    </a>
                </div>
                <div id="all_btn">
                    <div class="all_btn_ele"></div>
                    <div class="all_btn_ele"></div>
                    <div class="all_btn_ele"></div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import youtubeIcon from '@/assets/sns_youtube.png';
import facebookIcon from '@/assets/sns_facebook.gif';
import instaIcon from '@/assets/sns_insta.gif';

const props = defineProps({
    langs: {
        type: Array,
        default: () => [
            { emoji: '🇰🇷', name: '한국어' },
            { emoji: '🇺🇸', name: 'English' },
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
const selectedLang = ref('한국어'); // 언어 기본값
const langs = ref([
    { emoji: '🇰🇷', name: '한국어' },
    { emoji: '🇺🇸', name: 'English' },
]);
// sns
const sns = ref([
    { name: 'Facebook', icon: facebookIcon, link: '#' },
    { name: 'Instagram', icon: instaIcon, link: '#' },
    { name: 'YouTube', icon: youtubeIcon, link: '#' }
]);
// topMenu
const topMenu = ref([
    { name: 'HOME', link: '#' },
    { name: 'SITE MAP', link: '#' },
    { name: 'CONTACT US', link: '#' },
]);

</script>

<style></style>