<template>
    <form @submit.prevent="returnOrder">

        <!--**** Order Details ****-->
        <section class="section_bg main_padding">

            <div class="container">
                <SharedPageHeader :title="$t('pagesTitle.returnOrder')" class="mb-5" />

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
                                        <span class="c-gray">
                                            {{ $t('orderDetails.quantity') }}: {{ product.quantity }}
                                        </span>
                                    </div>

                                    <!-- Price -->
                                    <span class="c-dark">{{ product.price }}</span>

                                    <div class="d-flex gap-3 justify-content-end mt-3 mt-lg-1">
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

                                        <button type="button" class="btn sm btn-orange2">{{ $t('cart.buttons.update') }}</button>
                                        <button type="button" class="btn xs-btn btn-red">
                                            <i class="pi pi-times"></i>
                                        </button>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>


                <!--**** Return Reason ****-->
                <div class="bg-white rounded-3 p-4 mb-4">
                    <div class="order_item c-dark ff-med">{{ $t('returnOrder.reason') }}</div>
                    <div class="main-input">
                        <textarea name="notes" class="input-me sm text-area"
                            :placeholder="$t('returnOrder.reasonPlaceholder')"></textarea>
                    </div>
                </div>


                <!--**** Images ****-->
                <div class="row gy-3">

                    <!--**** Products Images ****-->
                    <div class="col-lg-6">
                        <div class="bg-white rounded-3 p-4 h-100">
                            <div class="order_item c-dark ff-med">{{ $t('returnOrder.products') }} *</div>
                            <SharedUploadInput @update="updatedImages" :multiple="true" :images="images"
                                :placeholder="$t('returnOrder.productsPlaceholder')" />
                        </div>
                    </div>

                    <!--**** Fatora Images ****-->
                    <div class="col-lg-6">
                        <div class="bg-white rounded-3 p-4 h-100">
                            <div class="order_item c-dark ff-med">{{ $t('returnOrder.fatora') }} *</div>
                            <SharedUploadInput @update="updatedFatoraImages" :images="fatoraImages"
                                :placeholder="$t('returnOrder.fatoraPlaceholder')" />
                        </div>
                    </div>


                </div>


                <!--**** Address && Delivery ****-->
                <div class="row gy-3 mt-2">

                    <!--** Address **-->
                    <div class="col-lg-6">
                        <div class="bg-white rounded-3 p-4 h-100">

                            <label class="main-label d-flex align-items-center justify-content-between">
                                {{ $t('specialOrder.address') }}
                                <NuxtLink to="/addresses/add" class="btn btn-primary sm">
                                    {{ $t('specialOrder.addAddress') }}
                                </NuxtLink>
                            </label>
                            <div class="radio_card pd row mx-0">
                                <label class="radio-box col-sm-6 mb-sm-0"
                                    :class="index < deliveryAddress.length - 1 ? 'mb-4' : 'mb-0'"
                                    v-for="(add, index) in deliveryAddress" :key="add.id">
                                    <input type="radio" class="input-radio" name="delivery_address" v-model="address"
                                        :value="add.id">
                                    <div class="label-radio d-grid gap-2">
                                        <span>{{ add.name }}</span>
                                        <span class="fs11 c-gray_mid">{{ add.desc }}</span>
                                    </div>
                                </label>
                            </div>

                        </div>
                    </div>

                    <!--** Shipping Companies **-->
                    <div class="col-lg-6">
                        <div class="bg-white rounded-3 p-4 h-100">
                            <label class="main-label">{{ $t('specialOrder.shippingCompanies') }}</label>
                            <div class="radio_card pd row mx-0">
                                <label class="radio-box col-sm-6 mb-sm-0"
                                    :class="index < companies.length - 1 ? 'mb-4' : 'mb-0'"
                                    v-for="(comp, index) in companies" :key="comp.id">
                                    <input type="radio" class="input-radio" name="companies" v-model="company"
                                        :value="comp.id">
                                    <div class="label-radio">
                                        {{ comp.name }}
                                    </div>
                                </label>
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
                    <button type="submit" class="btn lg btn-primary" :disabled="loading">
                        {{ $t('cart.buttons.send') }}
                        <span class="spinner-border spinner-border-sm" v-if="loading"></span>
                    </button>
                </div>
            </div>
        </section>

    </form>
</template>

<script setup>
/*************** Plugins *****************/

/*************** DATA *****************/

// loading
const loading = ref(false);

// images
const images = ref([]);
const fatoraImages = ref([]);

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


// Delivery Address
const address = ref();
const deliveryAddress = ref([
    {
        id: 1,
        name: 'المنزل',
        desc: 'السعودية , الرياض , حي الملك عبدالعزيز'
    },
    {
        id: 2,
        name: 'العمل',
        desc: 'السعودية , الرياض , حي الملك عبدالعزيز'
    },
]);

// shipping companies
const company = ref();
const companies = ref([
    {
        id: 1,
        name: 'اكسبريس (ــــــــــ رس)'
    },
    {
        id: 2,
        name: 'ارامكس (ــــــــــ رس)'
    },
]);

/*************** Computed **************** */

/*************** Props **************** */

/*************** Provid Inject **************** */

/*************** Methods **************** */

// uploaded Images
const updatedImages = (data) => {
    images.value = data;
}

// uploaded Fatora Images
const updatedFatoraImages = (data) => {
    fatoraImages.value = data;
}

// Send Order
const returnOrder = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;

        // redirect
        navigateTo('/donePage');

    }, 1000);
}

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>