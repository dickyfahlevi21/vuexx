<template>
    <!-- Total Checkout -->
    <div class="card mb-5 mx-auto" style="width: 18rem;">
        <div class="card-body">
            <div class="d-block w-100">
                <p class="card-text d-inline-block pb-1">Subtotal</p>
                <p class="card-text d-inline-block float-right pb-1">Rp. 14.000</p>
                {{ subTotalPrice }}
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
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'CartCheckout',
    computed: {
        ...mapState(['postData']),
        subTotalPrice() {
            let subTotal = this.postData
            console.log(subTotal)
            // let sub = subTotal.forEach(sub => {sub})
            let sub = subTotal.forEach(function(sub) { 
                console.log(sub);
            });
            console.log(sub)
            return sub
        }
    }
}
</script>