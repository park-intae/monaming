<template>
    <div class="links">
        <LanguageDropdown :langs="langs" />
        <SnsLinks :sns="sns" />
    </div>
    <TopMenu :topMenu="topMenu" />
</template>

<script setup>
import LanguageDropdown from './HeaderTop/LangDropdown.vue'
import SnsLinks from './HeaderTop/SnsLink.vue'
import TopMenu from './HeaderTop/TopMenu.vue'

defineProps(['langs', 'sns', 'topMenu'])
</script>
