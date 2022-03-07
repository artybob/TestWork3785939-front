<template>
  <div>
    <router-link to="/action/">create new post</router-link>
    <div v-for="(post,index) in posts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>
        {{post.text}}
      </p>
      <router-link :to="/action/ + post.id">edit</router-link>
      |
      <a href="#" @click="removePost(index)">delete</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "PostsPage",
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      axios.get('http://127.0.0.1:8000/api/post').then(response => {
        this.posts = response?.data;
      }).catch ((e) =>  {
        alert(e.response.data.message);
      });
    },
    removePost(index) {
      axios.delete('http://127.0.0.1:8000/api/post/' + this.posts[index].id).then(response => {
        this.posts.splice(index, 1);
        console.log(response)
      }).catch ((e) =>  {
        alert(e.response.data.message);
      })
    },
  },
}

</script>

<style scoped>

</style>