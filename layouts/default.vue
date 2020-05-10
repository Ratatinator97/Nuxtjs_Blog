<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav=false" />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader";
import TheSidenav from "@/components/Navigation/TheSidenav";
import axios from "axios";
export default {
  components: {
    TheHeader,
    TheSidenav
  },
  data() {
    return {
      displaySidenav: false
    };
  },
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
