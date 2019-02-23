<template>
  <form @submit.prevent="handleSubmit">
    <h2>Enter a word below to find it's synonyms</h2>
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
        if (word !== '') {
          this.getSynonyms(word)
        }
        this.$data.word = ''
      }
    }
  }
</script>


<style scoped>
  input {
    width: 250px;
    height: 35px;
    margin: 10px;
    font-size: 1.2rem;
    padding-left: 7px;
    outline: none;
  }

  button {
    border: none;
    background: rgb(31, 179, 122);
    height: 42px;
    width: 150px;
    border-radius: 8px;
    margin-left: 10px;
    font-size: 1.4rem;
    cursor: pointer;
    outline: none;
    transition: .3s ease;
  }

  button:hover {
    opacity: .8;
  }
</style>
