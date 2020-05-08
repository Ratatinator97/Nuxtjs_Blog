<template>
  <div class="posts-page">
    <PostList />
  </div>
</template>

<script>
import PostsList from "@/components/Posts/PostsList";

export default {
  components: {
    PostList: PostsList
  }
};
</script>
<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>