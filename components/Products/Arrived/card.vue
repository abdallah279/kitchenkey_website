<template>
    <div class="card_style arrived_card">

        <div class="pro_img">
            <img :src="product.image" :alt="product.name" class="img">
        </div>

        <div class="content">
            <h3 class="pro_name">{{ product.name }}</h3>
    
            <NuxtLink :to="`/products/${product.id}`" class="card_link justify-content-end">
                عرض المنتج
                <i class="pi pi-angle-left"></i>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

/*************** Computed **************** */

/******************* Props And Inject *******************/
const props = defineProps({
    product: {
        type: Object,
        required: true,
    }
});

/*************** Methods **************** */

/*************** Mounted **************** */
</script>

<style lang="scss" scoped></style>