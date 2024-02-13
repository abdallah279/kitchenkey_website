
<template>
    <div class="grid-3">
        <BrandsCard v-for="brand in brands" :key="brand.id" :brand="brand" />
    </div>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

/*************** Computed **************** */

/******************* Props And Inject *******************/
const props = defineProps({
    brands: {
        type: Array,
        required: true,
    }
});

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>