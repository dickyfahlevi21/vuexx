<template>
  <div>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <router-link class="breadcrumb-item" :to="`/`">Home</router-link>
            <li class="breadcrumb-item active" aria-current="page">Detail</li>
        </ol>
    </nav>
    <div class="mx-auto">
        <div class="text-center">
            <img v-bind:src="dataPost.url" class="img-detail mb-2 mt-2">
            <p class="m-0">{{ dataPost.title }}</p>
            <h3 class="m-0">{{ dataPost.price | currency }}</h3>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DetailItem',
  components: {
  },
  data() {
    return {
        dataPost: []
    }
  },
  computed: {
      ...mapState(['postData'])
  },
  created(){
    this.dataPost = this.postData.filter((photo) => photo.id == this.$route.params.id)[0];
  }  
}
</script>

<style scoped>

.img-detail {
    width: 30%;
    height: 30%;
}
</style>