
<template>
    <section class="main_padding bg_sec">
        <div class="container">

            <!-- Section Top -->
            <div class="section_top mb-4">
                <h1 class="sec_title">{{ title }}</h1>
                <NuxtLink :to="route" class="more_link">
                    {{ $t('moreBtn') }}
                    <i class="pi pi-angle-left"></i>
                </NuxtLink>
            </div>

            <!-- Offers Products -->
            <ProductsCards :products="products" />

        </div>

    </section>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

/*************** Computed **************** */

/*************** Props **************** */
const props = defineProps({
    title: {
        type: String
    },
    route: {
        type: String
    },
    products: {
        type: Object
    },
});


/*************** Methods **************** */

/*************** Mounted **************** */

</script>
