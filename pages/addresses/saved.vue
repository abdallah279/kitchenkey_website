<template>
    <main class="saved_Address">

        <div class="bg_info main_padding">
            <div class="container">

                <SharedPageHeader :title="$t('pagesTitle.savedAddresses')" class="mb-5" />

                <AddressesList :addresses="addresses" />

            </div>
        </div>

        <NuxtLink to="/addresses/add" class="btn btn-primary mx-auto lg my-4">{{ $t('address.addBtn') }}</NuxtLink>
    </main>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

// addresses
const addresses = ref([
    {
        id: 1,
        name: 'المنزل',
        desc: 'السعودية , الرياض , حي الملك عبدالعزيز'
    },
    {
        id: 2,
        name: 'العمل',
        desc: 'السعودية , الرياض , حي الملك عبدالعزيز'
    },
]);
/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>