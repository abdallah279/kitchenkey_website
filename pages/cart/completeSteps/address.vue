<template>
    <form @submit.prevent="next">

        <!--**** Order Details ****-->
        <section class="section_bg main_padding">

            <div class="container">
                <SharedPageHeader :title="$t('pagesTitle.completeOrder')" class="mb-5" />

                <!--**** Progress ****-->
                <ClientOnly>
                    <cartProgress :activeTab="1" />
                </ClientOnly>

                <!--** Address **-->
                <div class="bg-white rounded-3 p-4">

                    <label class="main-label d-flex align-items-center justify-content-between">
                        {{ $t('specialOrder.address') }}
                        <NuxtLink to="/addresses/add" class="btn btn-primary sm">{{
                            $t('specialOrder.addAddress') }}</NuxtLink>
                    </label>
                    <div class="radio_card pd row mx-0">
                        <label class="radio-box col-sm-6 mb-sm-0"
                            :class="index < deliveryAddress.length - 1 ? 'mb-4' : 'mb-0'"
                            v-for="(add, index) in deliveryAddress" :key="add.id">
                            <input type="radio" class="input-radio" name="delivery_address"
                                v-model="address" :value="add.id">
                            <div class="label-radio d-grid gap-2">
                                <span>{{ add.name }}</span>
                                <span class="fs11 c-gray_mid">{{ add.desc }}</span>
                            </div>
                        </label>
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
                    <NuxtLink to="/cart/products" class="btn lg btn-outline-primary">
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

/*************** Computed **************** */

/*************** Props **************** */

/*************** Provid Inject **************** */

/*************** Methods **************** */

const next = () => {
    navigateTo('/cart/completeSteps/payment');
    // if (address.value) {
    // }
}

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>