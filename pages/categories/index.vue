<template>
    <main class="main_padding">
        <div class="container">

            <SharedPageHeader :title="$t('pagesTitle.categories')" />

            <!-- categories -->
            <div class="section_style pd">
                <categoriesList :categories="categories" />
            </div>
        </div>
    </main>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

import cat_1 from '~/assets/imgs/cat_1.png';
import cat_2 from '~/assets/imgs/cat_2.png';
import cat_3 from '~/assets/imgs/cat_3.png';
import cat_4 from '~/assets/imgs/cat_4.png';

// categories
const categories = ref([
    {
        id: 1,
        image: cat_1,
        name: `كلادينج`
    },
    {
        id: 2,
        image: cat_2,
        name: `فورميكا`
    },
    {
        id: 3,
        image: cat_3,
        name: `اكريلك`
    },
    {
        id: 4,
        image: cat_4,
        name: `بي في سي`
    },
    {
        id: 1,
        image: cat_1,
        name: `كلادينج`
    },
    {
        id: 2,
        image: cat_2,
        name: `فورميكا`
    },
    {
        id: 3,
        image: cat_3,
        name: `اكريلك`
    },
    {
        id: 4,
        image: cat_4,
        name: `بي في سي`
    },
    {
        id: 1,
        image: cat_1,
        name: `كلادينج`
    },
    {
        id: 2,
        image: cat_2,
        name: `فورميكا`
    },
    {
        id: 3,
        image: cat_3,
        name: `اكريلك`
    },
    {
        id: 4,
        image: cat_4,
        name: `بي في سي`
    },
    {
        id: 1,
        image: cat_1,
        name: `كلادينج`
    },
    {
        id: 2,
        image: cat_2,
        name: `فورميكا`
    },
    {
        id: 3,
        image: cat_3,
        name: `اكريلك`
    },
    {
        id: 4,
        image: cat_4,
        name: `بي في سي`
    },
]);

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>