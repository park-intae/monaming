import { defineStore } from 'pinia';
// import {useStorage} from '@vueuse/core';

export const useAppStore = defineStore('app', {
    state: () => ({
        currentPage: 'home', // 현재 페이지지
    }),
    actions: {
        setPage(page) {
            this.currentPage = page;
        }
    }
});