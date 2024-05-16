<template>
    <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-9">

            <!--** Profile Image **-->
            <div class="profile_img_con mx-auto mb-5">
                <img :src="image" alt="profile image" class="profile_img_background">
                <div class="img">
                    <img :src="image" alt="profile image" class="profile_img_center">
                </div>
                <label for="profileImg" class="user-camera">
                    <input type="file" name="image" @change="uploadImage" id="profileImg" accept="image/*"
                        class="hidden-input validInputs d-none">
                    <i class="pi pi-upload"></i>
                </label>
            </div>

            <div class="input-g">

                <label class="main-label">
                    {{ $t('profileForms.name.text') }}
                    <span class="c-red">*</span>
                </label>

                <div class="main-input">
                    <input type="text" class="input-me" name="name" :placeholder="$t('profileForms.name.placeholder')">

                </div>

            </div>

            <button class="btn btn-primary minw-100 lg">
                {{ $t('formBtns.save') }}
                <span class="spinner-border spinner-border-sm" v-if="loading" role="status" aria-hidden="true"></span>
            </button>

        </div>
    </div>
</template>

<script setup>
/*************** Plugins **************** */

/*************** DATA **************** */
import proImage from "@/assets/imgs/profile_img.jpg";

// loading
const loading = ref(false);

// Profile data
const image = ref(proImage);

/*************** Computed **************** */

/*************** Props **************** */

/*************** Methods **************** */

// uploadImage Function
function uploadImage(e) {
    const userImage = e.target.files[0];
    const reader = new FileReader();
    if (userImage) {
        reader.readAsDataURL(userImage);
        reader.onload = e => {
            image.value = e.target.result;
        };
    } else {
        image.value = require('@/assets/imgs/profile.png');
    }
}

/*************** Mounted **************** */

</script>

<style lang="scss" scoped></style>