<template>
    <main class="main_padding">
        <div class="container">

            <SharedPageHeader :title="$t('pagesTitle.followedbrands')" class="mb-5" />

            <!-- Search -->
            <form action="" class="search_form mb-3">
                <div class="main-input">
                    <input type="text" class="input-me" :placeholder="$t('search.brandPlaceholder')">
                    <button type="submit" class="main-icon sm btn btn-primary">
                        {{ $t('search.btn') }}
                    </button>
                </div>
            </form>

            <!-- Brands -->
            <div class="section_style pd">
                <BrandsList :brands="brands" />
            </div>
        </div>
    </main>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

import brand1 from '~/assets/imgs/brand_1.png';
import brand2 from '~/assets/imgs/brand_2.png';
import brand3 from '~/assets/imgs/brand_3.png';

// brands
const brands = ref([
    {
        id: 1,
        image: brand1,
        name: `كيتشن براند`
    },
    {
        id: 2,
        image: brand2,
        name: `كيتشن براند`
    },
    {
        id: 3,
        image: brand3,
        name: `كيتشن براند`
    },
    {
        id: 4,
        image: brand3,
        name: `كيتشن براند`
    },
    {
        id: 5,
        image: brand1,
        name: `كيتشن براند`
    },
    {
        id: 6,
        image: brand2,
        name: `كيتشن براند`
    },
    {
        id: 1,
        image: brand1,
        name: `كيتشن براند`
    },
    {
        id: 2,
        image: brand2,
        name: `كيتشن براند`
    },
    {
        id: 3,
        image: brand3,
        name: `كيتشن براند`
    },
    {
        id: 6,
        image: brand2,
        name: `كيتشن براند`
    },
    {
        id: 4,
        image: brand3,
        name: `كيتشن براند`
    },
    {
        id: 5,
        image: brand1,
        name: `كيتشن براند`
    },
]);

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>