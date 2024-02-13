
<template>
    <div class="grid-2">
        <ProductsArrivedCard v-for="product in products" :key="product.id" :product="product" />
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
    }
});

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>