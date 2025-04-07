<template>
    <div v-if="modalStore.isOpen" class="ModalBackground" @click.self="modalStore.close">
        <div class="title"></div>
        <div class="ModalContents">
            <div v-if="Mcontents === 'perInfo'"></div>
            <div v-else-if="Mcontents === 'mailReduc'"></div>
        </div>
        <button class="CloseModal" @click="modalStore.close">닫기</button>
    </div>
</template>

<script setup>
import { useModalStore } from '@/stores/modalStore';

const modalStore = useModalStore();
</script>

<style></style>