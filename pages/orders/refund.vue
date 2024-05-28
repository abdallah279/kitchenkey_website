<template>
    <section class="row gy-4">
        <div class="col-12 col-xl-3 col-lg-4">
            <div class="profile_sidebar">

                <button class="profile_link" @click="orderName = 'waiting'" :class="{ active: orderName === 'waiting' }">
                    {{ $t('order.tabs.waiting') }}
                    <i class="pi pi-angle-left icon"></i>
                </button>
                
                <button class="profile_link" @click="orderName = 'current'" :class="{ active: orderName === 'current' }">
                    {{ $t('order.tabs.current') }}
                    <i class="pi pi-angle-left icon"></i>
                </button>
                
                <button class="profile_link" @click="orderName = 'finished'" :class="{ active: orderName === 'finished' }">
                    {{ $t('order.tabs.finished') }}
                    <i class="pi pi-angle-left icon"></i>
                </button>
                
                <button class="profile_link" @click="orderName = 'cancelled'" :class="{ active: orderName === 'cancelled' }">
                    {{ $t('order.tabs.canceled') }}
                    <i class="pi pi-angle-left icon"></i>
                </button>

            </div>

        </div>
        <div class="col-12 col-xl-9 col-lg-8">
            <div class="section_style p-lg-4 p-3">

                <ordersCards :orderName="orderName" />

            </div>
        </div>
    </section>
</template>

<script setup>

/******************* Plugins *******************/

/*************** DATA *****************/

// orderName
const orderName = ref('waiting');

/*************** Props *****************/

/*************** Provide And Inject *****************/

provide('orderRoute', 'refund');

/******************* Methods *******************/

/******************* Computed *******************/

/******************* Watch *******************/

/******************* Mounted *******************/

</script>

<style lang="scss" scoped></style>