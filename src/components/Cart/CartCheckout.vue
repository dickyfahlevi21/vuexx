<template>
    <!-- Total Checkout -->
    <div class="card mb-5 mx-auto" style="width: 18rem;">
        <div class="card-body">
            <div class="d-block w-100">
                <p class="card-text d-inline-block pb-1">Subtotal</p>
                <p class="card-text d-inline-block float-right pb-1">{{ subTotalPrice.calcSub | currency }}</p>
            </div>
            <div class="d-block w-100">
                <p class="card-text d-inline-block pb-1">PPN 10%</p>
                <p class="card-text d-inline-block float-right pb-1">{{ subTotalPrice.ppn | currency }}</p>
            </div>
            <div class="d-block w-100">
                <p class="card-text d-inline-block pb-0">Total</p>
                <p class="card-text d-inline-block float-right pb-0">{{ subTotalPrice.total | currency }}</p>
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
            let calcSub = 0
            subTotal.forEach((sub) => {calcSub += sub.price});
            let ppn = calcSub * 10 / 100  
            let total = calcSub - ppn
            return { calcSub, ppn, total }
        }
    }
}
</script>