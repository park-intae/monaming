<template>
    <div class="topMenu">
        <ul>
            <li v-for="(item, index) in topMenu" :key="index">
                <a :href="item.link">{{ item.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps(['topMenu'])
</script>
