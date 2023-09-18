<template>
  <div class="header__lang">
    <div class="header__menu" @click="switchLang(false)">
      <img :src="`/icon/${$i18n.locale}.svg`" />
      <img src="/icon/arrow-down.svg" />
    </div>

    <div v-show="!hiddenMenu" class="lang__menu" model="$i18n.locale">
      <div
        class="lang__menu--item"
        v-for="(lang, i) in langs"
        :key="`Lang${i}`"
        :value="lang.code"
        @click="
          switchLang(true);
          $i18n.locale = lang.code;
        "
      >
        <img
          v-visible="lang.code == $i18n.locale"
          src="/icon/tick.svg"
        />
        <img class="lang__flag" :src="lang.flag" />
        <div class="lang__menu--name">{{ lang.text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const langs = [
  { code: "vn", text: "vietnamese", flag: "/icon/vn.svg" },
  { code: "en", text: "english", flag: "/icon/en.svg" },
];
const hiddenMenu = ref(true);

const switchLang = (status: boolean) => {
  hiddenMenu.value = status;
};
</script>

<style scoped>
@import "../assets/css/header_lang.css";
</style>
