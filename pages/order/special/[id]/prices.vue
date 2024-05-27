<template>
    <main>

        <!--**** Order Details ****-->
        <section class="section_bg main_padding">

            <div class="container">
                <SharedPageHeader :title="$t('pagesTitle.prices')" class="mb-5" />

                <div class="row gy-3">
                    <div class="col-lg-6" v-for="i in 3" :key="i">
                        <ordersPricesCard />
                    </div>
                </div>

            </div>
        </section>


        <!--**** Buttons ****-->
        <section class="bg-white py-4">
            <div class="container">
                <div class="d-flex align-items-center justify-content-center gap-3 flex-wrap">
                    <NuxtLink :to="`/order/special/${id}`" class="btn xl btn-primary">{{ $t('order.return') }}</NuxtLink>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

const { id } = useRoute().params;

/*************** Computed **************** */

/*************** Props **************** */

/*************** Provid Inject **************** */

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>