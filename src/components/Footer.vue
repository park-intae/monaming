<template>
    <div id="foot">
        <div id="foot_pop"></div>
        <div id="foot_top">
            <h1>
                <img src="..\assets\foot_logo.jpg" alt="logo" />
            </h1>
            <ul id="fm">
                <li v-for="(item, index) in fm" :key="index">
                    <a href="#" @click:prevent="handleClick(type.item)">{{ item.name }}</a>
                </li>
            </ul>
        </div>
        <div id="foot_btm">
            <div id="info">
                <p>INFO</p>
                <div id="address">
                    <div v-for="(item, index) in info" :key="index">
                        <span>{{ item.name }}</span> : <span>{{ item.contents }}</span> |
                    </div>
                    <p>COPYRIGHT(C) MONAMI.CO.,LTD. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
            <div id="CC">
                <div id="CC_tit"></div>
                <div id="CC_tel"></div>
                <button id="kakao_btn">카카오톡 문의></button>
            </div>
            <div id="family_site">
                <ul>
                    <li v-for="(item, index) in familySite" :key="index">
                        <a :href="item.link">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useModalStore } from '@/stores/modalStore';
import { ref } from 'vue';

const modalStore = useModalStore();

const fm = [
    { name: '회사소개', link: '#' },
    { name: '개인정보처리방침', link: '#', type: 'preInfo' },
    { name: '이메일무단수집거부', link: '#', type: 'mailReduc' },
];
const info = [
    { name: 'ADDRESS', contents: '경기도 용인시 수지구 손곡로 17' },
    { name: 'TEL', contents: '031-216-0153' },
    { name: 'FAX', contents: '031-270-5154' }
];
const familySite = [
    { name: '모나미몰', link: '#' },
    { name: '모나르떼', link: '#' },
    { name: '모나미 컨셉스토어', link: '#' },
    { name: '주식회사 항소', link: '#' },
    { name: '모나미 미술대회', link: '#' },
    { name: '모나미 기업서비스', link: '#' },
    { name: '모나미코스메틱', link: '#' },
];

function handleClick(item) {
    modalStore.open(type);
}

</script>

<style></style>