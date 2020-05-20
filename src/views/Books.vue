<template>
  <section class="books-container">
    <router-link
        v-bind:key="book.id"
        v-for="book in books"
        v-bind:to="'/book/' + book.id"
    ><bookCover v-bind:book="book"/></router-link>
  </section>
</template>

<script>
import BookCover from '@/components/BookCover.vue'

export default {
    components: {
        bookCover: BookCover
    },
    computed: {
        books(){
            return this.$store.state.books;
        }
    }
}
</script>

<style scoped>
.books-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    max-width: 1024px;
    margin: 0 auto;
    padding: 1rem;
}

</style>