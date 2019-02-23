<template>
  <div id="app">
    <div class="fixed">
      <Form v-bind="{ getSynonyms }" />
      <h1 class="current-word" ref="current"></h1>
      <h2 class="not-found-msg" ref="notFound">Did you mean:</h2>
      <h2 class="not-found-msg" ref="error">Error processing your request</h2>
    </div>
    <ul>
      <ListItem
        v-bind="{ getSynonyms }"
        v-for="(syn, index) in synonyms"
        v-bind:key="`syn-${index}`"
        :syn="syn"
      >
      </ListItem>
    </ul>
  </div>
</template>

<script>
  import Form from './Form.vue'
  import ListItem from './ListItem.vue'
  import { key } from '../utils/apiKey.js'

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
        this.$refs.current.innerText = word
        let url = `https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${key}`
        let response = await fetch(url)
        
        if (response.ok) {
          let result = await response.json()
          if (typeof result[0] === 'string') {
            this.$data.synonyms = result
            this.$refs.notFound.classList.add('show')
          } else {
            this.$refs.notFound.classList.remove('show')
            this.$refs.error.classList.remove('show')
            result.forEach(blob => {
              let synArrays = blob.meta.syns
              synArrays.forEach(arr => {
                this.$data.synonyms.push(...arr)
              })
            })
          }
        } else {
          this.$refs.error.classList.add('show')
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

  .fixed {
    position: fixed;
    top: 0;
    width: 100%;
    background: white;
    padding: 10px 0;
  }

  .current-word {
    color: rgb(31, 179, 122);
    margin-bottom: 10px;
    font-size: 2.4rem;
    text-align: center;
  }
  .not-found-msg {
    opacity: 0;
    height: 0px;
    margin: 5px
  }

  .show {
    height: unset;
    animation: fade-in .4s ease;
    animation-fill-mode: forwards;
  }

  ul {
    list-style: none;
    margin: 300px auto 50px;
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

  @media screen and (max-width: 550px) {
    ul {
      column-count: 1;
    }
  }
</style>
