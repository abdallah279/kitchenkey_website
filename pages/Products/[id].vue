<template>
    <main>

        <!-- First Section -->
        <section class="main_padding section_bg mb-4">
            <div class="container">
                <SharedPageHeader :title="$t('pagesTitle.proDetailes')" class="mb-5" />

                <div class="row">

                    <!-- Galleria -->
                    <div class="col-lg-6">
                        <ClientOnly>
                            <ProductsGalleria :attchements="product.attchements" />
                        </ClientOnly>
                    </div>

                    <!-- Left -->
                    <div class="col-lg-6">
                        <div class="card_style not_hover product_detailes_top">
                            <div class="top border-bottom">

                                <!-- Right -->
                                <div class="right">
                                    <h3 class="fs14 ff-reg c-gray mb-3">خزانات مطبخ حديثة جاهزة طراز أوروبي</h3>
                                    <div class="d-flex align-items-center gap-2">
                                        <Rating v-model="product.avg_rate" class="small justify-content-end gap-1" dir="ltr"
                                            readonly :cancel="false" />
                                        <span class="fs12">{{ product.avg_number }}</span>
                                    </div>
                                </div>

                                <!-- Left -->
                                <div class="left d-flex align-items-start gap-2">
                                    <span class="btn btn-light-primary sm-btn">{{ $t('product.returnable') }}</span>
                                    <button class="btn btn-red sm-btn">
                                        <i class="pi pi-heart"></i>
                                    </button>
                                    <button class="btn btn-yellow sm-btn">
                                        <i class="pi pi-share-alt"></i>
                                    </button>
                                </div>

                            </div>

                            <div class="bottom">
                                <div class="img_con mb-4">
                                    <img :src="product.image" alt="product image" class="circle_img md">
                                    <h5 class="fs13 c-dark ff-reg">كيتشن براند</h5>
                                </div>

                                <NuxtLink :to="`/brands/${product.id}`" class="btn btn-primary minw-100">
                                    {{ $t('product.brandDetails') }}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!--*** Product features ***-->
        <section class="main_padding section_bg pb-4">
            <div class="container">
                <div class="card_style not_hover">
                    <h4 class="card_title border-bottom">{{ $t('product.features') }}</h4>

                    <!-- Selects -->
                    <div class="py-4 border-bottom">
                        <div class="row gy-4">

                            <!-- اللون -->
                            <div class="col-md-6">
                                <label for="" class="main-label">{{ $t('product.color') }}</label>
                                <div class="main-input">

                                    <Dropdown v-model="selectedcolors" :placeholder="$t('product.color')" :options="product.colors"
                                        optionLabel="name" class="input-me">
                                        <template #value="slotProps">
                                            <div v-if="slotProps.value" class="selected">
                                                {{ slotProps.value.name }}
                                            </div>
                                            <span v-else>
                                                {{ slotProps.placeholder }}
                                            </span>
                                        </template>
                                        <template #option="slotProps">
                                            <div class="option">
                                                {{ slotProps.option.name }}
                                            </div>
                                        </template>
                                    </Dropdown>

                                    <i class="pi pi-angle-down main-icon"></i>

                                </div>
                            </div>

                            <!-- المساحة -->
                            <div class="col-md-6">
                                <label for="" class="main-label">{{ $t('product.space') }}</label>
                                <div class="main-input">

                                    <Dropdown v-model="selectedSpace" :placeholder="$t('product.space')" :options="product.space"
                                        optionLabel="name" class="input-me">
                                        <template #value="slotProps">
                                            <div v-if="slotProps.value" class="selected">
                                                {{ slotProps.value.name }}
                                            </div>
                                            <span v-else>
                                                {{ slotProps.placeholder }}
                                            </span>
                                        </template>
                                        <template #option="slotProps">
                                            <div class="option">
                                                {{ slotProps.option.name }}
                                            </div>
                                        </template>
                                    </Dropdown>

                                    <i class="pi pi-angle-down main-icon"></i>

                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- Info -->
                    <div class="product_det_cart d-flex align-items-center gap-5 pt-4">

                        <!-- Price -->
                        <div class="price_con">
                            <h5 class=" c-gray">{{ $t('product.price') }}:</h5>
                            <p class="price" v-if="product.discount_price">{{ product.discount_price }} ر.س</p>
                            <p class="price" :class="{ old: product.discount_price }">{{ product.price }} ر.س</p>
                        </div>

                        <!-- Available number -->
                        <div class="price_con">
                            <h5 class=" c-gray">{{ $t('product.avCount') }}:</h5>
                            <span class="sm-button transparent-red">{{ product.quantity }}</span>
                            <button class="btn btn-orange">
                                <i class="pi pi-bell"></i>
                                {{ $t('product.notify') }}
                            </button>
                        </div>

                        <!-- Add to cart -->
                        <div class="price_con">
                            <h5 class=" c-gray">{{ $t('product.count') }}:</h5>
                            <div class="number-input">
                                <span class="plus btn-num" @click="quantity < product.quantity ? quantity++ : false">
                                    <i class="pi pi-plus"></i>
                                </span>
                                <input type="text" :value="quantity" disabled/>
                                <span class="minus btn-num" @click="quantity > 1 ? quantity-- : false">
                                    <i class="pi pi-minus"></i>
                                </span>
                            </div>
                            <button class="btn btn-primary" @click="addToCart">
                                <i class="pi pi-shopping-cart"></i>
                                {{ $t('product.addCart') }}
                            </button>

                            <div class="addDone" :class="{ active: addDone }">
                                <i class="pi pi-verified c-yellow"></i>
                                <span class="c-dark fs13">{{ $t('product.added') }}</span>
                                <NuxtLink class="btn btn-primary sm">{{ $t('product.viewCart') }}</NuxtLink>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>


        <!--*** Tabs ***-->
        <section class="main_padding section_bg mb-4">
            <div class="container">
                <div class="card_style not_hover">

                    <TabView>

                        <!-- Description -->
                        <TabPanel :header="$t('product.tabs.description')">
                            <p class="ff-light fs13 pt-4">
                                {{ product.description }}
                            </p>
                        </TabPanel>

                        <!-- Category -->
                        <TabPanel :header="$t('product.tabs.Category')">

                            <div class="border-bottom py-3">
                                <div class="row">
                                    <div class="col-6">
                                        <span class="ff-light c-gray fs13">{{ $t('filterSidebar.mainCat') }}</span>
                                    </div>
                                    <div class="col-6">
                                        <span class="ff-light c-gray fs13"> {{ product.category }} </span>
                                    </div>
                                </div>
                            </div>

                            <div class="border-bottom py-3">
                                <div class="row">
                                    <div class="col-6">
                                        <span class="ff-light c-gray fs13">{{ $t('filterSidebar.subCat') }}</span>
                                    </div>
                                    <div class="col-6">
                                        <span class="ff-light c-gray fs13"> {{ product.subCategory }} </span>
                                    </div>
                                </div>
                            </div>

                            <div class="pt-3">
                                <div class="row">
                                    <div class="col-6">
                                        <span class="ff-light c-gray fs13">{{ $t('filterSidebar.status') }}</span>
                                    </div>
                                    <div class="col-6">
                                        <span class="ff-light c-gray fs13"> {{ product.status }} </span>
                                    </div>
                                </div>
                            </div>

                        </TabPanel>

                        <!-- Rates -->
                        <TabPanel :header="$t('product.tabs.rate')">
                            <div class="rating-items">

                                <div class="rate-item border-bottom py-3" v-for="rate in product.rates" :key="rate.id">
                                    <div class="rate-head">
                                        <img :src="rate.image" alt="user img" class="circle_img sm">
                                        <div class="user-info">
                                            <span class="rate-name">{{ rate.name }}</span>
                                            <Rating v-model="rate.avg_rate" class="small justify-content-end gap-1"
                                                dir="ltr" readonly :cancel="false" />
                                        </div>
                                    </div>

                                    <p class="rate-text mb-0">
                                        {{ rate.description }}
                                    </p>
                                </div>

                            </div>
                        </TabPanel>

                    </TabView>

                </div>
            </div>
        </section>


        <!--*** Slider Section ***-->
        <section class="main_padding section_bg mb-4">
            <div class="container">
                <div class="card_style not_hover">
                    <h4 class="card_title border-bottom mb-4">{{ $t('product.similarProducts') }}</h4>

                    <div class="product_slider">
                        <Carousel v-bind="settings" dir="rtl" :breakpoints="breakpoints" :autoplay="3000" :wrapAround="true" :transition="2000">
                            <Slide v-for="product in products" :key="product.id">
                                <ProductsCard :product="product" class="mx-1" />
                            </Slide>
    
                            <template #addons>
                                <Navigation />
                            </template>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>

