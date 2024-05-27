<template>
    <div class="progress-container mb-4">

        <!--**** Confirm ****-->
        <div class="progress-item cart" :class="activeTab === 3 ? 'active' : ''">
            <div class="circle">
                3
            </div>
            <span class="text">{{ $t('cart.progress.confirm') }}</span>
            <span class="line"></span>
        </div>

        <!--**** Payment ****-->
        <div class="progress-item cart" :class="activeTab === 2 ? 'active' : ''">
            <div class="circle">
                2
            </div>
            <span class="text">{{ $t('cart.progress.payment') }}</span>
            <span class="line"></span>
        </div>

        <!--**** Address ****-->
        <div class="progress-item cart" :class="activeTab === 1 ? 'active' : ''">
            <div class="circle">
                1
            </div>
            <span class="text">{{ $t('cart.progress.address') }}</span>
            <span class="line"></span>
        </div>

    </div>
</template>

<script setup>
/*************** Plugins *****************/

/*************** DATA *****************/

/*************** Computed **************** */

/*************** Props **************** */

const props = defineProps({
    activeTab: {
        type: Number,
        default: 1
    }
});

/*************** Provid Inject **************** */

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>