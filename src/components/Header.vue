<template>
    <div id="header_top">
        <div id="conwrap">
            <div id="links">
                <div id="langs">
                    <select v-model="selectedLang">
                        <option v-for="(lang, index) in langs" :key="index" :value="lang.name">
                            {{ lang.emoji }} {{ lang.name }}
                        </option>
                    </select>
                </div>
                <div id="sns">
                    <ul>
                        <li v-for="(item, index) in sns" :key="index">
                            <a :href="item.link" target="_blank" rel="noopener noreferrer">
                                <img :src="item.icon" :alt="item.name" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="topMenu">
                <ul>
                    <li v-for="(item, index) in topMenu" :key="index">
                        <a :href="item.link">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div id="header_menu"></div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            sns: [
                { name: 'Facebook', icon: '@/assets/sns_facebook.gif', link: '#' },
                { name: 'instagram', icon: '@/assets/sns_insta.gif', link: '#' },
                { name: 'youtube', icon: '@/assets/sns_youtube.png', link: '#' }
            ],
            topMenu: [
                { name: 'HOME', link: '#' },
                { name: 'SITE MAP', link: '#' },
                { name: 'CONTACT US', link: '#' },
            ],
        }
    },
    props: {
        langs: {
            type: Array,
            default: () => [
                { emoji: 'kr', name: '한국어' },
                { emoji: 'en', name: 'English' },
            ],
        },
    }
}
</script>

<style></style>