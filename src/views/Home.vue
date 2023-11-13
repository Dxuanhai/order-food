<template>
  <h1 class="text-3xl font-bold underline">
    <input type="text" />
  </h1>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js";

const meals = computed(() => store.state.meals);
</script>