/*************** Plugins **************** */

/*************** DATA **************** */

// images
import slider1 from '@/assets/imgs/slider1.jpg';
import slider2 from '@/assets/imgs/slider2.jpg';
import slider3 from '@/assets/imgs/slider3.jpg';
import user1 from '@/assets/imgs/user1.png';
import user2 from '@/assets/imgs/user2.png';

import product1 from '@/assets/imgs/product1.png';
import product2 from '@/assets/imgs/product2.png';
import product3 from '@/assets/imgs/product3.png';
import product4 from '@/assets/imgs/product4.png';
import product5 from '@/assets/imgs/product5.png';

// Slider
const settings = ref({
    itemsToShow: 2,
    snapAlign: 'start',
});

const breakpoints = ref({
    // 700px and up
    700: {
        itemsToShow: 3.5,
    },
    // 1024 and up
    1024: {
        itemsToShow: 5,
    },
})

// const route = useRoute();

// const { data: product } = await useFetch(`/api/products/${route.params.id}`);

// product
const product = ref({
    id: 1,
    name: 'خزانات مطبخ حديثة جاهزة طراز أوروبي',
    image: 'https://picsum.photos/200/300',
    avg_rate: 4.5,
    avg_number: 1.215,
    price: '1,512',
    discount_price: '1,512',
    quantity: 10,
    category: 'كلادينج',
    subCategory: 'كلادينج بي في دي',
    status: 'جديد',
    description: `
    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى
    `,
    attchements: [
        {
            id: 1,
            image: slider1
        },
        {
            id: 2,
            image: slider2
        },
        {
            id: 3,
            image: slider3
        },
        {
            id: 4,
            image: slider2
        },
        {
            id: 5,
            image: slider3
        },
    ],
    colors: [
        {
            id: 1,
            name: 'احمر'
        },
        {
            id: 2,
            name: 'ازرق'
        }
    ],
    space: [
        {
            id: 1,
            name: 15 + ' متر'
        },
        {
            id: 2,
            name: 20 + ' متر'
        }
    ],
    rates: [
        {
            id: 1,
            name: 'عبدالله أحمد',
            avg_rate: 5,
            image: user1,
            description: `
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، 
                حيث يمكنك أن تولد مثل هذا النص أو العديد هذا النص هو مثال لنص يمكن أن هذا النص هو مثال لنص يمكن 
                أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا 
                النص أو العديد هذا النص هو مثال لنص يمكن أن 
            `
        },
        {
            id: 2,
            name: 'محمد عبدالله',
            avg_rate: 4,
            image: user2,
            description: `
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، 
                حيث يمكنك أن تولد مثل هذا النص أو العديد هذا النص هو مثال لنص يمكن أن هذا النص هو مثال لنص يمكن 
                أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا 
                النص أو العديد هذا النص هو مثال لنص يمكن أن 
            `
        }
    ]
});

