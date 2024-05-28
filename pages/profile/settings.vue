<template>
    <main class="contact_page main_padding">

        <SharedPageHeader :title="$t('pagesTitle.settings')" class="mb-5" />

        <section>
            <div class="container">
                <div class="row gy-4">
                    <div class="col-12 col-xl-3 col-lg-4">
                        <div class="profile_sidebar">

                            <NuxtLink to="/profile/settings/editProfile" class="profile_link">
                                {{ $t('profileSidebar.profile') }}
                                <i class="pi pi-angle-left icon"></i>
                            </NuxtLink>

                            <NuxtLink to="/profile/settings/editPhone" class="profile_link">
                                {{ $t('profileSidebar.editPhone') }}
                                <i class="pi pi-angle-left icon"></i>
                            </NuxtLink>

                            <NuxtLink to="/profile/settings/editEmail" class="profile_link">
                                {{ $t('profileSidebar.editEmail') }}
                                <i class="pi pi-angle-left icon"></i>
                            </NuxtLink>

                            <NuxtLink to="/profile/settings/editPassword" class="profile_link">
                                {{ $t('profileSidebar.editPassword') }}
                                <i class="pi pi-angle-left icon"></i>
                            </NuxtLink>

                        </div>

                        <!-- Notifications -->
                        <div class="profile_sidebar mt-3">
                            <div class="profile_link  d-flex align-items-center justify-content-between">
                                {{ $t('profileSidebar.notifications') }}
                                <div class="switch_con" @click="toggleNotifications">
                                    <input type="checkbox" checked id="notificationsActive">
                                    <!-- <input type="checkbox" :checked="authUser.is_notify" id="notificationsActive"> -->
                                </div>
                            </div>
                        </div>

                        <button type="button" @click="deleteAccount = true"
                            class="btn clear_btn ff-med modal_btn mt-3">{{ $t('profileSidebar.delete') }}</button>

                    </div>
                    <div class="col-12 col-xl-9 col-lg-8">
                        <div class="section_style pd">

                            <!-- Nested Pages -->
                            <NuxtPage />

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Delete Modal -->
        <Dialog id="Delete" class="without-close" v-model:visible="deleteAccount" modal>
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <div class="right_sec">
                        <p class="fs14 c-dark text-center mb-4">
                            {{ $t('modals.deleteAccount.title') }}
                        </p>
                        <div class="d-flex gap-3 justify-content-center">
                            <button type="button" @click="deleteAccountFunc" class="btn lg btn-primary">
                                {{ $t('modals.deleteAddress.confirm') }}
                                <span class="spinner-border spinner-border-sm" v-if="deleteLoading"
                                    role="status"></span>
                            </button>
                            <button type="button" @click="deleteAccount = false" class="btn lg btn-red">
                                {{ $t('modals.deleteAddress.cancel') }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>

    </main>
</template>

<script setup>

/******************* Plugins *******************/

// response
// const { response } = responseApi();

// const { toastNotify } = toastMsg()

// Axios
// const axios = useApi();

// Auth Store
// const authStore = useAuthStore();
// const { authUser, token } = storeToRefs(authStore);

/*************** DATA *****************/

// config
// const config = {
//     headers: {
//         Authorization: `Bearer ${token.value}`
//     }
// }

// deleteAccount
const deleteAccount = ref(false);
const deleteLoading = ref(false);

/*************** Props *****************/

/******************* Methods *******************/

// toggle Notifications
// const toggleNotifications = async () => {
//     try {
//         const res = await axios.patch(`switch-notify`, '', config);
//         if (response(res).status == "success") {
//             authUser.value.is_notify = res.data.data.notify;
//             toastNotify(res.data.msg, "success");
//         } else {
//             toastNotify(res.data.msg, "error");
//         }
//     } catch (err) {
//         console.error(err);
//     }
// }

// deleteAccountFunc
const deleteAccountFunc = () => {
    deleteLoading.value = true;
    setTimeout(() => {
        deleteLoading.value = false;
        navigateTo('/');
    }, 1000);
}

/******************* Computed *******************/

/******************* Watch *******************/

/******************* Mounted *******************/

</script>

<style lang="scss" scoped></style>