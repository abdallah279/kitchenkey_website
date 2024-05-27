<template>
    <main>

        <!--**** Order Details ****-->
        <section class="section_bg main_padding">

            <div class="container">
                <SharedPageHeader :title="$t('pagesTitle.completeOrder')" class="mb-5" />

                <!--**** Progress ****-->
                <ClientOnly>
                    <cartProgress :activeTab="3" />
                </ClientOnly>

                <!--**** Order Stores ****-->
                <div v-for="i in 2" :key="i" class="mb-4">

                    <!--** store Cards **-->
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
                            <div class="bg-white rounded-3 p-4 h-100">

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
                                            <span class="c-gray">{{ $t('orderDetails.color') }}: {{ product.color
                                                }}</span>
                                            <span class="c-gray">{{ $t('orderDetails.space') }}: {{ product.space
                                                }}</span>
                                            <span class="c-gray">
                                                {{ $t('orderDetails.quantity') }}: {{ product.quantity }}
                                            </span>
                                        </div>

                                        <!-- Price -->
                                        <span class="c-dark">{{ product.price }}</span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <!--** store Notes **-->
                    <div class="bg-white rounded-3 p-4 mb-4">
                        <div class="order_item c-dark ff-med">{{ $t('orderDetails.notes') }}</div>
                        <p class="ff-light fs13">
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
                            العربى،
                            حيث
                            يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                            التطبيق
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
                            العربى،
                            حيث
                            يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                            التطبيق
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                        </p>
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
                        <cartSummary />

                    </div>

                </div>


            </div>
        </section>


        <!--**** Buttons ****-->
        <section class="bg-white py-4">
            <div class="container">
                <div class="d-flex align-items-center justify-content-center gap-3 flex-wrap">
                    <button class="btn lg btn-primary">
                        {{ $t('cart.buttons.send') }}
                    </button>
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

const next = () => {
    navigateTo('/cart/completeSteps/confirm');
}

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>