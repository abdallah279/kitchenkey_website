
<template>
    <section class="main_padding bg_banner">
        <div class="container">

            <img :src="banner" alt="banner" class="banner_img">

        </div>
    </section>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

/*************** Computed **************** */

/*************** Props **************** */
const props = defineProps({
    banner: {
        type: String
    }
});


/*************** Methods **************** */

/*************** Mounted **************** */

</script>
