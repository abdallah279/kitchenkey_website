<template>
    <!-- Home Slider -->
    <HomeSlider_Categories />

    <!-- Offers -->
    <HomeProducts :products="offers.products" :title="offers.title" :route="offers.route" />

    <!-- First Banner -->
    <HomeBanner
        banner=' https://www.thespruce.com/thmb/S1aye-s9z6VRA58-V8oRLSQwKCc=/5100x0/filters:no_upscale():max_bytes(150000):strip_icc()/SPR-luxury-kitchens-5211364-hero-688d716970544978bc12abdf17ce6f83.jpg' />

    <!-- Offers -->
    <HomeProducts :products="products.products" :title="products.title" :route="products.route" />

    <!-- First Banner -->
    <HomeBanner
        banner=' https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2023/05/03113728/luxury-modern-kitchen-designs-regalia.jpg' />
</template>

<script setup>
/*************** Plugins **************** */
import { useI18n } from 'vue-i18n';
const { t } = useI18n({ useScope: 'global' });

/*************** DATA **************** */

import product1 from '@/assets/imgs/product1.png';
import product2 from '@/assets/imgs/product2.png';
import product3 from '@/assets/imgs/product3.png';
import product4 from '@/assets/imgs/product4.png';
import product5 from '@/assets/imgs/product5.png';

// offers
const offers = ref({
    id: 1,
    title: t('offers.title'),
    route: { path: '/exclusiveOffers' },
    products: [
        {
            id: 1,
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
    ]
});

// products
const products = ref({
    id: 1,
    title: t('products.title'),
    route: { path: '/Products/Viewed' },
    products: [
        {
            id: 1,
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
            image: product1,
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
            image: product2,
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
            image: product3,
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
            id: 5,
            image: product5,
            name: `خزانات مطبخ حديثة جاهزة طراز أوروبي`,
            avg_rate: 4,
            avg_number: 1.215,
            price: '1,512',
            discount_price: '1,512',
            is_favourite: false,
            offerRank: '10%',
        },
    ]
});

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>