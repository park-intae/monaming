<template>
    <div class="sns">
        <ul>
            <li v-for="(item, index) in sns" :key="index">
                <a :href="item.link" target="_blank">
                    <img :src="item.icon" :alt="item.name" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps(['sns'])
</script>
