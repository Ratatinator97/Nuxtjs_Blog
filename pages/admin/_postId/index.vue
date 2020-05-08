<template>
  <div class="admin-post-age">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
  layout: "admin",
  components: {
    AdminPostForm
  },

  data() {
    return {
      loadedPost: {
        author: "Alex",
        title: "Awesome Post",
        content: "Usefull content",
        thumbnailLink:
          "https://www.euractiv.com/wp-content/uploads/sites/2/2017/08/Motherboard-Tech-Chip-Board-Computer-Technology-822056.jpg"
      }
    };
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>