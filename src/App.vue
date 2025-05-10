<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useUIStore } from './stores/uiStore';
import { useModalStore } from './stores/modalStore';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import body_product from './components/Main/body_product.vue';

const uiStore = useUIStore();
const modalStore = useModalStore();

const handleGlobalClick = (event) => {
    uiStore.closeAll();
};

const closeModal = () => {
    modalStore.close();
};

onMounted(() => {
    document.addEventListener('click', handleGlobalClick);
});

onUnmounted(() => {
    document.removeEventListener('click', handleGlobalClick);
});

</script>

<template>
    <div>
        <Header />
        <main>
            <body_product />
        </main>
        <Footer />
        <div class="top_btn">
            <a>
                <img src="/img/btn_top.gif" alt="맨위로" />
            </a>
        </div>
        <div id="bgblack" :style="{ display: modalStore.isOpen ? 'block' : 'none' }" @click="closeModal"></div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

body,
h1,
h2,
h3,
h4,
h5,
h6,
th,
td,
input,
textarea,
select,
option {
    color: #555;
    font-family: "Noto Sans KR", "돋움", dotum, sans-serif;
    font-size: 13.5px;
    font-weight: normal;
}

img,
input,
select,
textarea {
    vertical-align: middle;
}

.top_btn {
    position: fixed;
    right: 3%;
    bottom: 30%;
    z-index: 10000;
    border: 2px solid #c40f39;
}

#bgblack {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 3100;
}
</style>
