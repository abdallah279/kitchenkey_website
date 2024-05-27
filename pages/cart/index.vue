<template>
    <main>

        <!--**** Order Details ****-->
        <section class="section_bg main_padding">

            <div class="container">
                <SharedPageHeader :title="$t('pagesTitle.cart')" class="mb-5" />

                <!--**** Order Cards ****-->
                <div class="row mb-4 gy-3">

                    <!-- store Card -->
                    <div class="col-lg-4">
                        <div class="bg-white rounded-2 store_card socail_hover h-100">
                            <img src="@/assets/imgs/store2.png" alt="logo" class="logo_container mx-auto md">

                            <!-- top -->
                            <div class="mb-3 d-flex align-items-center justify-content-between">

                                <span class="c-dark ff-med">كيتشن ستور</span>

                                <div class="star_con">
                                    <i class="pi pi-star-fill"></i>
                                    1.215
                                </div>

                            </div>

                            <div class="d-flex align-items-center gap-1 mb-3">
                                <i class="pi pi-map-marker c-red"></i>
                                <span class="c-gray">الرياض</span>
                            </div>

                        </div>
                    </div>


                    <!-- Order Products -->
                    <div class="col-lg-8">

                        <!-- Product Card -->
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

                                    <div class="d-flex gap-3 justify-content-end">
                                        <div class="number-input sm">
                                            <span class="plus btn-num"
                                                @click="product.quantity < product.quantity ? product.quantity++ : false">
                                                <i class="pi pi-plus"></i>
                                            </span>
                                            <input type="text" :value="product.quantity" disabled />
                                            <span class="minus btn-num"
                                                @click="product.quantity > 1 ? product.quantity-- : false">
                                                <i class="pi pi-minus"></i>
                                            </span>
                                        </div>

                                        <button class="btn sm btn-orange2">{{ $t('cart.buttons.update') }}</button>
                                        <button class="btn xs-btn btn-red">
                                            <i class="pi pi-times"></i>
                                        </button>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <!--**** Order Notes ****-->
                <div class="bg-white rounded-3 p-4 mb-4">
                    <div class="order_item c-dark ff-med">{{ $t('orderDetails.notes') }}</div>
                    <div class="main-input">
                        <textarea name="notes" class="input-me sm text-area"
                            :placeholder="$t('cart.forms.notes')"></textarea>
                    </div>
                </div>

                <!--**** Order Details ****-->
                <div class="row gy-3 mb-4">

                    <!--** Time **-->
                    <div class="col-lg-6">

                        <div class="bg-white rounded-3 p-4 h-100">
                            <div class="order_item c-dark ff-med">{{ $t('specialOrder.time') }}</div>

                            <div class="main-input">
                                <input type="text" class="input-me" :placeholder="$t('cart.forms.time')" />
                            </div>
                        </div>

                    </div>

                    <!-- Copun -->
                    <div class="col-lg-6">

                        <div class="bg-white rounded-3 p-4 h-100">
                            <label class="main-label">
                                <img src="@/assets/imgs/icons/copoun.png" alt="" class="ic">
                                {{ $t('cart.forms.copoun') }}
                            </label>
                            <div class="search_form">
                                <div class="main-input">
                                    <input type="text" class="input-me" />
                                    <button type="submit" class="main-icon sm btn btn-primary">
                                        {{ $t('cart.buttons.active') }}
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>


        <!--**** Buttons ****-->
        <section class="bg-white py-4">
            <div class="container">
                <div class="d-flex align-items-center justify-content-center gap-3 flex-wrap">
                    <NuxtLink :to="{ path: '/auth/login', query: { cart: true } }" class="btn lg btn-primary">
                        {{ $t('cart.buttons.complete') }}
                    </NuxtLink>
                    <button class="btn lg btn-outline-red">
                        {{ $t('orderDetails.cancelBtn') }}
                    </button>
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