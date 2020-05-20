<template>
<article>
    <router-link :to="{ name: 'books'}"><button>Back</button></router-link>
    <bookCover v-bind:book="book"/>
    <bookDetails v-bind:book="book"/>
</article>
</template>

<script>
import BookCover from '@/components/BookCover.vue'
import BookDetails from '@/components/BookDetails.vue'

export default {
    components: {
        bookCover: BookCover,
        bookDetails: BookDetails
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