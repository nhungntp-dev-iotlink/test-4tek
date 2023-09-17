<script setup lang="ts">
const LIST_STATISTICAL_NUMBER = ["users", "games"];

const LIST_DESCRIPTION = [
  {
    icon: "src/assets/icon/calendar-tick.svg",
    key: "timer",
  },
  {
    icon: "src/assets/icon/design.svg",
    key: "design",
  },
  {
    icon: "src/assets/icon/team.svg",
    key: "team",
  },
];
</script>

<template>
  <div class="about">
    <div class="about__left">
      <div class="title">{{ $t("about.title") }}</div>
      <div class="description">{{ $t("about.desc") }}</div>

      <div class="statistical">
        <div
          class="statistical__item"
          v-for="item in LIST_STATISTICAL_NUMBER"
          key="{{item.name}}"
        >
          <div class="statistical__item--number">
            {{ $t(`about.${item}.total`)
            }}<span class="million" v-show="item != 'games'">{{
              $t(`about.${item}.million`)
            }}</span
            ><span>{{ $t(`about.${item}.plus`) }}</span>
          </div>
          <div class="statistical__item--text">
            {{ $t(`about.${item}.title`) }}
          </div>
        </div>
      </div>
    </div>
    <div class="about__right">
      <div class="right__list">
        <div
          class="list__item"
          v-for="item in LIST_DESCRIPTION"
          key="{{item.title}}"
        >
          <div class="item__icon">
            <img :src="item.icon" :alt="item.key" />
          </div>
          <div class="item__content">
            <div class="item__content--title">
              {{ $t(`about.${item.key}.title`) }}
            </div>
            <div class="item__content--caption">
              {{ $t(`about.${item.key}.desc`) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/css/about.css";
</style>
