<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data: () => ({
    menuOpen: false,
  }),
});
</script>

<script setup lang="ts">
import HeaderLang from "../components/HeaderLang.vue";
</script>

<template>
  <div class="header">
    <img src="../assets/logo/header_logo.svg" />
    <ul class="header__menu">
      <li class="header__menu--item">{{ $t("header.about_us") }}</li>
      <li class="header__menu--item">{{ $t("header.games") }}</li>
      <li class="header__menu--item">{{ $t("header.partners") }}</li>
      <li class="header__menu--item">{{ $t("header.contact_us") }}</li>
      <HeaderLang />
    </ul>
  </div>

  <div class="header__mobile">
    <div class="container">
      <div class="container__mainHeader">
        <div class="mainHeader__logo">
          <img src="../assets/logo/header_logo.svg" />
        </div>
        <div class="mainHeader__hamburger" @click="menuOpen = true">
          <img src="../assets/icon/hamburger.svg" alt="hamburger" />
        </div>
      </div>
      <div class="container__dropdown" v-if="menuOpen">
        <div class="dropdown__header">
          <div class="header__language">
            <HeaderLang />
          </div>
          <div class="header__close" @click="menuOpen = false">
            <img src="../assets/icon/close.svg" />
          </div>
        </div>
        <ul class="dropdown__menu">
          <li class="dropdown__menu--item">{{ $t("header.about_us") }}</li>
          <li class="dropdown__menu--item">{{ $t("header.games") }}</li>
          <li class="dropdown__menu--item">{{ $t("header.partners") }}</li>
          <li class="dropdown__menu--item">{{ $t("header.contact_us") }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/css/header.css";
</style>
