<template>
    <div class="sm_link dropdown">
        <button type="button" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="~/assets/imgs/icons/saudii.png" v-if="locale == 'ar'" class="flag" alt="saudi flag">
            <img src="~/assets/imgs/icons/england.png" v-if="locale == 'en'" class="flag" alt="saudi flag">
            <span class="lang drop-text">{{ $t('nav.lang') }}</span>
            <i class="pi pi-angle-down drop-ic"></i>
        </button>

        <ul class="dropdown-menu drop-lang left">
            <li>
                <a href="#" class="profile-item" @click="toggleLang('ar')">العربية</a>
            </li>
            <li>
                <a href="#" class="profile-item" @click="toggleLang('en')">English</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
/*************** Plugins **************** */
import { useI18n } from 'vue-i18n';
const { locale } = useI18n({ useScope: 'global' });

/*************** DATA **************** */

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

// getLocal
function getLocal() {
    const localLang = localStorage.getItem("lang");
    if (localLang) {
        locale.value = localLang;
        document.querySelector("html").setAttribute("lang", localLang);
    }
}

// toggleLang
function toggleLang(lang) {
    localStorage.setItem("lang", lang);
    window.location.reload();
}
/*************** Mounted *****************/

// Before Mount
onBeforeMount(() => {
    getLocal();
});

</script>


<style lang="scss" scoped></style>