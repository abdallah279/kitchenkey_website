<template>
    <div v-if="!loading">
        {{ orderName }}
        <OrdersCard v-for="order in 3" :key="order" />
    </div>

    <!--**** Skeleton ****-->
    <div v-else>
        <ordersSkeleton v-for="order in 3" :key="order" />
    </div>

    <!--**** Paginator ****-->
    <div v-if="showPaginate">
        <Paginator :rows="pageLimit" @page="onPaginate" :totalRecords="totalPage" class="mt-4" dir="ltr" />
    </div>

</template>

<script setup>


/******************* Plugins *******************/

// success response
const { response } = responseApi();

// Toast
const { errorToast } = toastMsg();

// Axios
const axios = useApi();

// pinia store
// import { useAuthStore } from '~/stores/auth';

/*************** DATA *****************/

// Store
// const store = useAuthStore();
// const { token } = storeToRefs(store);

// // config
// const config = {
//     headers: { Authorization: `Bearer ${token.value}` }
// };

// loading
const loading = ref(false);

// orders
const orders = ref([]);

// Paginator
const currentPage = ref(1);
const pageLimit = ref();
const totalPage = ref();

/*************** Props *****************/

const props = defineProps({
    orderName: {
        type: String,
    }
});

/******************* Methods *******************/

const getOrders = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 500);
}

// getOrders
// const getOrders = async () => {
//     loading.value = true;
//     await axios.get(`${props.ordersName}?page=${currentPage.value}`, config).then(res => {
//         if (response(res) == "success") {
//             orders.value = res.data.data.data;
//             totalPage.value = res.data.data.pagination.total_items;
//             pageLimit.value = res.data.data.pagination.per_page;
//         }
//         loading.value = false;
//     }).catch(err => {
//         console.error(err);
//     });
// }

// Paginate Function
const onPaginate = (e) => {
    loading.value = true;
    currentPage.value = e.page + 1;
    window.scrollTo(0, 0);
    // getOrders();
};

/******************* Computed *******************/

let showPaginate = computed(() => {
    return totalPage.value > pageLimit.value;
});

/******************* Watch *******************/

watch(() => props.orderName, () => {
    getOrders();
});

/******************* Mounted *******************/
onMounted(async () => {
    // await getOrders();
    getOrders();
});

</script>

<style lang="scss" scoped></style>