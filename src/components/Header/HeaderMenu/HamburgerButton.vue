<template>
    <div class="all_btn" :class="{ open: isOpen }" @click="isOpen = !isOpen">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
