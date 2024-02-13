<template>
    <main class="main_padding">
        <div class="container">

            <!-- Products -->
            <div class="section_style pd">
                <ProductsArrivedCards :products="products" />
            </div>

        </div>
    </main>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

import product6 from '~/assets/imgs/product6.png';
import product7 from '~/assets/imgs/product7.png';
import product8 from '~/assets/imgs/product8.png';

// brands
const products = ref([
    {
        id: 1,
        image: product6,
        name: `مطبخ حديث 2023`
    },
    {
        id: 2,
        image: product7,
        name: `مطبخ حديث 2023`
    },
    {
        id: 3,
        image: product8,
        name: `مطبخ حديث 2023`
    },
    {
        id: 1,
        image: product6,
        name: `مطبخ حديث 2023`
    },
    {
        id: 2,
        image: product7,
        name: `مطبخ حديث 2023`
    },
    {
        id: 3,
        image: product8,
        name: `مطبخ حديث 2023`
    },
]);

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>