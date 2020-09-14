<template>
    <div>
        <div class="container mt-5 mb-4">
            <h1 class="text-center mb-3">Toko Kelontong wkwkwk</h1>
            <div class="float-right wrapper-cart mb-3 mr-2">
                <router-link :to="`carts`" class="btn btn-info">
                    <i class="fas fa-cart-arrow-down icon-cart"></i>
                </router-link>
                <p class="text-cart">{{ totalItemCart }}</p>
            </div>
            <search-box />
        </div>
        <!-- List Item -->
        <div class="container">
            <div class="row">
                <div :key="post.id" v-for="post in postData" class="card col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mt-4 p-0">
                    <router-link :to="`detail/${post.id}`">
                        <img v-bind:src="post.url" class="w-100 mx-auto">
                    </router-link>
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
import SearchBox from '@/components/Home/SearchBox.vue'
export default {
    name: 'ListItem',
    components: {
        SearchBox
    },
    computed: {
        ...mapState(['postData']),
        totalItemCart() {
            let totalItem = this.postData.length
            return totalItem
        }
    },
}
</script>
<style scoped>
    .position {
        bottom: 0;
        left: 0;
        right: 0;
    }
    .wrapper-cart {
        width: 36px;
        height: 30px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        position: relative;
    }
    .icon-cart {
        width: 20px;
        height: 20px;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: 20% 20%;
    }
    .text-cart {
        min-width: 25px;
        min-height: 25px;
        color: rgb(255, 255, 255);
        font-size: 12px;
        font-weight: 700;
        line-height: 1.9;
        text-align: center;
        background-color: rgb(239, 20, 74);
        border: 2px solid rgb(255, 255, 255);
        border-radius: 18px;
        position: absolute;
        top: -10px;
        right: -8px;
        padding: 0px 4px;
        transform: translate(30%, -8%);
    }
</style>