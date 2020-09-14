<template>
    <div>
        <div class="container mt-5 mb-4">
            <h1 class="text-center mb-3">Toko Kelontong wkwkwk</h1>
            <input class="form-control form-control-lg" type="text" placeholder="Cari Barangmu Disini...">
        </div>
        <!-- List Item -->
        <div class="container">
            <div class="row">
                <div :key="post.id" v-for="post in postData" class="card col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mt-4 p-0">
                    <img v-bind:src="post.url" class="w-100 mx-auto">
                    <div class="card-body position-relative" style="height: 130px;">
                        <h5 class="card-title mx-auto" >{{ post.title }}</h5>
                        <div class="d-inline-block w-100 mt-4 position-absolute position pl-3 pr-3 pb-1">
                            <h3 class="card-text mx-auto d-inline-block">{{ post.price | currency }}</h3>
                            <button @click="$emit('click', post)" class="card-text w-50 d-inline-block mx-auto btn btn-outline-primary text-center pb-1 float-right">Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'ListItem',
    computed: {
        ...mapState(['postData'])
    },
}
</script>
<style scoped>
    .position {
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>