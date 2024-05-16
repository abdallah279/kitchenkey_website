<template>
    <main class="profile main_padding">
        <div class="container">

            <SharedPageHeader :title="$t('pagesTitle.profile')" class="mb-5" />

            <div class="section_style pd">
                <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-9">

                        <!--** Profile Image **-->
                        <div class="profile_img_con mx-auto mb-4">
                            <img src="@/assets/imgs/profile_img.jpg" alt="profile image" class="profile_img_background">
                            <div class="img">
                                <img src="@/assets/imgs/profile_img.jpg" alt="profile image" class="profile_img_center">
                            </div>
                        </div>

                        <!--** Profile Name **-->
                        <h3 class="fs15 c-dark text-center ff-med mb-4">عبدالله زكريا</h3>

                        <!--** Profile Info **-->
                        <div class="card_style pd not_hover">
                            <div class=" profile_info">

                                <div class="item">
                                    <h5 class="fs14 c-dark ff-med mb-3">{{ $t('auth.email.text') }}</h5>
                                    <a href="mailto:LZSjx@example.com" target="_blank" class="tel_link mb-0">
                                        <img src="@/assets/imgs/icons/mail.png" class="ic" alt="mail icon">
                                        <span class="fs13 c-gray_mid">LZSjx@example.com</span>
                                    </a>
                                </div>

                                <div class="line"></div>

                                <div class="item">
                                    <h5 class="fs14 c-dark ff-med mb-3">{{ $t('auth.phone.text') }}</h5>
                                    <a href="tel:+966122333444" target="_blank" class="tel_link mb-0">
                                        <img src="@/assets/imgs/icons/tel.png" class="ic" alt="mail icon">
                                        <span class="fs13 c-gray_mid">+966 122333444</span>
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </main>
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