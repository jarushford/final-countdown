<template>
  <form @submit.prevent="handleSubmit">
    <h2>Enter a word below to find it's synonyms!</h2>
    <input type="text" v-model="word" />
    <button>Go</button>
  </form>
</template>


<script>
  export default {
    name: 'Form',
    props: ['getSynonyms'],
    data() {
      return {
        word: ''
      }
    },
    methods: {
      handleSubmit() {
        let word = this.$data.word
        this.$data.word = word
        this.getSynonyms(word)
      }
    }
  }
</script>


<style scoped>

</style>
