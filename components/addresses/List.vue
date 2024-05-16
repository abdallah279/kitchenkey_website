<template>
    <div class="row gy-4">

        <div class="col-md-6" v-for="address in addresses" :key="address.id">
            <addressesCard :address="address" @deleteModal="openDeleteModal" />
        </div>

        <!-- Delete Modal -->
        <Dialog id="Delete" class="without-close" v-model:visible="deleteModal" modal>
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <div class="right_sec">
                        <p class="fs14 c-dark text-center mb-4">
                            {{ $t('modals.deleteAddress.title') }}
                        </p>
                        <div class="d-flex gap-3 justify-content-center">
                            <button type="button" @click="deleteAddreess" class="btn lg btn-primary">
                                {{ $t('modals.deleteAddress.confirm') }}
                                <span class="spinner-border spinner-border-sm" v-if="deleteLoading" role="status"></span>
                            </button>
                            <button type="button" @click="deleteModal = false" class="btn lg btn-red">
                                {{ $t('modals.deleteAddress.cancel') }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    </div>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

// delete Address
const deleteModal = ref(false);
const addressId = ref(null);

// deleteLoading
const deleteLoading = ref(false);

/*************** Computed **************** */

/******************* Props And Inject *******************/
const props = defineProps({
    addresses: {
        type: Array,
        required: true,
    }
});

/*************** Methods **************** */

// open Modal
const openDeleteModal = (id) => {
    deleteModal.value = true;
    addressId.value = id;
};

// Delete Addreess Function
const deleteAddreess = () => {
    deleteLoading.value = true;

    setTimeout(() => {
        deleteLoading.value = false;
        deleteModal.value = false;
    }, 1000);
};

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>