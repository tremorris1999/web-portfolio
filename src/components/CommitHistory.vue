<template>
  <v-dialog v-model="isOpen" activator="parent">
    <v-card class="mx-auto" height="300px" title="Commits!!!" width="300px" />
  </v-dialog>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue'
import { RepoLookup } from '@/types'

defineProps({
  lookup: {
    type: Object as PropType<RepoLookup>,
    required: true,
  },
})

const isOpen = ref(false)
</script>
