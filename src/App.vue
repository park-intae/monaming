<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useUIStore } from './stores/uiStore';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Main_product from './components/Main/Main_product.vue';

const uiStore = useUIStore();

const handleGlobalClick = (event) => {
    uiStore.closeAll();
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
            시작
            <Main_product />
            끝
        </main>

        <Footer />

        <div id="top_btn"></div>
    </div>
</template>

<style>
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
</style>
