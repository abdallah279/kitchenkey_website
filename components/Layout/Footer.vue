<template>
    <!-- Start Footer -->
    <footer class="footer">
        <div class="container">

            <div class="row gy-4">

                <!-- Logo And Info -->
                <div class="col-lg-5 col-md-12">
                    <div class="foot-content">

                        <NuxtLink to="/" class="logo">
                            <img src="~/assets/imgs/logo.png" alt="" class="foot-logo">
                        </NuxtLink>

                        <p class="footer-info">
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى
                            ، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى
                            يولدها التطبيق.
                        </p>

                        <div class="app_links">

                            <a href="#" target="_blank" class="app_link socail_hover">
                                <img src="~/assets/imgs/icons/google.png" class="icon" alt="">

                                <div class="texts">
                                    <span class="fs12">{{ $t('footer.download') }}</span>
                                    <span class="fs13">Google Play</span>
                                </div>
                            </a>

                            <a href="#" target="_blank" class="app_link app socail_hover">
                                <img src="~/assets/imgs/icons/app.png" class="icon" alt="">

                                <div class="texts">
                                    <span class="fs12 c-text">{{ $t('footer.download') }}</span>
                                    <span class="fs13 c-dark fw-semibold">App Store</span>
                                </div>
                            </a>

                        </div>

                    </div>
                </div>

                <!-- Footer Links -->
                <div class="col-lg-4 col-sm-6">
                    <div class="foot-content">
                        <h3 class="footer-head">{{ $t('footer.fastLinks') }}</h3>

                        <div class="row">

                            <!-- Links -->
                            <ul class="footer-links col-6">

                                <li class="foot-link">
                                    <NuxtLink to="/" class="link">
                                        <i class="pi pi-angle-double-left"></i>
                                        <span> {{ $t('nav.home') }}</span>
                                    </NuxtLink>
                                </li>
                                <li class="foot-link">
                                    <NuxtLink to="/categories" class="link">
                                        <i class="pi pi-angle-double-left"></i>
                                        <span>{{ $t('nav.categories') }}</span>
                                    </NuxtLink>
                                </li>
                                <li class="foot-link">
                                    <NuxtLink to="/brands" class="link">
                                        <i class="pi pi-angle-double-left"></i>
                                        <span>{{ $t('nav.brands') }}</span>
                                    </NuxtLink>
                                </li>
                                <li class="foot-link">
                                    <NuxtLink to="/RecentlyArrived" class="link">
                                        <i class="pi pi-angle-double-left"></i>
                                        <span>{{ $t('nav.arrived') }}</span>
                                    </NuxtLink>
                                </li>
                                <li class="foot-link">
                                    <NuxtLink to="/specialOrder" class="link">
                                        <i class="pi pi-angle-double-left"></i>
                                        <span>{{ $t('nav.specialOrder') }}</span>
                                    </NuxtLink>
                                </li>
                            </ul>

                            <!-- Links -->
                            <ul class="footer-links col-6">

                                <li class="foot-link">
                                    <NuxtLink to="/aboutUs" class="link">
                                        <i class="pi pi-angle-double-left"></i>
                                        <span> {{ $t('nav.about') }}</span>
                                    </NuxtLink>
                                </li>
                                <li class="foot-link">
                                    <NuxtLink to="/terms" class="link">
                                        <i class="pi pi-angle-double-left"></i>
                                        <span>{{ $t('nav.terms') }}</span>
                                    </NuxtLink>
                                </li>
                                <li class="foot-link">
                                    <NuxtLink to="/faqs" class="link">
                                        <i class="pi pi-angle-double-left"></i>
                                        <span>{{ $t('nav.faqs') }}</span>
                                    </NuxtLink>
                                </li>
                                <li class="foot-link">
                                    <NuxtLink to="/contactUs" class="link">
                                        <i class="pi pi-angle-double-left"></i>
                                        <span>{{ $t('nav.contact') }}</span>
                                    </NuxtLink>
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>

                <!-- Contact Us -->
                <div class="col-lg-3 col-sm-6">
                    <div class="foot-content">
                        <h3 class="footer-head">{{ $t('footer.contact') }}</h3>

                        <!-- Whatsapp -->
                        <ul class="footer-links">
                            <li class="foot-link">
                                <a href="https://wa.me/01234456678" target="_blank" class="link">
                                    <img src="~/assets/imgs/icons/whatsapp.png" alt="" class="ic">
                                    <span class="c-dark"> 01234456678</span>
                                </a>
                            </li>
                        </ul>

                        <!-- Social -->
                        <div class="foot-social mt-4">
                            <a :href="social.link" target="_blank" class="social-icon socail_hover"
                                v-for="social in socials" :key="social.id">
                                <img :src="social.icon" alt="socail icon" class="ic">
                            </a>
                        </div>

                    </div>
                </div>

            </div>

            <!-- CopyRight -->
            <div class="copy_sec mt-4">
                <p class="text">
                    {{ $t('footer.copyRight1') }} {{ new Date().getFullYear() }} {{ $t('footer.copyRight2') }}
                    <a href="https://aait.sa/" target="_blank" class="link">{{ $t('footer.aait') }}</a>
                </p>
            </div>

        </div>
    </footer>
    <!-- End Footer -->
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */
import socail1 from '~/assets/imgs/icons/socail1.png';
import socail2 from '~/assets/imgs/icons/socail2.png';
import socail3 from '~/assets/imgs/icons/socail3.png';
import socail4 from '~/assets/imgs/icons/socail4.png';

const socials = ref([
    {
        id: 1,
        icon: socail1,
        link: 'https://wa.me/01234456678'
    },
    {
        id: 2,
        icon: socail2,
        link: 'https://wa.me/01234456678'
    },
    {
        id: 3,
        icon: socail3,
        link: 'https://wa.me/01234456678'
    },
    {
        id: 4,
        icon: socail4,
        link: 'https://wa.me/01234456678'
    },
])

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

/*************** Mounted **************** */
</script>

<style lang="scss" scoped></style>