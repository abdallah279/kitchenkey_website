<template>
    <main class="main_padding">
        <div class="container">

            <SharedPageHeader :title="title" class="mb-5" v-if="title" />

            <div class="row gy-4 flex-column-reverse flex-lg-row">

                <!-- Filters -->
                <div class="col-xl-3 col-lg-4 categories_sidebar" :class="{ 'active': showFilter }">

                    <SharedSidebarFilters />

                </div>

                <!-- Search And products -->
                <div class="col-xl-9 col-lg-8 ps-6 res">

                    <button class="btn mb-3 d-lg-none sm-btn btn-primary" @click="showFilter = !showFilter">
                        <i class="pi pi-filter"></i>
                    </button>

                    <!-- Search -->
                    <form action="" class="search_form mb-3">
                        <div class="main-input">
                            <input type="text" class="input-me" :placeholder="$t('search.productPlaceholder')">
                            <button type="submit" class="main-icon sm btn btn-primary">
                                {{ $t('search.btn') }}
                            </button>
                        </div>
                    </form>

                    <!-- Products -->
                    <div class="section_style pd">
                        <ProductsCards :products="products" grid="grid-4" />
                    </div>

                </div>
            </div>

            <div class="nav-overlay" :class="{ active: showFilter }" @click="showFilter = !showFilter"></div>

        </div>
    </main>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

// showFilter
const showFilter = ref(false);

import product1 from '@/assets/imgs/product1.png';
import product2 from '@/assets/imgs/product2.png';
import product3 from '@/assets/imgs/product3.png';
import product4 from '@/assets/imgs/product4.png';
import product5 from '@/assets/imgs/product5.png';

// products
const products = ref([
    {
        id: 1,
        image: product1,
        name: `خزانات مطبخ حديثة جاهزة طراز أوروبي`,
        avg_rate: 4,
        avg_number: 1.215,
        price: '1,512',
        discount_price: '1,512',
        is_favourite: true,
        offerRank: '10%',
    },
    {
        id: 2,
        image: product2,
        name: `خزانات مطبخ حديثة جاهزة طراز أوروبي`,
        avg_rate: 4,
        avg_number: 1.215,
        price: '1,512',
        discount_price: '1,512',
        is_favourite: false,
        offerRank: '10%',
    },
    {
        id: 3,
        image: product3,
        name: `خزانات مطبخ حديثة جاهزة طراز أوروبي`,
        avg_rate: 4,
        avg_number: 1.215,
        price: '1,512',
        discount_price: '1,512',
        is_favourite: true,
        offerRank: '10%',
    },
    {
        id: 4,
        image: product4,
        name: `خزانات مطبخ حديثة جاهزة طراز أوروبي خزانات مطبخ حديثة جاهزة طراز أوروبي `,
        avg_rate: 4,
        avg_number: 1.215,
        price: '1,512',
        discount_price: '1,512',
        is_favourite: false,
        offerRank: '100%',
    },
    {
        id: 5,
        image: product5,
        name: `خزانات مطبخ حديثة جاهزة طراز أوروبي`,
        avg_rate: 4,
        avg_number: 1.215,
        price: '1,512',
        discount_price: '1,512',
        is_favourite: true,
        offerRank: '10%',
    },
    {
        id: 1,
        image: product5,
        name: `خزانات مطبخ حديثة جاهزة طراز أوروبي`,
        avg_rate: 4,
        avg_number: 1.215,
        price: '1,512',
        discount_price: '1,512',
        is_favourite: false,
        offerRank: '10%',
    },
    {
        id: 2,
        image: product4,
        name: `خزانات مطبخ حديثة جاهزة طراز أوروبي`,
        avg_rate: 4,
        avg_number: 1.215,
        price: '1,512',
        discount_price: '1,512',
        is_favourite: true,
        offerRank: '10%',
    },
    {
        id: 3,
        image: product2,
        name: `خزانات مطبخ حديثة جاهزة طراز أوروبي`,
        avg_rate: 4,
        avg_number: 1.215,
        price: '1,512',
        discount_price: '1,512',
        is_favourite: false,
        offerRank: '10%',
    },
    {
        id: 4,
        image: product1,
        name: `خزانات مطبخ حديثة جاهزة طراز أوروبي`,
        avg_rate: 4,
        avg_number: 1.215,
        price: '1,512',
        discount_price: '1,512',
        is_favourite: true,
        offerRank: '10%',
    },
    {
        id: 5,
        image: product3,
        name: `خزانات مطبخ حديثة جاهزة طراز أوروبي`,
        avg_rate: 4,
        avg_number: 1.215,
        price: '1,512',
        discount_price: '1,512',
        is_favourite: false,
        offerRank: '10%',
    },
]);

/*************** Computed **************** */

/*************** Props **************** */

const props = defineProps({
    title: String,
});

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>