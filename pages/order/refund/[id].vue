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
                    <div class="progress-item active">
                        <div class="circle">
                            <i class="pi pi-check"></i>
                        </div>
                        <span class="text">{{ $t('orderDetails.steps.current') }}</span>
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
                <div class="row mb-3 gy-3">

                    <div class="col-lg-4">

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

                            <button type="button" @click="showFatora = true" class="btn btn-primary mx-auto mt-3 lg">{{
                                $t('orderDetails.showFatora') }}</button>
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

                    </div>

                </div>


                <!--**** Order Details ****-->
                <div class="row gy-3">

                    <!-- Right -->
                    <div class="col-lg-6">

                        <!--**** Return Reason ****-->
                        <div class="bg-white rounded-3 p-4 mb-3">
                            <div class="order_item c-dark ff-med">سبب الإرجاع</div>
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
                            </p>
                        </div>

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

                        <!--** Shipping Company **-->
                        <div class="bg-white rounded-3 p-4 mb-3">
                            <label class="main-label">{{ $t('specialOrder.shippingCompany') }}</label>
                            <div class="radio_card pd">
                                <label class="radio-box">
                                    <div class="label-radio">اكسبريس (20 رس)</div>
                                </label>
                            </div>
                        </div>

                        <!--** Order Summary **-->
                        <cartSummary :refund="true" />

                    </div>

                    <!-- Left -->
                    <div class="col-lg-6">

                        <!--** Products Images **-->
                        <div class="bg-white rounded-3 p-4 mb-3">
                            <label class="main-label">صور المنتجات</label>
                            <div class="radio_card pd d-flex gap-2">

                                <div class="logo_container xs mb-0 flex-shrink-0" v-for="i in 3" :key="i">
                                    <img src="@/assets/imgs/product2.png" alt="logo" class="logo_img">
                                </div>

                            </div>
                        </div>

                        <!--** Fatora Image **-->
                        <div class="bg-white rounded-3 p-4 mb-3">
                            <label class="main-label">صورة الفاتورة</label>
                            <div class="radio_card pd">
                                <img src="@/assets/imgs/fatora.png" alt="logo" class="fatora_img">
                            </div>
                        </div>

                    </div>

                </div>

                <!--**** Cancel Reason ****-->
                <div class="bg-white rounded-3 p-4 mt-3">
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
        </section>


        <!--**** Buttons ****-->
        <section class="bg-white py-4">
            <div class="container">
                <div class="d-flex align-items-center justify-content-center gap-3 flex-wrap">
                    <button class="btn lg btn-outline-red" @click="cancelModal = true">
                        {{ $t('orderDetails.cancelBtn') }}
                    </button>
                    <!-- <button class="btn lg btn-primary">{{ $t('orderDetails.payBtn') }}</button> -->
                    <!-- <button class="btn lg btn-primary" @click="rateModal = true">
                        {{ $t('orderDetails.rateBtn') }}
                    </button> -->
                </div>
            </div>
        </section>


        <!--**** Cancel Modal ****-->
        <Dialog id="cancelModal" class="md" v-model:visible="cancelModal" modal>
            <div class="row">
                <div class="col-lg-11 mx-auto">
                    <form class="right_sec">
                        <h4 class="c-dark fs15 ff-med text-center mb-4">{{ $t('modals.cancelOrder.title') }}</h4>

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


        <!--**** Rate Modal ****-->
        <Dialog id="rateModal" class="md" v-model:visible="rateModal" modal>
            <div class="row">
                <div class="col-lg-11 mx-auto">
                    <form class="right_sec">
                        <h4 class="c-dark fs15 ff-med text-center mb-4">{{ $t('modals.rateOrder.title') }}</h4>

                        <ClientOnly>
                            <Rating v-model="avg_rate" class="lg justify-content-center gap-2 mb-4" dir="ltr"
                                :cancel="false" />
                        </ClientOnly>

                        <div class="input-g">
                            <div class="main-input">
                                <textarea class="input-me text-area sm" name="message"
                                    :placeholder="$t('modals.rateOrder.placeholder')"></textarea>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary modal_btn">
                            {{ $t('formBtns.send') }}
                        </button>
                    </form>
                </div>
            </div>
        </Dialog>


        <!--**** Fatora Modal ****-->
        <Dialog id="fatoraModal" class="md" v-model:visible="showFatora" modal>
            <div class="fatora_con">
                <img src="@/assets/imgs/black_logo.png" alt="logo" class="logo mx-auto d-block mb-5">
                <div class="rate_item">
                    <div class="d-flex align-items-center gap-1 fs14 mb-3">
                        <span class="c-gray">{{ $t('order.card.number') }}: </span>
                        <span class="c-dark ff-med fs13">1223</span>
                    </div>
                    <div class="d-flex align-items-center gap-1 fs14 mb-3">
                        <span class="c-gray">{{ $t('order.fatora.orderDate') }}: </span>
                        <span class="c-dark ff-med fs13">5/9/2023</span>
                    </div>
                    <div class="d-flex align-items-center gap-1 fs14">
                        <span class="c-gray">{{ $t('order.fatora.orderTime') }}: </span>
                        <span class="c-dark ff-med fs13">10:00 pm</span>
                    </div>
                </div>

                <div class="rate_item">
                    <div class="c-gray fs14 mb-3">{{ $t('pagesTitle.orderDetails') }}:</div>
                    <div class="row gy-3">
                        <div class="col-6">
                            <div class="d-flex align-items-center gap-1 fs14">
                                <span class="c-gray">{{ $t('order.fatora.proName') }}: </span>
                                <span class="c-dark ff-med fs13">خزانات مطبخ حديثة</span>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex align-items-center gap-1 fs14">
                                <span class="c-gray">{{ $t('order.fatora.proPrice') }}: </span>
                                <span class="c-dark ff-med fs13">14.000 رس</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="rate_item">
                    <div class="c-gray fs14 mb-3">{{ $t('order.fatora.storeDesc') }}:</div>
                    <div class="d-flex align-items-center gap-1 fs14 mb-3">
                        <span class="c-gray">{{ $t('order.fatora.storeName') }}: </span>
                        <span class="c-dark ff-med fs13">كيتشن ستور</span>
                    </div>
                    <div class="d-flex align-items-center gap-1 fs14 mb-3">
                        <span class="c-gray">{{ $t('order.fatora.storeNumber') }}: </span>
                        <span class="c-dark ff-med fs13">0000000000</span>
                    </div>
                </div>

                <div class="rate_item">
                    <div class="row gy-3">
                        <div class="col-6">
                            <div class="d-flex align-items-center gap-1 fs14">
                                <span class="c-gray">{{ $t('order.fatora.totalQuantity') }}: </span>
                                <span class="c-dark ff-med fs13">2</span>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex align-items-center gap-1 fs14">
                                <span class="c-gray">{{ $t('specialOrder.payWay') }}: </span>
                                <span class="c-dark ff-med fs13">محفظة</span>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex align-items-center gap-1 fs14">
                                <span class="c-gray">{{ $t('specialOrder.shippingCompany') }}: </span>
                                <span class="c-dark ff-med fs13">اكسبريس</span>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex align-items-center gap-1 fs14">
                                <span class="c-gray">{{ $t('orderDetails.productsValue') }}: </span>
                                <span class="c-dark ff-med fs13">28.000 رس</span>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex align-items-center gap-1 fs14">
                                <span class="c-gray">{{ $t('orderDetails.deliveryCost') }}: </span>
                                <span class="c-dark ff-med fs13">28.000 رس</span>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex align-items-center gap-1 fs14">
                                <span class="c-gray">{{ $t('orderDetails.addedTax') }}: </span>
                                <span class="c-dark ff-med fs13">20 رس</span>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex align-items-center gap-1 fs14">
                                <span class="c-gray">{{ $t('orderDetails.discountCost') }}: </span>
                                <span class="c-dark ff-med fs13">20 رس</span>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex align-items-center gap-1 fs14">
                                <span class="c-gray">{{ $t('orderDetails.total') }}: </span>
                                <span class="c-dark ff-med fs13">28.000 رس</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Dialog>

    </main>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

const { id } = useRoute().params;

// Dailogs
const cancelModal = ref(false);
const showFatora = ref(false);
const rateModal = ref(false);

// avg_rate
const avg_rate = ref(0);

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