<template>
  <v-card class="mx-8 my-4 px-8 py-2">
    <v-card-title class="text-h5">
      {{ repo.name }}
    </v-card-title>
    <div class="d-flex justify-space-around my-0 py-0">
      <v-chip
        v-for="(topic, i) in repo.topics"
        :key="i"
        class="mx-2 my-4"
        color="secondary"
      >
        {{ topic }}
      </v-chip>
    </div>
    <v-carousel
      v-if="repoImages?.length"
      class="mt-0 mb-4"
      cycle
      height="400px"
      :show-arrows="false"
    >
      <v-carousel-item v-for="(image, i) in repoImages" :key="i" :src="image" />
    </v-carousel>
    {{ repo.description }}

    <v-card-actions>
      <v-btn
        v-if="repo.homepage"
        class="mx-2 my-4"
        color="primary"
        prepend-icon="mdi-link-box-variant-outline"
        size="large"
      >
        View Site
      </v-btn>
      <v-btn
        class="mx-2 my-4"
        color="secondary"
        prepend-icon="mdi-source-branch"
        size="large"
      >
        View Source
      </v-btn>
      <v-spacer />
      <v-btn
        class="mx-2 my-4"
        color="success"
        prepend-icon="mdi-source-commit"
        size="large"
      >
        <CommitHistory :lookup="props.lookup" />
        View Commits
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import { Repo, RepoLookup } from '@/types'
import { onMounted, PropType, ref } from 'vue'
import { github } from '@/api'
import { images } from '@/assets/remote'
import CommitHistory from './CommitHistory.vue'

const props = defineProps({
  lookup: {
    type: Object as PropType<RepoLookup>,
    required: true,
  },
})

const repo = ref<Repo>(Repo())
const repoImages = ref<string[]>([])

onMounted(async () => {
  repo.value = await github.getRepo(props.lookup)
  repoImages.value = images[repo.value.name]
})
</script>
