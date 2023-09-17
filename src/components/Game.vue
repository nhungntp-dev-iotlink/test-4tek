<script setup lang="ts">

const LIST_GAMES = [
  {
    url: "src/assets/image/games/e-space.png",
    title: "E-Space",
    caption: "",
    column:1,
  },
  {
    url: "src/assets/image/games/pirates.png",
    title: "Pirates",
    caption: "",
    column:1,
  },
  {
    url: "src/assets/image/games/magic-tree.png",
    title: "Magic tree",
    caption: "",
    column:1,
  },
  {
    url: "src/assets/image/games/kingland.png",
    title: "Kingland",
    caption: "",
    column:2,
  },
  {
    url: "src/assets/image/games/witch-party.png",
    title: "Witch Party",
    caption: "",
    column:2,
  },
  {
    url: "src/assets/image/games/aborigines.png",
    title: "Aborigines",
    caption: "",
    column:2,
  },
  {
    url: "src/assets/image/games/the-last-game.png",
    title: "The Last Game",
    caption: "",
    column:3,
  },
  {
    url: "src/assets/image/games/rocky.png",
    title: "Rocky",
    caption: "",
    column:3,
  },
  {
    url: "src/assets/image/games/cinderella.png",
    title: "Cinderella",
    caption: "",
    column:3,
  },
  {
    url: "src/assets/image/games/g-dragon.png",
    title: "G-Dragon",
    caption: "",
    column:4,
  },
  {
    url: "src/assets/image/games/blue-fire.png",
    title: "Blue Fire",
    caption: "",
    column:4,
  },
  {
    url: "src/assets/image/games/egypt-game.png",
    title: "Egypt Game",
    caption: "",
    column:4,
  },
];


const CAPTION_DEFAULT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
</script>

<template>
  <div class="game">
    <div class="game__header">
      <div class="game__header--title">Our Games</div>
      <div class="game__header--caption">
        As a pioneer of mobile app gamification, we take pride in originality
        and individuality, providing global players with state-of-the-art games
        that feature splendid storylines, sensational sound effects and
        magnificent animation that never cease to impress.
      </div>
    </div>
    <div class="game__content">
      <div class="game__list">
        <div class="list__gameItem" v-for="item in LIST_GAMES" key="{{item.title}}" :style="{'grid-column-start':item.column}">
          <div class="gameItem__avatar">
            <img :src="item.url" :alt="item.title" />
          </div>
          <div class="gameItem__description">
            <div class="gameItem__description--title">{{ item.title }}</div>
            <div class="gameItem__description--caption">
              {{ item.caption ? item.caption : CAPTION_DEFAULT }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/css/game.css";
</style>
