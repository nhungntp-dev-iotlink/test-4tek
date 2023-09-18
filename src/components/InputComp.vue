<script setup lang="ts">
defineProps<{
  isGosh?: boolean;
  placeholder?: string;
}>();
</script>

<template>
  <div :class="'input__container' + (isGosh ? ' input__gosh' : '')">
    <input :placeholder="placeholder ? $t(placeholder) : ''" name="" id="" />
    <img
      class="input__icon"
      :src="
        isGosh
          ? 'src/assets/icon/arrow-right-white.svg'
          : 'src/assets/icon/arrow-right.svg'
      "
    />
  </div>
</template>

<style scoped>
@import "../assets/css/input_common.css";
</style>
