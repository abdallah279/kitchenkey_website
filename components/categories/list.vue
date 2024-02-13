
<template>
    <div class="grid-4">
        <categoriesCard v-for="category in categories" :key="category.id" :category="category" />
    </div>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

/*************** Computed **************** */

/******************* Props And Inject *******************/
const props = defineProps({
    categories: {
        type: Array,
        required: true,
    }
});

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>