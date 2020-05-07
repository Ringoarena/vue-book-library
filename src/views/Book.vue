<template>
<article>
    <router-link v-bind:to="'/'"><button>Back</button></router-link>
    <bookCover v-bind:book="book"/>
    <section class="details">
        <h1>{{book.title}}</h1>
        <p>By {{book.author}}</p>
        <p>{{book.plot}}</p>
    </section>
</article>
</template>

<script>
import BookCover from '@/components/BookCover.vue'

export default {
    components: {
        bookCover: BookCover
    },
    data(){
        return {
            bookId: this.$route.params.id
        }
    },
    computed: {
        book(){
            return this.$root.centralBooks.find(book => book.id == this.bookId);
        }
    }
}
</script>

<style scoped>
</style>