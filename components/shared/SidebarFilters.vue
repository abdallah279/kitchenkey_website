<template>
    <div>
        <Accordion :multiple="true" :activeIndex="[0]" class="filter">

            <!-- Sub Categories -->
            <AccordionTab :header="$t('filterSidebar.subCategories')" v-if="showSubCats">
                <label class="form-check fs13 categories_item sm" v-for="category in subCategoryFilters" :key="category.id">
                    <input class="form-check-input" type="checkbox" :value="category.id">
                    <div class="form-check-label c-gray">
                        {{ category.name }}
                    </div>
                </label>
            </AccordionTab>

            <!-- Categories -->
            <AccordionTab :header="$t('filterSidebar.categories')" v-if="!showSubCats">

                <div class="dropend" v-for="category in categories" :key="category.id">
                    <button type="button" class="categories_item dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <img :src="category.image" class="circle_img xxs" alt="category img">
                        <span>{{ category.name }}</span>
                        <i class="pi pi-angle-left"></i>
                    </button>

                    <!-- DropDown -->
                    <ul class="dropdown-menu sm">

                        <label class="form-check fs13 categories_item sm" v-for="subcategory in category.subcategories"
                            :key="subcategory.id">
                            <input class="form-check-input" type="checkbox" :value="subcategory.id">
                            <div class="form-check-label c-gray">
                                {{ subcategory.name }}
                            </div>
                        </label>

                    </ul>
                </div>

            </AccordionTab>

            <!-- Brands -->
            <AccordionTab :header="$t('filterSidebar.brands')" v-if="showBrands">
                <label class="form-check fs13 categories_item sm" v-for="brand in brandsFilters" :key="brand.id">
                    <input class="form-check-input" type="checkbox" :value="brand.id">
                    <div class="form-check-label c-gray">
                        {{ brand.name }}
                    </div>
                </label>
            </AccordionTab>

            <!-- Cities -->
            <AccordionTab :header="$t('filterSidebar.city')">
                <label class="form-check fs13 categories_item sm" v-for="city in citiesFilters" :key="city.id">
                    <input class="form-check-input" type="checkbox" :value="city.id">
                    <div class="form-check-label c-gray">
                        {{ city.name }}
                    </div>
                </label>
            </AccordionTab>

            <!-- Ratings -->
            <AccordionTab :header="$t('filterSidebar.rate')">
                <label class="form-check fs13 categories_item sm" v-for="rate in ratingsFilters" :key="rate.id">
                    <input class="form-check-input" type="checkbox" :value="rate.id">
                    <div class="form-check-label c-gray">
                        {{ rate.name }}
                    </div>
                </label>
            </AccordionTab>

            <!-- Status -->
            <AccordionTab :header="$t('filterSidebar.status')">
                <label class="form-check fs13 categories_item sm" v-for="status in statusFilters" :key="status.id">
                    <input class="form-check-input" type="checkbox" :value="status.id">
                    <div class="form-check-label c-gray">
                        {{ status.name }}
                    </div>
                </label>
            </AccordionTab>

            <!-- Price -->
            <AccordionTab :header="$t('filterSidebar.price')">
                <Slider v-model="price" class="w-full" />
            </AccordionTab>

        </Accordion>

        <!-- Clear Filters -->
        <button class="btn clear_btn minw-100 mt-4">
            {{ $t('filterSidebar.clear') }}
        </button>
    </div>
</template>

<script setup>
/*************** Plugins **************** */

import { useI18n } from 'vue-i18n';
const { t } = useI18n({ useScope: 'global' });

/*************** DATA **************** */

// Filters
const subCategoryFilters = ref([
    {
        id: 1,
        name: 'كلادينج بي في دي'
    },
    {
        id: 2,
        name: 'كلادينج نانو بي في دي'
    },
    {
        id: 3,
        name: 'كلادينج بي في دي'
    },
    {
        id: 4,
        name: 'كلادينج نانو بي في دي'
    },
]);


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
]);


// brands
const brandsFilters = ref([
    {
        id: 1,
        name: 'كيتشن براند'
    },
    {
        id: 2,
        name: 'كيتشن براند'
    }
]);


// cities
const citiesFilters = ref([
    {
        id: 1,
        name: 'جدة'
    },
    {
        id: 2,
        name: 'الرياض'
    }
]);


// ratings
const ratingsFilters = ref([
    {
        id: 1,
        name: t('filterSidebar.topRated')
    },
    {
        id: 2,
        name: t('filterSidebar.lowestRated')
    }
]);


// status
const statusFilters = ref([
    {
        id: 1,
        name: t('filterSidebar.new')
    },
    {
        id: 2,
        name: t('filterSidebar.used')
    }
]);

// price
const price = ref(30);
/*************** Computed **************** */

/*************** Props **************** */

/*************** Provid Inject **************** */
const showSubCats = inject('showSubCats', false);
const showBrands = inject('showBrands', true);

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>