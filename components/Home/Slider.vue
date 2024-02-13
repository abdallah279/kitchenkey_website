
<template>
    <Carousel :value="slider" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions" circular
        :autoplayInterval="3000" class="dir-slider">
        <template #item="slotProps">
            <img :src="slotProps.data.image" alt="slider-img" class="slider-img" />
        </template>
    </Carousel>
</template>

<script setup>
/*************** Plugins **************** */

import Carousel from 'primevue/carousel';


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

const responsiveOptions = ref([
    {
        breakpoint: "767px",
        numVisible: 1,
        numScroll: 1,
    },
]);

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

/*************** Mounted **************** */
</script>