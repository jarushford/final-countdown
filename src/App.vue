<template>
  <div id="app">
    <Form v-bind="{ getSynonyms }" />
    <ul>
      <li
        v-for="(syn, index) in synonyms"
        v-bind:key="`syn-${index}`"
      >
        {{ syn }}
      </li>
    </ul>
  </div>
</template>

<script>
  import Form from './components/Form.vue'
  import { key } from './utils/apiKey.js'

  export default {
    name: 'app',
    components: {
      Form
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
          } else {
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

  ul {
    list-style: none;
    margin: 50px auto;
    column-count: 2;
    padding-left: 0;
    max-width: 800px;
  }

  li {
    font-size: 1.8rem;
    margin: 20px;
    animation: fade-in .4s ease;
    transition: .3s ease;
  }

  li:first-child {
    margin-top: 0;
  }

  li:hover {
    cursor: pointer;
    color: rgb(31, 179, 122);
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
