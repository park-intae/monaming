import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUIStore = defineStore('ui', () => {
    const isLangDropdownOpen = ref(false);
    const isModalOpen = ref(false);

    const closeAll = () => {
        isLangDropdownOpen.value = false;
        isModalOpen.value = false;
    };

    return {
        isLangDropdownOpen,
        isModalOpen,
        closeAll,
    };
});
