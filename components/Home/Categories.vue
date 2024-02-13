
<template>
    <div class="categories_sidebar">
        <h3 class="categories_sidebar_title mb-3">
            <i class="pi pi-th-large"></i>
            <span>{{ $t('categories.all') }}</span>
        </h3>

        <div class="categories_items">

            <div class="dropend" v-for="category in categories" :key="category.id">
                <button type="button" class="categories_item dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <img :src="category.image" class="circle_img xxs" alt="category img">
                    <span>{{ category.name }}</span>
                    <i class="pi pi-angle-left"></i>
                </button>

                <!-- DropDown -->
                <ul class="dropdown-menu sm">

                    <NuxtLink :to="`/categories/${subcategory.id}`" class="categories_item" v-for="subcategory in category.subcategories" :key="subcategory.id">
                        {{ subcategory.name }}
                    </NuxtLink>

                </ul>
            </div>

            <NuxtLink to="/categories" class="fs14 c-primary justify-content-center text-decoration-underline mt-3">
                {{ $t('categories.showAll') }}
            </NuxtLink>

        </div>
    </div>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

// images
import cat1 from '~/assets/imgs/cat_1.png';
import cat2 from '~/assets/imgs/cat_2.png';
import cat3 from '~/assets/imgs/cat_3.png';
import cat4 from '~/assets/imgs/cat_4.png';

// categories
const categories = ref([
    {
        id: 1,
        name: 'كلادينج',
        image: cat1,
        subcategories: [
            {
                id: 1,
                name: 'كلادينج بى فى دى',
            },
            {
                id: 2,
                name: 'كلادينج نانو فى دى',
            },
        ]
    },
    {
        id: 2,
        name: 'فورميكا',
        image: cat2,
        subcategories: [
            {
                id: 1,
                name: 'كلادينج بى فى دى',
            },
            {
                id: 2,
                name: 'كلادينج نانو فى دى',
            },
        ]
    },
    {
        id: 3,
        name: 'اكريلك',
        image: cat3,
        subcategories: [
            {
                id: 1,
                name: 'كلادينج بى فى دى',
            },
            {
                id: 2,
                name: 'كلادينج نانو فى دى',
            },
        ]
    },
    {
        id: 3,
        name: 'بي في سي',
        image: cat4,
        subcategories: [
            {
                id: 1,
                name: 'كلادينج بى فى دى',
            },
            {
                id: 2,
                name: 'كلادينج نانو فى دى',
            },
        ]
    },
    {
        id: 1,
        name: 'كلادينج',
        image: cat1,
        subcategories: [
            {
                id: 1,
                name: 'كلادينج بى فى دى',
            },
            {
                id: 2,
                name: 'كلادينج نانو فى دى',
            },
        ]
    },
    {
        id: 2,
        name: 'فورميكا',
        image: cat2,
        subcategories: [
            {
                id: 1,
                name: 'كلادينج بى فى دى',
            },
            {
                id: 2,
                name: 'كلادينج نانو فى دى',
            },
        ]
    },
    {
        id: 3,
        name: 'اكريلك',
        image: cat3,
        subcategories: [
            {
                id: 1,
                name: 'كلادينج بى فى دى',
            },
            {
                id: 2,
                name: 'كلادينج نانو فى دى',
            },
        ]
    },
    {
        id: 3,
        name: 'بي في سي',
        image: cat4,
        subcategories: [
            {
                id: 1,
                name: 'كلادينج بى فى دى',
            },
            {
                id: 2,
                name: 'كلادينج نانو فى دى',
            },
        ]
    },
])

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

/*************** Mounted **************** */

</script>
