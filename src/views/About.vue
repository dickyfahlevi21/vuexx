<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul class="posts">
      <li
        v-for="post in posts"
        :key="post.title"
        class="post-item"
      >
          <h1>{{ post.title }}</h1>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    posts () {
      return this.$store.state.postData
    }
  }
}
</script>
