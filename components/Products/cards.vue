
<template>
    <div class="grid-res" :class="grid">
        <ProductsCard v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

/*************** Computed **************** */

/******************* Props And Inject *******************/
const props = defineProps({
    products: {
        type: Array,
        required: true,
    },
    grid:{
        type: String,
        default: 'grid-5'
    }
});

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>