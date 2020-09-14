<template>
  <div>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <router-link class="breadcrumb-item" :to="`/`">Home</router-link>
            <li class="breadcrumb-item active" aria-current="page">Cart</li>
        </ol>
    </nav>
    <div class="mt-5">
        <cart-checkout/>
        <!-- Selected Item -->
        <div class="card mb-3 mx-auto" :key="post.id" v-for="post in postData" style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img v-bind:src="post.url" class="card-img">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ post.title }}</h5>
                        <div class="mt-5">
                            <h4 class="card-text d-inline-block m-0 pt-2 pb-2">{{ post.price | currency }}</h4>
                            <span class="float-right">
                                <button class="btn btn-danger" @click="decrease">-</button>
                                <p class="d-inline-block mr-3 ml-3">{{ counter }}</p>
                                <button class="btn btn-success" @click="increase">+</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import CartCheckout from "@/components/Cart/CartCheckout.vue"
import { mapState } from 'vuex'
export default {
    name: 'cart',
    components: {
        CartCheckout
    },
    data(){
        return {
            counter: 1,
        }
    },
    computed: {
        ...mapState(['postData']),
    },
    methods: {
        increase() {
            this.counter++;
        },
        decrease() {
            this.counter--;
        }
    }
}
</script>
