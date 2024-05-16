<template>
    <main class="wallet main_padding">
        <div class="container">

            <SharedPageHeader :title="$t('pagesTitle.wallet')" class="mb-5" />

            <div class="row">
                <div class="col-lg-8 col-xl-6 mx-auto">
                    <div class="done_style p-4">
                        <img class="wallet_img" src="~/assets/imgs/wallet.png" alt="wallet image">

                        <div class="d-flex justify-content-between">
                            <div>
                                <h5 class="fs13 mb-3">{{ $t('wallet.current') }}</h5>
                                <span class="c-dark ff-med">14.000 رس</span>
                            </div>
                            <button class="btn btn-primary sm">{{ $t('wallet.add') }}</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>