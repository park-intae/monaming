<template>
    <h1 class="logo">
        <a href="#"><img src="/img/logo.jpg" /></a>
    </h1>
    <MainNavigation :mainMenu="mainMenu" />
    <div class="toolbar">
        <HamburgerButton />
        <SearchButton />
    </div>
</template>

<script setup>
import MainNavigation from './HeaderMenu/MainNavigation.vue'
import HamburgerButton from './HeaderMenu/HamburgerButton.vue'
import SearchButton from './HeaderMenu/SearchButton.vue'

defineProps(['mainMenu'])
</script>
