<template>
  <section class="posts-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://www.euractiv.com/wp-content/uploads/sites/2/2017/08/Motherboard-Tech-Chip-Board-Computer-Technology-822056.jpg"
      title="Hello there"
      previewText="This is my first post!"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://www.euractiv.com/wp-content/uploads/sites/2/2017/08/Motherboard-Tech-Chip-Board-Computer-Technology-822056.jpg"
      title="Hello therrzearazerazerazer"
      previewText="This is mazerazerazerazery first post!"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://www.euractiv.com/wp-content/uploads/sites/2/2017/08/Motherboard-Tech-Chip-Board-Computer-Technology-822056.jpg"
      title="Hello thereazerazerazer"
      previewText="This is my first azerazerazerazerpost!"
    />
  </section>
</template>
<script>
import PostPreview from "@/components/Posts/PostPreview";

export default {
  components: {
    PostPreview: PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>