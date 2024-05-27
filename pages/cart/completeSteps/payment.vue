<template>
    <form @submit.prevent="next">

        <!--**** Order Details ****-->
        <section class="section_bg main_padding">

            <div class="container">
                <SharedPageHeader :title="$t('pagesTitle.completeOrder')" class="mb-5" />

                <!--**** Progress ****-->
                <ClientOnly>
                    <cartProgress :activeTab="2" />
                </ClientOnly>

                <div class="row gy-3">

                    <!--**** Payment Details ****-->
                    <div class="col-lg-6">

                        <!--** Payment Way **-->
                        <div class="bg-white rounded-3 p-4 mb-3">
                            <label class="main-label">{{ $t('specialOrder.payWay') }}</label>
                            <div class="radio_card pd mb-3 row mx-0">
                                <label class="radio-box col-sm-6 mb-sm-0"
                                    :class="index < payWays.length - 1 ? 'mb-4' : 'mb-0'"
                                    v-for="(way, index) in payWays" :key="way.id">
                                    <input type="radio" class="input-radio" name="delivery_type" v-model="payWay"
                                        :value="way.id">
                                    <div class="label-radio">
                                        {{ way.name }}
                                    </div>
                                </label>
                            </div>
                        </div>

                        <!--** Shipping Companies **-->
                        <div class="bg-white rounded-3 p-4">
                            <label class="main-label">{{ $t('specialOrder.shippingCompanies') }}</label>
                            <div class="radio_card pd mb-3 row mx-0">
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

                    <!--**** Order Summary ****-->
                    <div class="col-lg-6">
                        <cartSummary />
                    </div>

                </div>

            </div>
        </section>


        <!--**** Buttons ****-->
        <section class="bg-white py-4">
            <div class="container">
                <div class="d-flex align-items-center justify-content-center gap-3 flex-wrap">
                    <button type="submit" class="btn lg btn-primary">
                        {{ $t('cart.buttons.next') }}
                    </button>
                    <NuxtLink to="/cart/completeSteps/address" class="btn lg btn-outline-primary">
                        {{ $t('cart.buttons.return') }}
                    </NuxtLink>
                </div>
            </div>
        </section>

    </form>
</template>

<script setup>
/*************** Plugins *****************/

/*************** DATA *****************/

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