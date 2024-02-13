<template>
    <main class="Special_Order main_padding">
        <div class="container">

            <form class="row" @submit.prevent="addOrder">

                <!-- Form -->
                <div class="col-lg-6">
                    <div class="section_style pd">

                        <!-- Link -->
                        <div class="input-g">
                            <label class="main-label">
                                رابط المنتج
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <input type="text" class="input-me" placeholder="ادخل رابط المنتج">
                            </div>
                        </div>

                        <!-- Image -->
                        <div class="input-g">
                            <label class="main-label">
                                صورة المنتج
                                <span class="c-red">*</span>
                            </label>
                            <SharedUploadInput @update="updatedImages" :images="images" placeholder="ارفق صورة المنتج" />
                        </div>

                        <!-- Description -->
                        <div class="input-g">
                            <label class="main-label">
                                وصف الطلب
                                <span class="c-red">*</span>
                            </label>
                            <div class="main-input">
                                <textarea class="input-me text-area sm" placeholder="ادخل وصف الطلب"></textarea>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Delivery Form -->
                <div class="col-lg-6">
                    <div class="section_style pd">

                        <!-- Address -->
                        <div class="input-g">
                            <label class="main-label d-flex align-items-center justify-content-between">
                                عنوان التوصيل
                                <NuxtLink to="/addAddress" class="btn btn-primary sm">إضافة عنوان</NuxtLink>
                            </label>
                            <div class="radio_card pd mb-3 row mx-0">
                                <label class="radio-box col-sm-6 mb-sm-0" :class="index < deliveryAddress.length - 1 ? 'mb-4' : 'mb-0' " v-for="(add, index) in deliveryAddress" :key="add.id">
                                    <input type="radio" class="input-radio" name="delivery_address" v-model="address"
                                        :value="add.id">
                                    <div class="label-radio d-grid gap-2">
                                        <span>{{ add.name }}</span>
                                        <span class="fs11 c-gray_mid">{{ add.desc }}</span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <!-- Payment Way -->
                        <div class="input-g">
                            <label class="main-label">طريقة الدفع</label>
                            <div class="radio_card pd mb-3 row mx-0">
                                <label class="radio-box col-sm-6 mb-sm-0" :class="index < payWays.length - 1 ? 'mb-4' : 'mb-0' " v-for="(way, index) in payWays" :key="way.id">
                                    <input type="radio" class="input-radio" name="delivery_type" v-model="payWay"
                                        :value="way.id">
                                    <div class="label-radio">
                                        {{ way.name }}
                                    </div>
                                </label>
                            </div>
                        </div>

                        <!-- Shipping Companies -->
                        <div class="input-g">
                            <label class="main-label">شركات الشحن</label>
                            <div class="radio_card pd mb-3 row mx-0">
                                <label class="radio-box col-sm-6 mb-sm-0" :class="index < companies.length - 1 ? 'mb-4' : 'mb-0' " v-for="(comp, index) in companies" :key="comp.id">
                                    <input type="radio" class="input-radio" name="companies" v-model="company"
                                        :value="comp.id">
                                    <div class="label-radio">
                                        {{ comp.name }}
                                    </div>
                                </label>
                            </div>
                        </div>

                        <button class="btn btn-primary minw-100 lg col-12">إرسال</button>

                    </div>
                </div>

            </form>

        </div>
    </main>

    <!-- Done Modal -->
    <Dialog id="done" class="" v-model:visible="done" modal>
        <div class="row">
            <div class="col-lg-10 mx-auto">
                <div class="right_sec">
                    <p class="fs14 c-dark text-center mb-4">
                        <span class="c-red">عفوا!</span> شركة الشحن ليس بإمكانها توصيل طلبك لهذا العنوان قم باختيار عنوان آخر
                    </p>
                    <div class="buttons justify-content-center">
                        <button type="button" @click="done = false" class="btn btn-primary modal_btn">
                            العودة للطلب
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */
// images
const images = ref([]);

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

// payWays
const payWay = ref();
const payWays = ref([
    {
        id: 1,
        name: 'المحفظة (120.00 رس)'
    },
    {
        id: 2,
        name: 'إلكتروني'
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

// done
const done = ref(false);

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */
// uploadedImages
const updatedImages = (data) => {
    images.value = data;
}

// addOrder
const addOrder = () => {
    done.value = true;
}
/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>