<template>
    <main>

        <!--**** Order Details ****-->
        <section class="section_bg main_padding">

            <div class="container">
                <SharedPageHeader :title="$t('pagesTitle.orderDetails')" class="mb-5" />

                <!--**** Progress ****-->
                <div class="progress-container mb-4">

                    <!--**** Finished ****-->
                    <div class="progress-item">
                        <div class="circle">
                            <i class="pi pi-check"></i>
                        </div>
                        <span class="text">{{ $t('orderDetails.steps.finished') }}</span>
                        <span class="line"></span>
                    </div>

                    <!--**** Current ****-->
                    <div class="progress-item">
                        <div class="circle">
                            <i class="pi pi-check"></i>
                        </div>
                        <span class="text">{{ $t('orderDetails.steps.current') }}</span>
                        <span class="line"></span>
                    </div>

                    <!--**** Paid ****-->
                    <div class="progress-item active">
                        <div class="circle">
                            <i class="pi pi-check"></i>
                        </div>
                        <span class="text">{{ $t('orderDetails.steps.inProcess') }}</span>
                        <span class="line"></span>
                    </div>

                    <!--**** Pending ****-->
                    <div class="progress-item">
                        <div class="circle">
                            <i class="pi pi-check"></i>
                        </div>
                        <span class="text">{{ $t('orderDetails.steps.waiting') }}</span>
                        <span class="line"></span>
                    </div>
                </div>

                <!--**** Order Cards ****-->
                <div class="row mb-4 gy-3">

                    <div class="col-lg-4">
                        <!-- Order Card -->
                        <div class="bg-white rounded-2 store_card socail_hover mb-4">
                            <div class="logo_container mx-auto">
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

                        <!-- store Card -->
                        <div class="bg-white rounded-2 store_card socail_hover">
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

                            <div class="d-flex align-items-center gap-1">
                                <span class="c-gray">{{ $t('order.card.status') }}: </span>
                                <span class="c-primary">قيد الانتظار</span>
                            </div>

                            <button class="btn btn-primary mx-auto mt-3 lg">{{ $t('orderDetails.showFatora') }}</button>
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
                                        <span class="c-gray">
                                            {{ $t('orderDetails.quantity') }}: {{ product.quantity }}
                                        </span>
                                    </div>

                                    <!-- Price -->
                                    <span class="c-dark">{{ product.price }}</span>
                                </div>

                            </div>

                        </div>

                        <!--**** Order Notes ****-->
                        <div class="bg-white rounded-3 p-4 mt-4">
                            <div class="order_item c-dark ff-med">{{ $t('modals.cancelOrder.title') }}</div>
                            <p class="ff-light fs13">
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                                النص العربى،
                                حيث
                                يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                                التى يولدها
                                التطبيق
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                                النص العربى،
                                حيث
                                يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                                التى يولدها
                                التطبيق
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                            </p>
                        </div>
                    </div>

                </div>

                <!--**** Order Notes ****-->
                <div class="bg-white rounded-3 p-4 mb-4">
                    <div class="order_item c-dark ff-med">{{ $t('orderDetails.notes') }}</div>
                    <p class="ff-light fs13">
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،
                        حيث
                        يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                        التطبيق
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،
                        حيث
                        يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                        التطبيق
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                    </p>
                </div>

                <!--**** Order Details ****-->
                <div class="row gy-3 mb-4">

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

                <!--**** Order Rates ****-->
                <div class="bg-white rounded-3 p-4">
                    <div class="order_item c-dark ff-med">تقييمي</div>
                    <div class="rate_items">

                        <!-- Rate Item -->
                        <div class="rate_item" v-for="i in 2" :key="i">
                            <div class="d-flex align-items-center gap-3">
                                <div class="logo_container xs mb-0 flex-shrink-0">
                                    <img src="@/assets/imgs/product2.png" alt="logo" class="logo_img">
                                </div>
                                <div>
                                    <h5 class="fs13 mb-4 c-gray ff-med">خزانات مطبخ حديثة جاهزة طراز أوروبي</h5>
                                    <ClientOnly>
                                        <Rating v-model="avg_rate" class="small justify-content-end gap-1" dir="ltr"
                                            readonly :cancel="false" />
                                    </ClientOnly>
                                </div>
                            </div>

                            <p class="mt-3 fs13">
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
                                العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى هذا النص هو مثال لنص
                                يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن
                                تولد مثل هذا النص أو العديد من النصوص الأخرى
                            </p>

                            <div class="d-flex align-items-center gap-3 mt-3">
                                <img src="@/assets/imgs/brand_3.png" alt="brand_3" class="circle_img sm" />
                                <h6 class="fs13 c-dark ff-med">كيتشن ستور</h6>
                            </div>

                            <p class="mt-3 fs13">
                                بى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>

        <!--**** Buttons ****-->
        <section class="bg-white py-4">
            <div class="container">
                <div class="d-flex align-items-center justify-content-center gap-3 flex-wrap">
                    <button class="btn lg btn-outline-red" @click="cancelModal = true">
                        {{ $t('orderDetails.cancelBtn') }}
                    </button>
                    <button class="btn lg btn-primary">{{ $t('orderDetails.payBtn') }}</button>
                    <NuxtLink :to="`/order/${id}/rate`" class="btn lg btn-primary">
                        {{ $t('orderDetails.rateBtn') }}
                    </NuxtLink>
                    <NuxtLink :to="`/order/${id}/return`" class="btn lg btn-outline-primary">
                        {{ $t('orderDetails.returnBtn') }}
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!--**** Cancel Modal ****-->
        <Dialog id="cancelModal" class="md" v-model:visible="cancelModal" modal>
            <div class="row">
                <div class="col-lg-11 mx-auto">
                    <form class="right_sec">
                        <h4 class="c-dark fs15 text-center mb-4">{{ $t('modals.cancelOrder.title') }}</h4>

                        <div class="input-g">
                            <label for="" class="main-label">{{ $t('modals.cancelOrder.title') }}</label>

                            <div class="main-input">
                                <textarea class="input-me text-area sm" name="message"
                                    :placeholder="$t('modals.cancelOrder.placeholder')"></textarea>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary modal_btn">
                            {{ $t('formBtns.send') }}
                        </button>
                    </form>
                </div>
            </div>
        </Dialog>

    </main>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

const { id } = useRoute().params;

// cancelModal
const cancelModal = ref(false);

// avg_rate
const avg_rate = ref(4);

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