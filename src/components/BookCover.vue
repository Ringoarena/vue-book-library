<template>
  <article class="cover" :style="{background: book.color}">
    <div class="line"></div>
    <div class="intro">
      <h1>{{book.title}}</h1>
      <h5>{{book.author}}</h5>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    book: Object
  }
}
</script>


// todo
<style scoped>
article {
  padding: 1rem;
  background-color: rgb(230, 230, 230);
  min-height: 200px;
  max-width: 50%;
}
</style>