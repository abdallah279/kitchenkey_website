<template>
    <section class="login-sec">
        <div class="row gx-0 flex-lg-row flex-column-reverse">

            <!-- Right Section -->
            <div class="col-lg-4">
                <div class="left-sec">
                    <img src="@/assets/imgs/logo_white.png" alt="" class="login-img">

                    <p class="copy_auth">
                        <span>{{ $t('footer.copyRight1') }} {{ new Date().getFullYear() }}</span>
                        <span>{{ $t('footer.copyRight2') }}</span>
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
                            <span class="drop-text">{{ $t('nav.home') }}</span>
                        </NuxtLink>

                        <!-- Language -->
                        <SharedChangeLangDropdown />

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

/*************** Mounted *****************/

</script>


<style lang="scss" scoped></style>