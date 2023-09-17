<script setup lang="ts">
defineProps<{
  theme?: string;
  placeholder?: string;
}>();
</script>

<template>
  <div class="input__container">
    <input :placeholder="placeholder? $t(placeholder): null" name="" id="" />
    <img class="input__icon" src="../assets/icon/arrow-right.svg" />
  </div>
</template>

<style scoped>
@import "../assets/css/imput_common.css";
</style>
