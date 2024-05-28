<template>
    <form @submit.prevent="raterder">

        <!--**** Order Details ****-->
        <section class="section_bg main_padding">

            <div class="container">
                <SharedPageHeader :title="$t('pagesTitle.raterder')" class="mb-5" />

                <!--**** Products ****-->
                <div class="row gy-3" :class="{ 'mb-4': index !== products.length - 1 }"
                    v-for="(product, index) in products" :key="product.id">

                    <!-- Order Card -->
                    <div class="col-lg-4 col-xl-3">
                        <div class="bg-white rounded-2 store_card socail_hover h-100">
                            <div class="logo_container mx-auto">
                                <img src="@/assets/imgs/product2.png" alt="logo" class="logo_img">
                            </div>

                            <!-- top -->
                            <h3 class="ff-med c-gray">{{ product.name }}</h3>
                        </div>
                    </div>


                    <!-- Comments -->
                    <div class="col-lg-8 col-xl-9">

                        <!-- Product Card -->
                        <div class="bg-white rounded-3 p-4 h-100">

                            <div class="order_item c-dark ff-med">{{ $t('rateOrder.rateProduct') }}</div>
                            <ClientOnly>
                                <Rating v-model="productsStars['proRate' + index]"
                                    class="md justify-content-end gap-2 mb-3" dir="ltr" :cancel="false" />
                            </ClientOnly>

                            <div class="main-input">
                                <textarea v-model="productsComments['proComment' + index]" class="input-me text-area sm"
                                    name="message" :placeholder="$t('rateOrder.commentProduct')"></textarea>
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
                        {{ $t('formBtns.confirm') }}
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

// id
const { id } = useRoute().params;

// loading
const loading = ref(false);

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

// productsStars
const productsStars = ref({});

// productsStars
const productsComments = ref({});

// productsRates
const productsRates = ref([]);

/*************** Computed **************** */

/*************** Props **************** */

/*************** Provid Inject **************** */

/*************** Methods **************** */



// Rate Order
const raterder = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;

        productsRates.value = [];
        for (let i = 0; i < products.value.length; i++) {
            productsRates.value.push({
                'order_id': id,
                'product_id': `${products.value[i].id}`,
                "stars": `${productsStars.value['proRate' + i]}`,
                "comment": `${productsComments.value['proComment' + i]}`,
            });
        }
        console.log(productsRates.value);

        // redirect
        navigateTo(`/order/${id}`);

    }, 1000);

}

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>