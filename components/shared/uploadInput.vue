<template>
    <!-- Images -->
    <div class="main-input">
        <label class="input-me photo-input">
            <input type="file" :multiple="multiple" @change="uploadImgs" class="hidden-input" accept="image/*">
            <span>{{ placeholder }}</span>
        </label>
        <i class="pi pi-upload main-icon"></i>
    </div>

    <div class="d-flex flex-wrap gap-3">
        <div class='hidden-img mt-4' :class="{small : multiple}" v-for="(img, i) in images" :key="img">
            <img :src='img.previewUrl' :class="`img${i}`" :alt="img.name" />
    
            <span class='remove-img' @click="removeImage(i)">
                <i class="pi pi-times"></i>
            </span>
        </div>
    </div>
</template>

<script setup>
/******************* Plugins *******************/

/******************* Data *******************/
// images
const images = ref([]);

/******************* Provide && Inject *******************/
/******************* Emits *******************/
const emit = defineEmits(['update']);

/******************* Props *******************/
const props = defineProps({
    multiple: {
        type: Boolean,
        default: false
    },
    images: {
        type: Array,
        default: () => { return []; }
    },
    placeholder: {
        type: String,
        default: 'ارفق صورة'
    }
});

/******************* Methods *******************/

// Upload Imgs
const uploadImgs = (event) => {
    if(!props.multiple) {
        images.value = [];
    }

    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
            images.value.push({
                file: files[i],
                previewUrl: e.target.result
            });
        };
        reader.readAsDataURL(files[i]);
    }

    emit('update', images.value);
}

// Remove Img
function removeImage(index) {
    images.value.splice(index, 1);
    emit('update', images.value);
}

/******************* Computed *******************/

/******************* Watch *******************/

/******************* Mounted *******************/
onMounted(() => {
    images.value = props.images;
    emit('update', images.value);
});

</script>

<style></style>