<template>
    <main class="orders_page main_padding">

        <div class="container">
            <SharedPageHeader :title="$t('pagesTitle.orders')" class="mb-5" />

            <!-- Orders Tabs -->
            <div class="d-flex align-items-center justify-content-center gap-4 mb-5">
                <NuxtLink to="/orders/products" class="btn btn-white order_btn">{{ $t('order.tabs.products') }}</NuxtLink>
                <NuxtLink to="/orders/special" class="btn btn-white order_btn">{{ $t('order.tabs.special') }}</NuxtLink>
                <NuxtLink to="/orders/refund" class="btn btn-white order_btn">{{ $t('order.tabs.return') }}</NuxtLink>
            </div>

            <!-- Nested Pages -->
            <NuxtPage />

        </div>

    </main>
</template>

<script setup>

/******************* Plugins *******************/

/*************** DATA *****************/

/*************** Props *****************/

/******************* Methods *******************/

/******************* Computed *******************/

/******************* Watch *******************/

/******************* Mounted *******************/

</script>

<style lang="scss" scoped></style>