
<template>
    <div class="product_card card_style">

        <div class="fav_con">
            <div class="fav_icon" @click="toggleFav">
                <i class="pi" :class="{ 'pi-heart': !fav, 'pi-heart-fill': fav }"></i>
                <span class="spinner-border spinner-border-sm" v-if="loading" role="status" aria-hidden="true"></span>
            </div>

            <span class="offer_text" v-if="product.offerRank">{{ product.offerRank }}</span>
        </div>

        <div class="product_content">

            <NuxtLink :to="`/products/${product.id}`" class="pro_link"></NuxtLink>

            <div class="image">
                <img :src="product.image" alt="" class="product_img">
            </div>
    
            <div class="product_body">
                <h3 class="product_name">{{ product.name }}</h3>

                <div class="product_rate">
                    <ClientOnly>
                        <Rating v-model="product.avg_rate" class="small justify-content-end gap-1" dir="ltr" readonly :cancel="false" />
                    </ClientOnly>
                    <span class="fs12">{{ product.avg_number }}</span>
                </div>
                <div class="price_con">
                    <p class="price" v-if="product.discount_price">{{ product.discount_price }} ر.س</p>
                    <p class="price" :class="{ old: product.discount_price }">{{ product.price }} ر.س</p>
                </div>
            </div>
        </div>

        <div class="product_footer">
            <NuxtLink :to="`/products/${product.id}`" class="card_link pro_link">
                {{ $t('products.product.detailesBtn') }}
                <i class="pi pi-angle-left"></i>
            </NuxtLink>

            <button class="card_link">
                <i class="pi pi-shopping-cart"></i>
                {{ $t('products.product.addToCart') }}
            </button>
        </div>
    </div>
</template>

<script setup>

/*************** Plugins **************** */

/*************** DATA **************** */
// loading
const loading = ref(false);

// Fav
const fav = ref(0);

/*************** Computed **************** */

/******************* Props And Inject *******************/
const props = defineProps({
    product: {
        type: Object,
        required: true,
    }
});

/*************** Methods **************** */

/*************** Mounted **************** */
onMounted(() => {
    fav.value = props.product.is_favourite;
});

</script>

<style lang="scss" scoped></style>