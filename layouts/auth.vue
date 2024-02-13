<template>
    <section class="login-sec">
        <div class="row gx-0 flex-lg-row flex-column-reverse">

            <!-- Right Section -->
            <div class="col-lg-4">
                <div class="left-sec">
                    <img src="@/assets/imgs/logo_white.png" alt="" class="login-img">

                    <p class="copy_auth">
                        <span>جميع الحقوق محفوظة لKitchenkey 2023</span> 
                        <span>تصميم وبرمجة شركة أوامر الشبكة</span>
                    </p>
                </div>
            </div>

            <!-- Left Section -->
            <div class="col-lg-8">
                <div class="right-sec">

                    <!-- Links -->
                    <div class="sm_links home-link">

                        <NuxtLink to="/" class="sm_link sec">
                            <i class="pi pi-home ic"></i>
                            <span class="drop-text">الرئيسية</span>
                        </NuxtLink>

                        <!-- Language -->
                        <div class="sm_link dropdown">
                            <button type="button" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="~/assets/imgs/icons/saudii.png" class="flag" alt="saudi flag">
                                <span class="lang drop-text">العربية</span>
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

                    </div>

                    <!-- Content -->
                    <div class="row w-100">
                        <div class="col-xl-10 mx-auto">
                            <slot />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

/*************** Mounted **************** */
</script>

<style lang="scss" scoped></style>