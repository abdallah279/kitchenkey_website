<template>
    <main class="notification main_padding">
        <div class="container">

            <SharedPageHeader :title="$t('pagesTitle.notifications')" class="mb-5" />

            <div class="row">
                <div class="col-lg-9 mx-auto">
                    <div class="notification_items">
                        <NotificationsItem v-for="item in notifications" :notItem="item" :key="item" />
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */

// notifications
const notifications = ref([
    {
        id: 1,
        body: 'تم الموافقة على طلبك رقم 1223 قم بإتمام الدفع',
        data: {
            order_id: 1,
            type: 'order'
        }
    },
    {
        id: 1,
        body: 'تم تسجيل الدخول بنجاح',
        data: {
            order_id: 1,
            type: 'login'
        }
    },
])
/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>