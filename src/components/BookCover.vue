<template>
  <article class="cover" v-bind:style="{background: book.color}">
      <h1>{{book.title}}</h1>
      <h5>{{book.author}}</h5>
  </article>
</template>

<script>
export default {
  props: {
    book: Object
  }
}
</script>

<style scoped>
article {
  padding: 1rem;
  background-color: rgb(230, 230, 230);
  min-height: 200px;
  max-width: 50%;
}
</style>