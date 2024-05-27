<template>
    <main>

        <!--**** Order Details ****-->
        <section class="section_bg main_padding">

            <div class="container">
                <SharedPageHeader :title="$t('pagesTitle.cartProducts')" class="mb-5" />
                
                <!--**** Order Products ****-->
                <div class="bg-white rounded-3 p-4">

                    <div class="order_product rate_item" v-for="product in products" :key="product.id">
                        <div class="logo_container sm mb-0 flex-shrink-0">
                            <img src="@/assets/imgs/product2.png" alt="logo" class="logo_img">
                        </div>
                        <div class="content">

                            <!-- Title -->
                            <div class="d-flex align-items-center justify-content-between gap-4 mb-4">
                                <h4 class="c-gray ff-med">{{ product.name }}</h4>
                                <span class="bg_primary d-block fs12 py-1 c-white px-3 rounded-1">
                                    {{ product.type }}
                                </span>
                            </div>

                            <!-- Details -->
                            <div class="d-flex align-items-center gap-5 mb-4">
                                <span class="c-gray">{{ $t('orderDetails.color') }}: {{ product.color }}</span>
                                <span class="c-gray">{{ $t('orderDetails.space') }}: {{ product.space }}</span>
                            </div>

                            <!-- Price -->
                            <span class="c-dark">{{ product.price }}</span>
                        </div>

                    </div>

                </div>

            </div>
        </section>


        <!--**** Buttons ****-->
        <section class="bg-white py-4">
            <div class="container">
                <div class="d-flex align-items-center justify-content-center gap-3 flex-wrap">
                    <NuxtLink :to="`/cart/completeSteps/address`" class="btn lg btn-primary">
                        {{ $t('formBtns.confirm') }}
                    </NuxtLink>
                    <NuxtLink to="/cart" class="btn lg btn-outline-primary">
                        {{ $t('cart.buttons.return') }}
                    </NuxtLink>
                </div>
            </div>
        </section>


    </main>
</template>

<script setup>
/*************** Plugins *****************/

/*************** DATA *****************/

// products
const products = ref([
    {
        id: 1,
        name: 'خزانات مطبخ حديثة جاهزة طراز أوروبي',
        price: '28.000 رس',
        quantity: '1',
        color: "أبيض",
        space: "15 م2",
        type: "جديد"
    },
    {
        id: 2,
        name: 'خزانات مطبخ حديثة جاهزة طراز أوروبي',
        price: '28.000 رس',
        quantity: '1',
        color: 'أبيض',
        space: "15 م2",
        type: "مستعمل"
    }
]);

/*************** Computed **************** */

/*************** Props **************** */

/*************** Provid Inject **************** */

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>