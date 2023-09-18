<script setup lang="ts">

const LIST_GAMES = [
  {
    url: "/image/games/e-space.png",
    title: "E-Space",
    caption: "",
    column:1,
  },
  {
    url: "/image/games/pirates.png",
    title: "Pirates",
    caption: "",
    column:1,
  },
  {
    url: "/image/games/magic-tree.png",
    title: "Magic tree",
    caption: "",
    column:1,
  },
  {
    url: "/image/games/kingland.png",
    title: "Kingland",
    caption: "",
    column:2,
  },
  {
    url: "/image/games/witch-party.png",
    title: "Witch Party",
    caption: "",
    column:2,
  },
  {
    url: "/image/games/aborigines.png",
    title: "Aborigines",
    caption: "",
    column:2,
  },
  {
    url: "/image/games/the-last-game.png",
    title: "The Last Game",
    caption: "",
    column:3,
  },
  {
    url: "/image/games/rocky.png",
    title: "Rocky",
    caption: "",
    column:3,
  },
  {
    url: "/image/games/cinderella.png",
    title: "Cinderella",
    caption: "",
    column:3,
  },
  {
    url: "/image/games/g-dragon.png",
    title: "G-Dragon",
    caption: "",
    column:4,
  },
  {
    url: "/image/games/blue-fire.png",
    title: "Blue Fire",
    caption: "",
    column:4,
  },
  {
    url: "/image/games/egypt-game.png",
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
      <div class="game__header--title">{{ $t("our_games.title") }}</div>
      <div class="game__header--caption">
        {{ $t("our_games.content") }}
      </div>
    </div>
    <div class="game__content">
      <div class="game__list">
        <div class="list__gameItem" v-for="item in LIST_GAMES" key="{{item.title}}">
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
