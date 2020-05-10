<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    return axios
      .get("https://nuxt-blog-429ca.firebaseio.com/posts.json")
      .then(response => {
        const postsArray = [];
        for (const key in response.data) {
          postsArray.push({ ...response.data[key], id: key });
        }
        this.$store.commit("setPosts", postsArray);
      })
      .catch(e => console.log(e));
  }
};
</script>

<style>
html {
  font-family: "Poppins", sans-serif;
  margin: 0px;
}
</style>
