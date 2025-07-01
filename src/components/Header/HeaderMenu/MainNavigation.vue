<template>
    <div class="nav">
        <ul class="dropdown" @mouseenter="isAllDropdownVisible = true" @mouseleave="isAllDropdownVisible = false">
            <li class="menuEle" v-for="(item, index) in mainMenu" :key="index" :class="{ on: hoveredIndex === index }"
                @mouseenter="hoveredIndex = index" @mouseleave="hoveredIndex = null">
                <a :href="item.link">{{ item.name }}</a>
                <div class="dropdown-content" v-show="isAllDropdownVisible">
                    <ul>
                        <li v-for="(subItem, subIndex) in item.subMenu" :key="subIndex"
                            :class="{ on: hoveredSubIndex === subIndex && hoveredIndex === index }"
                            @mouseenter="hoveredSubIndex = subIndex" @mouseleave="hoveredSubIndex = null">
                            <a :href="subItem.link">{{ subItem.name }}</a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps(['mainMenu'])

const isAllDropdownVisible = ref(false)
const hoveredIndex = ref(null)
const hoveredSubIndex = ref(null)
</script>
