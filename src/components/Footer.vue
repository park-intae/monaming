<template>
    <div id="footer">
        <div class="foot" @click="handleOutsideClick">
            <div class="foot_pop"></div>
            <div class="foot_top">
                <h1>
                    <img src="\img\foot_logo.jpg" alt="logo" />
                </h1>
                <ul class="fm">
                    <li v-for="(item, index) in fm" :key="index">
                        <a href="#" @click:prevent="handleClick(type.item)">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="foot_btm">
                <div class="info">
                    <p>INFO</p>
                    <div class="address">
                        <div v-for="(item, index) in info" :key="index">
                            <span>{{ item.name }}</span> : <span>{{ item.contents }}</span>
                        </div>
                    </div>
                    <p>COPYRIGHT(C) MONAMI.CO.,LTD. ALL RIGHTS RESERVED.</p>
                    <!-- 해당 프로젝트는 단순 클론코딩으로 어떠한 수익도 창출할 의도가 없습니다
                     원작 페이지의 저작권을 존중합니다 -->
                </div>
                <div class="CC">
                    <div class="CC_tit">CUSTOMER CENTER</div>
                    <div class="CC_tel">000-000-0000</div>
                    <button class="kakao_btn">카카오톡 문의></button>
                </div>
                <div class="family_site">
                    <div class="dropdown">
                        <div class="tit" @click="handleClick">FAMILY SITE</div>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                    <!-- <ul>
                        <li v-for="(item, index) in familySite" :key="index">
                            <a :href="item.link">{{ item.name }}</a>
                        </li>
                    </ul> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUIStore } from '../stores/uiStore';
import { useModalStore } from '@/stores/modalStore';
import { ref, onMounted, onBeforeMount } from 'vue';

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

// 모달 관련
const uiStore = useUIStore();

function handleClick(item) {
    modalStore.open(item);
}

function handleOutsideClick(e) {
    const modalEle = document.querySelector('.modal');

    if (!modalEle) return;

    if (!modalEle?.contains(e.target)) {
        uiStore.closeAll();
    }
}

</script>

<style>
#footer {
    width: 100%;
    position: relative;
    background-color: #111111;
    padding: 60px 0 65px;
}
</style>