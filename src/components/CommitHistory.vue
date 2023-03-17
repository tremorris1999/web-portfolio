<template>
  <v-dialog v-model="isOpen" activator="parent">
    <v-card
      v-intersect="getCommits"
      class="mx-auto"
      :loading="isLoading"
      max-height="700px"
      max-width="500px"
      scrollable
    >
      <v-card-title class="text-h5 py-4"> {{ name }} commits </v-card-title>
      <v-timeline side="end">
        <v-timeline-item
          v-for="(commitLog, i) in commitLogs"
          id="timeline-item"
          :key="i"
          :dot-color="getColor(commitLog.commit.message)"
          size="small"
          @click="openLink(commitLog.html_url)"
        >
          <div class="text-h6">
            {{ commitLog.commit.message }}
          </div>
          <p class="text-subtitle-1 text-medium-emphasis">
            {{
              new Date(commitLog.commit.author.date).toLocaleDateString(
                'en-US',
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }
              )
            }}
          </p>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue'
import { CommitLog, RepoLookup } from '@/types'
import { github } from '@/api'
import { openLink } from '@/utils'

const props = defineProps({
  lookup: {
    type: Object as PropType<RepoLookup>,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})

const isOpen = ref(false)
const isLoading = ref(true)
const commitLogs = ref<CommitLog[]>([])
const getColor = (message: string) => {
  if (message.includes('feat')) return 'secondary'
  if (message.includes('fix')) return 'error'
  if (message.includes('refactor')) return 'primary'
  return 'success'
}

const getCommits = async () => {
  const logs = await github.getCommits(props.lookup)
  commitLogs.value = logs.sort((a, b) => {
    return (
      new Date(a.commit.author.date).getTime() -
      new Date(b.commit.author.date).getTime()
    )
  })
  isLoading.value = false
}
</script>

<style scoped>
#timeline-item {
  cursor: pointer;
}
</style>
