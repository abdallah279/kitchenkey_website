<template>
    <NuxtLink :to="`/orderDetails/${orderRoute}/${1}`" class="order_card card_style">
        <div class="img-order-con">
            <img src="@/assets/imgs/logo.png" class="order_img" title="order-img" alt="order-img">
        </div>
        <div class="order_content">

            <!-- Top -->
            <div class="top d-flex align-items-center justify-content-between">

                <div class="d-flex align-items-center">
                    <span class="c-gray"> {{ $t('order.card.number') }}: </span>
                    <span class="c-dark">1223</span>
                </div>

                <div class="d-flex align-items-center">
                    <span class="c-gray">{{ $t('order.card.price') }}: </span>
                    <span class="c-primary">28.000 رس</span>
                </div>

            </div>

            <!-- Bottom -->
            <div class="d-flex align-items-center justify-content-between">

                <div class="c-gray_mid">5/9/2023</div>

                <div class="card_link">
                    {{ $t('order.card.more') }}
                    <i class="pi pi-angle-left"></i>
                </div>

            </div>
        </div>
    </NuxtLink>
</template>

<script setup>

/******************* Plugins *******************/

/*************** DATA *****************/

/*************** Inject *****************/
const orderRoute = inject('orderRoute');

/*************** Props *****************/

/******************* Methods *******************/

/******************* Computed *******************/

/******************* Watch *******************/

/******************* Mounted *******************/

</script>

<style lang="scss" scoped></style>