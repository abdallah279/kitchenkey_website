<template>
    <div class="card_style brand_card">

        <div class="top">
            <div class="brand_img">
                <img :src="brand.image" :alt="brand.name" class="img">
            </div>
            <h3 class="brand_name">{{ brand.name }}</h3>
        </div>

        <NuxtLink :to="`/brands/${brand.id}`" class="card_link">
            {{ $t('brands.detailesBtn') }}
            <i class="pi pi-angle-left"></i>
        </NuxtLink>
    </div>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

/*************** Computed **************** */

/******************* Props And Inject *******************/
const props = defineProps({
    brand: {
        type: Object,
        required: true,
    }
});

/*************** Methods **************** */

/*************** Mounted **************** */
</script>

<style lang="scss" scoped></style>