// selectedcolors
const selectedcolors = ref(null);

// selectedSpace
const selectedSpace = ref(null);

// quantity
const quantity = ref(1);

// addDone
const addDone = ref(false);

// products
const products = ref([
    {
        id: 1,
        image: product1,
        name: ` 1`,
        avg_rate: 4,
        avg_number: 1.215,
        price: '1,512',
        discount_price: '1,512',
        is_favourite: true,
        offerRank: '10%',
    },
    {
        id: 2,
        image: product2,
        name: `خزانات مطبخ حديثة جاهزة طراز أوروبي`,
        avg_rate: 4,
        avg_number: 1.215,
        price: '1,512',
        discount_price: '1,512',
        is_favourite: false,
        offerRank: '10%',
    },
    {
        id: 3,
        image: product3,
        name: `خزانات مطبخ حديثة جاهزة طراز أوروبي`,
        avg_rate: 4,
        avg_number: 1.215,
        price: '1,512',
        discount_price: '1,512',
        is_favourite: true,
        offerRank: '10%',
    },
    {
        id: 4,
        image: product4,
        name: `خزانات مطبخ حديثة جاهزة طراز أوروبي خزانات مطبخ حديثة جاهزة طراز أوروبي `,
        avg_rate: 4,
        avg_number: 1.215,
        price: '1,512',
        discount_price: '1,512',
        is_favourite: false,
        offerRank: '100%',
    },
    {
        id: 5,
        image: product5,
        name: `خزانات مطبخ حديثة جاهزة طراز أوروبي`,
        avg_rate: 4,
        avg_number: 1.215,
        price: '1,512',
        discount_price: '1,512',
        is_favourite: true,
        offerRank: '10%',
    },
    {
        id: 1,
        image: product5,
        name: `خزانات مطبخ حديثة جاهزة طراز أوروبي`,
        avg_rate: 4,
        avg_number: 1.215,
        price: '1,512',
        discount_price: '1,512',
        is_favourite: false,
        offerRank: '10%',
    },
    {
        id: 2,
        image: product4,
        name: `خزانات مطبخ حديثة جاهزة طراز أوروبي`,
        avg_rate: 4,
        avg_number: 1.215,
        price: '1,512',
        discount_price: '1,512',
        is_favourite: true,
        offerRank: '10%',
    },
    {
        id: 3,
        image: product2,
        name: `خزانات مطبخ حديثة جاهزة طراز أوروبي`,
        avg_rate: 4,
        avg_number: 1.215,
        price: '1,512',
        discount_price: '1,512',
        is_favourite: false,
        offerRank: '10%',
    },
    {
        id: 4,
        image: product1,
        name: `خزانات مطبخ حديثة جاهزة طراز أوروبي`,
        avg_rate: 4,
        avg_number: 1.215,
        price: '1,512',
        discount_price: '1,512',
        is_favourite: true,
        offerRank: '10%',
    },
    {
        id: 5,
        image: product3,
        name: `خزانات مطبخ حديثة جاهزة طراز أوروبي`,
        avg_rate: 4,
        avg_number: 1.215,
        price: '1,512',
        discount_price: '1,512',
        is_favourite: false,
        offerRank: '10%',
    },
]);

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

// addToCart
const addToCart = () => {
    addDone.value = true;

    setTimeout(() => {
        addDone.value = false;
    }, 3000);
}

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>