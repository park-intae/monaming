<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Main_product from './components/Main/Main_product.vue';
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

<style scoped></style>
