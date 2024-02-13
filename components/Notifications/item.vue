<template>
    <div class="not-item">
        <p class="body">
            {{ notItem.body }}
        </p>

        <div class="icon">
            <i class="pi pi-trash"></i>
        </div>
    </div>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

/*************** Computed **************** */

/*************** Props **************** */

const props = defineProps({
    notItem: Object
});

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>