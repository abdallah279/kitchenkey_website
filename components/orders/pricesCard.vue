<template>
    <div class="card_style p-4 socail_hover">

        <!-- top -->
        <div class="d-flex align-items-center gap-3 mb-4">
            <img src="@/assets/imgs/slider1.jpg" alt="store logo" class="circle_img flex-shrink-0">

            <div class="content w-100">

                <!--** Title **-->
                <div class="d-flex align-items-center justify-content-between mb-3 gap-2 flex-wrap">

                    <!--** Title And Star **-->
                    <div class="d-flex align-items-center gap-3">
                        <span class="c-dark ff-med">كيتشن ستور</span>

                        <div class="star_con">
                            <i class="pi pi-star-fill"></i>
                            1.215
                        </div>
                    </div>

                    <!-- ** Price ** -->
                    <div class="d-flex align-items-center gap-1">
                        <span class="c-gray">{{ $t('order.card.price') }}: </span>
                        <span class="c-primary">28.000 رس</span>
                    </div>

                </div>

                <!--** Location **-->
                <div class="d-flex align-items-center gap-1">
                    <i class="pi pi-map-marker c-red"></i>
                    <span class="c-gray">الرياض</span>
                </div>

            </div>

        </div>

        <!--** Buttons **-->
        <div class="d-flex gap-3">
            <button type="button" class="btn btn-orange">{{ $t('order.prices.accept') }}</button>
            <button type="button" class="btn btn-red">{{ $t('order.prices.reject') }}</button>
        </div>
    </div>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

/*************** Computed **************** */

/*************** Props **************** */

/*************** Provid Inject **************** */

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>