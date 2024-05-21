<template>
    <div class="main_padding">

        <SharedPageHeader :title="$t('pagesTitle.orderStores')" class="mb-5" />

        <div class="section_bg main_padding">
            <div class="container">

                <!--**** Order Cards ****-->
                <div class="row mb-4 gy-3">

                    <!-- Order Card -->
                    <div class="col-lg-4">
                        <div class="bg-white rounded-2 store_card h-100">
                            <div class="logo_container lg mx-auto">
                                <img src="@/assets/imgs/logo.png" alt="logo" class="logo_img">
                            </div>

                            <!-- top -->
                            <div class="mb-4 d-flex align-items-center justify-content-between">

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

                                <div class="d-flex align-items-center">
                                    <span class="c-gray">{{ $t('order.card.status') }}: </span>
                                    <span class="c-primary">قيد الانتظار</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- store Card -->
                    <div class="col-lg-4">
                        <div class="card_style store_card h-100 socail_hover">
                            <img src="@/assets/imgs/slider1.jpg" alt="logo" class="logo_container mx-auto">

                            <!-- top -->
                            <div class="mb-3 d-flex align-items-center justify-content-between">

                                <span class="c-dark ff-med">كيتشن ستور</span>

                                <div class="star_con">
                                    <i class="pi pi-star-fill"></i>
                                    1.215
                                </div>

                            </div>

                            <div class="d-flex align-items-center gap-1">
                                <i class="pi pi-map-marker c-red"></i>
                                <span class="c-gray">الرياض</span>
                            </div>

                            <!-- Bottom -->
                            <div class="bottom">
                                <NuxtLink :to="`/order/${id}`" class="card_link fs13">
                                    {{ $t('order.card.more2') }}
                                    <i class="pi pi-angle-left"></i>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>

                    <!-- store Card -->
                    <div class="col-lg-4">
                        <div class="card_style store_card h-100 socail_hover">
                            <img src="@/assets/imgs/store.png" alt="logo" class="logo_container mx-auto">

                            <!-- top -->
                            <div class="mb-3 d-flex align-items-center justify-content-between">

                                <span class="c-dark ff-med">كيتشن ستور</span>

                                <div class="star_con">
                                    <i class="pi pi-star-fill"></i>
                                    1.215
                                </div>

                            </div>

                            <div class="d-flex align-items-center gap-1">
                                <i class="pi pi-map-marker c-red"></i>
                                <span class="c-gray">الرياض</span>
                            </div>

                            <!-- Bottom -->
                            <div class="bottom">
                                <NuxtLink :to="`/order/${id}`" class="card_link fs13">
                                    {{ $t('order.card.more2') }}
                                    <i class="pi pi-angle-left"></i>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>

                </div>

                <!--**** Order Details ****-->
                <div class="row gy-3">

                    <!-- Right -->
                    <div class="col-lg-6">

                        <!--** Address **-->
                        <div class="bg-white rounded-3 p-4 mb-3">
                            <label class="main-label">{{ $t('specialOrder.address') }}</label>
                            <div class="radio_card pd">
                                <label class="radio-box">
                                    <div class="label-radio d-grid gap-2">
                                        <span>المنزل</span>
                                        <span class="fs11 c-gray_mid">السعودية , الرياض , حي الملك عبدالعزيز</span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <!--** Pay Way **-->
                        <div class="bg-white rounded-3 p-4 mb-3">
                            <label class="main-label">{{ $t('specialOrder.payWay') }}</label>
                            <div class="radio_card pd">
                                <label class="radio-box">
                                    <div class="label-radio">المحفظة (120.00 رس)</div>
                                </label>
                            </div>
                        </div>

                        <!--** Shipping Company **-->
                        <div class="bg-white rounded-3 p-4">
                            <label class="main-label">{{ $t('specialOrder.shippingCompany') }}</label>
                            <div class="radio_card pd">
                                <label class="radio-box">
                                    <div class="label-radio">اكسبريس (20 رس)</div>
                                </label>
                            </div>
                        </div>

                    </div>

                    <!-- Left -->
                    <div class="col-lg-6">

                        <!--** Time **-->
                        <div class="bg-white rounded-3 p-4 mb-3">
                            <label class="main-label">{{ $t('specialOrder.time') }}</label>
                            <div class="radio_card pd">
                                <label class="radio-box">
                                    <div class="label-radio">5/9/2023 - 10pm</div>
                                </label>
                            </div>
                        </div>

                        <!--** Order Summary **-->
                        <div class="bg-white rounded-3 p-4">
                            <div class="order_item c-dark ff-med">{{ $t('orderDetails.summary') }}</div>
                            <div class="order_item">
                                <span class="c-gray">{{ $t('orderDetails.productsValue') }}</span>
                                <span class="c-dark">28.000 رس</span>
                            </div>
                            <div class="order_item">
                                <span class="c-gray">{{ $t('orderDetails.deliveryCost') }}</span>
                                <span class="c-dark">28 رس</span>
                            </div>
                            <div class="order_item">
                                <span class="c-gray">{{ $t('orderDetails.discountCost') }}</span>
                                <span class="c-dark">28 رس</span>
                            </div>
                            <div class="order_item">
                                <span class="c-gray">{{ $t('orderDetails.addedTax') }}</span>
                                <span class="c-dark">28 رس</span>
                            </div>
                            <div class="order_item">
                                <span class="c-gray">{{ $t('orderDetails.total') }}</span>
                                <span class="c-dark">28.000 رس</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

const { id } = useRoute().params;

/*************** Computed **************** */

/*************** Props **************** */

/*************** Provid Inject **************** */

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>