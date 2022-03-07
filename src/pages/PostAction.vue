<template>
  <div>
    <router-link to="/">Return back</router-link>
    <form>
      <p>
        <label for="title">title: </label>
        <input
            id="title"
            v-model="post.title"
            type="text"
            name="name"
        >
      </p>

      <p>
        <label for="text">text: </label>
        <input
            id="text"
            v-model="post.text"
            type="text"
            name="name"
        >
      </p>

      <p>
        <a
            href="#"
            type="button"
            @click="submitForm()"
        >Submit</a>
      </p>

    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostAction",
  data() {
    return {
      post: {title: '', text: ''},
      postId: this.$route.params.id,
    }
  },
  mounted() {
    if(this.postId) {
      this.getPost();
    }
  },
  methods: {
    getPost() {
      axios.get('http://127.0.0.1:8000/api/post/' + this.postId).then(response => {
        this.post = response?.data;
      }).catch ((e) =>  {
        alert(e.response.data.message);
      });
    },
    createPost() {
      axios.post('http://127.0.0.1:8000/api/post', this.post).then(response => {
        alert(response.data.message);
      }).catch((e) => {
        alert(e.response.data.message)
      });
    },
    updatePost() {
      axios.patch('http://127.0.0.1:8000/api/post/'+ this.postId, this.post).then(response => {
        alert(response.data.message);
      }).catch ((e) =>  {
        alert(e.response.data.message);
      });
    },
    submitForm() {
      this.postId ? this.updatePost() : this.createPost();
      return false
    }
  },

}
</script>

<style scoped>

</style>