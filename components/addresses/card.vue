<template>
    <div>

        <div class="card_style pd">
            <h4 class="fs14 mb-3 ff-med c-gray">{{ address.name }}</h4>
            <p class="c-gray_mid mb-3">{{ address.desc }}</p>
            <div class="d-flex gap-3">
                <NuxtLink :to="{ path: '/addresses/add', query: { id: address.id } }" type="button"
                    class="btn btn-primary md">
                    {{ $t('address.editBtn') }}
                </NuxtLink>
                <button @click="emit('deleteModal', address.id)" type="button" class="btn btn-red md">{{ $t('address.deleteBtn') }}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

/*************** Computed **************** */

/*************** Emits **************** */
const emit = defineEmits(['deleteModal']);

/******************* Props And Inject *******************/
const props = defineProps({
    address: {
        type: Object,
        required: true,
    }
});

/*************** Methods **************** */



/*************** Mounted **************** */
</script>

<style lang="scss" scoped></style>