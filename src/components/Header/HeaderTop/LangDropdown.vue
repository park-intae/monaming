<template>
    <div class="langs" :class="{ on: isDropdownOpen }">
        <div class="this_lang" @click="toggleDropdown">
            <a>{{ selectedLang.name }}</a>
        </div>
        <ul v-show="isDropdownOpen" class="dropdown-list">
            <li v-for="(lang, index) in langs" :key="index">
                <a href="#">{{ lang.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    langs: {
        type: Array,
        default: () => [
            { emoji: '🇰🇷', name: 'KOR' },
            { emoji: '🇺🇸', name: 'ENG' },
        ],
    }
})

const selectedLang = ref({ name: 'KOR' })
const isDropdownOpen = ref(false)
const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value
}
const selectLang = (lang) => {
    selectedLang.value = lang
    isDropdownOpen.value = false
}
</script>

<style>
.langs {
    position: relative;
}

.dropdown-list {
    position: absolute;
    background: white;
    top: 100%;
    left: 0;
    z-index: 9000;
}
</style>
