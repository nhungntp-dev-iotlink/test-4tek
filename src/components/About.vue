<script setup lang="ts">

const LIST_STATISTICAL_NUMBER = [
  {
    name: "Users",
    total: "600M+",
  },
  {
    name: "Games",
    total: "135+",
  },
]

const LIST_DESCRIPTION = [
  {
    icon: "src/assets/icon/calendar-tick.svg",
    title: "24 - Hour",
    caption: '24/7 access ensures operators businesses runs smoothly all year long.'
  },
  {
    icon: 'src/assets/icon/design.svg',
    title: "Design",
    caption: 'Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay.',
  },
  {
    icon: "src/assets/icon/team.svg",
    title: "Team",
    caption: 'Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games. '
  },
]
</script>

<template>
  <div class="about">
    <div class="about__left">
      <div class="title">About Us</div>
      <div class="description">
        Browse our selection of free online games and have a great time without
        leaving the site! Our Kids Games option also includes game reviews,
        extensive game cheats and walkthroughs, and much more. We have exclusive
        free downloads, videos, and articles as well. Etech reviews the most
        popular kids games from all the most popular video gaming platforms, so
        you don’t need to search around for fun anywhere else on the Internet.
        Explore a whole new world of gaming on Etech.
      </div>

      <div class="statistical">
        <div class="statistical__item" v-for="item in LIST_STATISTICAL_NUMBER" key={{item.name}}>
          <div class="statistical__item--number">{{ item.total }}</div>
          <div class="statistical__item--text">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="about__right">
      <div class="right__list">
        <div class="list__item" v-for="item in LIST_DESCRIPTION" key={{item.title}}>
          <div class="item__icon">
            <img :src="item.icon" alt={{item.title}}/>
          </div>
          <div class="item__content">
            <div class="item__content--title">{{item.title}}</div>
            <div class="item__content--caption">{{item.caption}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
@import "../assets/css/about.css";
</style>
