<template>
    <header>
        <!-- Header -->
        <div class="header_top">
            <div class="container">
                <div class="content">

                    <!-- Right Links -->
                    <div class="sm_links">
                        <NuxtLink to="/beStore" class="sm_link">{{ $t('nav.beStore') }}</NuxtLink>
                        <NuxtLink to="/terms" class="sm_link">{{ $t('nav.terms') }}</NuxtLink>
                        <NuxtLink to="/faqs" class="sm_link">{{ $t('nav.faqs') }}</NuxtLink>
                    </div>

                    <!-- Left Links -->
                    <div class="sm_links">

                        <!-- Profile -->
                        <div class="dropdown">
                            <button type="button" class="dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <img src="~/assets/imgs/profile_img.jpg" alt="" class="profile_img">
                                <span class="drop-text profile">عبدالله زكريا</span>
                                <i class="pi pi-angle-down drop-ic"></i>
                            </button>

                            <ul class="dropdown-menu sm">

                                <li>
                                    <NuxtLink to="/profile" class="profile-item">
                                        <span class="profile-text">{{ $t('nav.dropDown.profile') }}</span>
                                    </NuxtLink>
                                </li>

                                <li>
                                    <NuxtLink to="/orders/products" class="profile-item">
                                        <span class="profile-text">{{ $t('nav.dropDown.orders') }}</span>
                                    </NuxtLink>
                                </li>

                                <li>
                                    <NuxtLink to="/addresses/saved" class="profile-item">
                                        <span class="profile-text">{{ $t('nav.dropDown.addresses') }}</span>
                                    </NuxtLink>
                                </li>

                                <li>
                                    <NuxtLink to="/brands/followed" class="profile-item">
                                        <span class="profile-text">{{ $t('nav.dropDown.brands') }}</span>
                                    </NuxtLink>
                                </li>

                                <li>
                                    <NuxtLink to="/wallet" class="profile-item">
                                        <span class="profile-text">{{ $t('nav.dropDown.wallet') }}</span>
                                    </NuxtLink>
                                </li>

                                <li>
                                    <NuxtLink to="/profile/settings/editProfile" class="profile-item">
                                        <span class="profile-text">{{ $t('nav.dropDown.settings') }}</span>
                                    </NuxtLink>
                                </li>

                                <li>
                                    <button class="btn btn-red logout" @click="logout">{{ $t('nav.dropDown.logout')
                                        }}</button>
                                </li>

                            </ul>
                        </div>

                        <NuxtLink to="/Auth/login" class="sm_link sec">
                            <i class="pi pi-user ic"></i>
                            <span class="drop-text">{{ $t('nav.login') }}</span>
                        </NuxtLink>

                        <NuxtLink to="/notifications" class="sm_link sec">
                            <i class="pi pi-bell ic bell"></i>
                            <span class="drop-text">{{ $t('nav.notifications') }}</span>
                        </NuxtLink>

                        <!-- Language -->
                        <SharedChangeLangDropdown />

                    </div>

                </div>
            </div>
        </div>

        <!-- Page Navbar -->
        <nav class="page-navbar">
            <div class="container">

                <div class="navbar-content">
                    <NuxtLink to="/" class="logo">
                        <img src="~/assets/imgs/logo.png" class="logo-img" alt="logo" />
                    </NuxtLink>

                    <div class="links" :class="{ active: active }">
                        <NuxtLink to="/" class="logo">
                            <img src="~/assets/imgs/logo.png" alt="logo" />
                        </NuxtLink>
                        <NuxtLink to="/" class="link">{{ $t('nav.home') }}</NuxtLink>
                        <NuxtLink to="/brands" class="link">{{ $t('nav.brands') }}</NuxtLink>
                        <NuxtLink to="/RecentlyArrived" class="link">{{ $t('nav.arrived') }}</NuxtLink>
                        <NuxtLink to="/specialOrder" class="link">{{ $t('nav.specialOrder') }}</NuxtLink>
                        <NuxtLink to="/aboutUs" class="link">{{ $t('nav.about') }}</NuxtLink>
                        <NuxtLink to="/contactUs" class="link">{{ $t('nav.contact') }}</NuxtLink>
                    </div>

                    <div class="sm_links lg">
                        <NuxtLink to="/favorites" class="sm_link">
                            <span class="count_con">
                                <i class="pi pi-heart ic"></i>
                                <span class='count'>0</span>
                            </span>
                        </NuxtLink>

                        <NuxtLink to="/cart" class="sm_link gap-2">
                            <span class="count_con">
                                <i class="pi pi-shopping-cart ic"></i>
                                <span class='count'>2</span>
                            </span>
                            <span class="cart_con drop-text">
                                <span class="fs13 c-dark">{{ $t('nav.cart') }}</span>
                                <span class="c-secondary fs12">28.000 رس</span>
                            </span>
                        </NuxtLink>

                        <div class="sm-btn side-open transparent flex-shrink-0" @click="activeFun">
                            <i class="pi pi-bars"></i>
                        </div>
                    </div>
                </div>

            </div>
        </nav>

        <div class="nav-overlay" :class="{ active: active }" @click="activeFun"></div>
    </header>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

// active
const active = ref(false);

// route
const route = useRoute();

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

// activeFun
const activeFun = () => {
    active.value = !active.value;
};

/*************** Watch **************** */

// watch route
watch(() => route.path, () => {
    active.value = false;
});

/*************** Mounted *****************/

</script>

<style lang="scss" scoped>
@import "@/assets/css/sass/_navbar.scss";
</style>