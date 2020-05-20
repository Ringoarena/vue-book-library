<template>
  <section>
    <h1>{{book.title}}</h1>
    <p>By {{book.author}}</p>
    <p>{{book.plot}}</p>
  </section>
</template>

<script>
export default {
    props: {
        book: Object
    }
};
</script>

<style scoped>
section {
    border: 1px solid black;
}
</style>