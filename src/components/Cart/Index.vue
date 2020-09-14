<template>
  <div class="mt-5">
    <!-- Total Checkout -->
    <div class="card mb-5 mx-auto" style="width: 18rem;">
        <div class="card-body">
            <div class="d-block w-100">
                <p class="card-text d-inline-block pb-1">Subtotal</p>
                <p class="card-text d-inline-block float-right pb-1">Rp. 14.000</p>
            </div>
            <div class="d-block w-100">
                <p class="card-text d-inline-block pb-1">PPN 10%</p>
                <p class="card-text d-inline-block float-right pb-1">Rp. 14.000</p>
            </div>
            <div class="d-block w-100">
                <p class="card-text d-inline-block pb-0">Total</p>
                <p class="card-text d-inline-block float-right pb-0">Rp. 14.000</p>
            </div>
            <button type="button" class="btn btn-outline-success w-100">Checkout</button>
        </div>
    </div>

    <!-- Selected Item -->
    <div class="card mb-3 mx-auto" :key="post.id" v-for="post in postData" style="max-width: 540px;">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img v-bind:src="post.url" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ post.title }}</h5>
                    <div class="mt-5">
                        <h4 class="card-text d-inline-block m-0 pt-2 pb-2">{{ post.price | currency }}</h4>
                        <span class="float-right">
                            <button class="btn btn-danger">-</button>
                            <p class="d-inline-block mr-3 ml-3">10</p>
                            <button class="btn btn-success">+</button>
                        </span>
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
    name: 'cart',
    components: {
    },
   computed: {
        ...mapState(['postData'])
    },
}
</script>
