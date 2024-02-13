<template>
    <Galleria :value="attchements" thumbnailsPosition="left" :numVisible="4" :circular="true" :autoPlay="true"
        :transitionInterval="3000">
        <template #item="slotProps">
            <img class="galleria_img" :src="slotProps.item.image" alt="product image" style="width: 100%; display: block" />
            <Image :src="slotProps.item.image" alt="Image" class="fancyImg" preview />
        </template>
        <template #thumbnail="slotProps">
            <img class="thumbnail_img" :src="slotProps.item.image" alt="thumbnail" style="display: block" />
        </template>
    </Galleria>
</template>

<script setup>

/*************** Plugins **************** */

/*************** DATA **************** */

/*************** Computed **************** */

/*************** Props **************** */
const props = defineProps({
    attchements: {
        type: Array,
        required: true,
    }
});

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>