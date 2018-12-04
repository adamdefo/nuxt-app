<template>
  <section class="section container">
    <div><input type="text" /></div>
    <div><button @click="greet(title)">Click</button></div>
    <div>
      <ul>
        <li v-for="post in posts" v-bind:key="post.id">
          <h2 class="ttl">{{ post.title }}</h2>
          <p class="body">{{ post.body }}</p>
          <nuxt-link :to="{path: '/' }">Read more</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  data: () => {
    return {
      title: 'My title'
    }
  },
  // async data ({ params }) {
  //   let { data } = await axios.get(`https://my-api/posts/${params.id}`)
  //   return { 
  //     title: data.title
  //   }
  // },
  computed: mapState([
    'hello', 'res', 'posts'
  ]),
  components: {
  },
  methods: {
    ...mapActions(['greet'])
  },
  mounted() {
    this.$store.dispatch('getPosts')
  }
}
</script>

<style>
  .container {
    width: 1000px;
    margin: 0 auto;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 15px;
  }

  h2:first-letter {
    text-transform: uppercase
  }
</style>

