<template>
  <t-button></t-button>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="text-blue-700">aaa</div>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TButton from "./components/TButton.vue";

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    TButton
  }
})
</script>