<template>
    <div class="main_padding section_bg">
        <div class="container">
            <SharedPageHeader :title="$t('brands.title')" class="mb-5" />

            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-7">
                    <div class="card_style brand_card brand_details">

                        <div class="top">
                            <div class="brand_img">
                                <img :src="brand.image" :alt="brand.name" class="img">
                            </div>
                            <h3 class="brand_name">{{ brand.name }}</h3>
                        </div>

                        <button class="btn btn-primary sm">{{ $t('brands.followBtn') }}</button>
                        <!-- <button class="btn btn-light-primary sm">{{ $t('brands.unFollowBtn') }}</button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <SharedProductsFiltersView />
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */
import brand1 from '~/assets/imgs/brand_1.png';

const brand = ref({
    id: 1,
    image: brand1,
    name: `كيتشن براند`
});

/*************** Computed **************** */

/*************** Props **************** */

/*************** Provid Inject **************** */
provide('showBrands', false);

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>