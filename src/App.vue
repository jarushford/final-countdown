<template>
  <div id="app">
    <Form v-bind="{ getSynonyms }" />
    <h2 class="not-found-msg" ref="notFound">Did you mean:</h2>
    <ul>
      <ListItem
        v-for="(syn, index) in synonyms"
        v-bind:key="`syn-${index}`"
        :syn="syn"
      >
      </ListItem>
    </ul>
  </div>
</template>

<script>
  import Form from './components/Form.vue'
  import ListItem from './components/ListItem.vue'
  import { key } from './utils/apiKey.js'

  export default {
    name: 'app',
    components: {
      Form,
      ListItem
    },
    data() {
      return {
        synonyms: [],
      }
    },
    methods: {
      async getSynonyms(word) {
        this.$data.synonyms = []
        let url = `https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${key}`

        let response = await fetch(url)
        if (response.ok) {
          let result = await response.json()
          if (typeof result[0] === 'string') {
            this.$data.synonyms = result
            this.$refs.notFound.classList.add('show')
          } else {
            this.$refs.notFound.classList.remove('show')
            result.forEach(blob => {
              let synArrays = blob.meta.syns
              synArrays.forEach(arr => {
                this.$data.synonyms.push(...arr)
              })
            })
          }
        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .not-found-msg {
    opacity: 0;
    height: 0px;
  }

  .show {
    height: unset;
    animation: fade-in .4s ease;
    animation-fill-mode: forwards;
  }

  ul {
    list-style: none;
    margin: 50px auto;
    column-count: 2;
    padding-left: 0;
    max-width: 800px;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
