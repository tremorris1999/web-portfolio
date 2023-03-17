<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify'
const { global } = useTheme()
global.name.value = 'dark'
</script>
