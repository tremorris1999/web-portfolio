<template>
  <v-app theme="dark">
    <default-navigation />
    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
import DefaultView from './View.vue'
import DefaultNavigation from './Navigation.vue'
</script>

<style>
#footer {
  max-height: 5%;
}
</style>
