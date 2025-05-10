import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
  state: () => ({
    isOpen: false,
    contentType: '',
  }),
  actions: {
    open(type) {
      this.contentType = type;
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
      this.contentType = '';
    },
  },
});
