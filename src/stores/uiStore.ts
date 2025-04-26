import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUIStore = defineStore('ui', () => {
    const isLangDropdownOpen = ref(false);
    const isModalOpen = ref(false);
    const isFmDropdownOpen = ref(false);

    const toggleFmDropdown = () => {
        console.log('드롭다운 토글 실행됨');
        isFmDropdownOpen.value = !isFmDropdownOpen.value;
    }

    const closeAll = () => {
        isLangDropdownOpen.value = false;
        isModalOpen.value = false;
        isFmDropdownOpen.value = false;
    };

    return {
        isLangDropdownOpen,
        isModalOpen,
        isFmDropdownOpen,
        toggleFmDropdown,
        closeAll,
    };
});
