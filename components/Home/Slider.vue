<template>
    <!-- <Carousel dir="rtl" :autoplay="3000" :wrapAround="true" :transition="2100">
        <Slide v-for="item in slider" :key="item.id">
            <img :src="item.image" alt="slider-img" class="slider-img" />
        </Slide>

        <template #addons>
            <Pagination />
        </template>
</Carousel> -->
    <Carousel :value="slider" :numVisible="1" :showNavigators="false" :transition="2100" :numScroll="1" circular :autoplayInterval="3000"
        class="dir-slider">
        <template #item="slotProps">
            <img loading="lazy" :src="slotProps.data.image" alt="slider-img" class="slider-img" />
        </template>
    </Carousel>

</template>


<script setup>
/*************** Plugins **************** */

// import { Carousel, Pagination, Slide } from 'vue3-carousel';
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

/*************** DATA **************** */
// slider
const slider = ref([
    {
        image: 'https://www.thespruce.com/thmb/S1aye-s9z6VRA58-V8oRLSQwKCc=/5100x0/filters:no_upscale():max_bytes(150000):strip_icc()/SPR-luxury-kitchens-5211364-hero-688d716970544978bc12abdf17ce6f83.jpg'
    },
    {
        image: 'https://planner5d.com/blog/content/images/2022/11/luxury-kitchen-with-gold-elements.jpg'
    },
    {
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-kitchen-ideas-navy-blue-1577119453.jpg'
    },
]);
/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

/*************** Mounted **************** */
</script>