<template>
    <NuxtLink :to="`/categories/${category.id}`" class="card_style brand_card category">

        <div class="top">
            <div class="brand_img">
                <img :src="category.image" :alt="category.name" class="img">
            </div>
            <h3 class="brand_name">{{ category.name }}</h3>
        </div>

    </NuxtLink>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

/*************** Computed **************** */

/******************* Props And Inject *******************/
const props = defineProps({
    category: {
        type: Object,
        required: true,
    }
});

/*************** Methods **************** */

/*************** Mounted **************** */
</script>

<style lang="scss" scoped></style>