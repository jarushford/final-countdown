<template>
  <li @click="handleClick">{{ syn }}</li>
</template>


<script>
  export default {
    name: 'ListItem',
    props: ['syn', 'getSynonyms'],
    methods: {
      handleClick(e) {
        this.getSynonyms(e.target.innerText)
      }
    }
  }
</script>


<style scoped>
  li {
    font-size: 1.7rem;
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
