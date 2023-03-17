<template>
  <Project v-for="(repo, i) in repos" :key="i" :lookup="repo" />
</template>

<script lang="ts" setup>
import Project from '@/components/Project.vue'
import { repos } from '@/assets/remote'
</script>
