<template>
    <!--** Order Summary **-->
    <div class="bg-white rounded-3 p-4">
        <div class="order_item c-dark ff-med">{{ $t('orderDetails.summary') }}</div>
        <div class="order_item fs13">
            <span class="c-gray">{{ $t('orderDetails.productsValue') }}</span>
            <span class="c-dark">28.000 رس</span>
        </div>
        <div class="order_item fs13">
            <span class="c-gray">{{ $t('orderDetails.deliveryCost') }}</span>
            <span class="c-dark">28 رس</span>
        </div>
        <div class="order_item fs13" v-if="!refund">
            <span class="c-gray">{{ $t('orderDetails.discountCost') }}</span>
            <span class="c-dark">28 رس</span>
        </div>
        <div class="order_item fs13" v-if="!refund">
            <span class="c-gray">{{ $t('orderDetails.addedTax') }}</span>
            <span class="c-dark">28 رس</span>
        </div>
        <div class="order_item fs13">
            <span class="c-gray">{{ $t('orderDetails.total') }}</span>
            <span class="c-dark">28.000 رس</span>
        </div>
    </div>
</template>

<script setup>
/*************** Plugins *****************/

/*************** DATA *****************/

/*************** Computed **************** */

/*************** Props **************** */

const props = defineProps({
    summary: {
        type: Object,
        // required: true,
    },
    refund: {
        type: Boolean,
        default: false
    }
});

/*************** Provid Inject **************** */

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>