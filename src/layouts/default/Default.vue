<template>
  <v-app>
    <default-navigation @click="() => {}" />
    <default-view @click="() => {}" />
  </v-app>
</template>

<script lang="ts" setup>
import DefaultView from './View.vue'
import DefaultNavigation from './Navigation.vue'
</script>
