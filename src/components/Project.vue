<template>
  <v-card class="mx-auto my-4 px-8 py-2" max-width="600px">
    <v-card-title class="text-h5">
      {{ repo.name }}
    </v-card-title>
    <div class="d-flex justify-space-evenly flex-wrap mt-4">
      <v-chip
        v-for="(topic, i) in repo.topics"
        :key="i"
        class="mx-2 my-2"
        color="secondary"
      >
        {{ topic }}
      </v-chip>
    </div>
    <v-carousel
      v-if="repoImages?.length"
      class="my-2"
      cycle
      height="200px"
      hide-delimiters
      show-arrows="hover"
    >
      <v-carousel-item v-for="(image, i) in repoImages" :key="i">
        <v-img class="py-auto" :src="image" />
      </v-carousel-item>
    </v-carousel>
    {{ repo.description }}
    <LanguageBreakdown :lookup="props.lookup" />
    <v-card-actions class="d-flex justify-space-evenly flex-wrap">
      <v-btn
        v-if="repo.homepage"
        class="mx-2 my-4"
        color="primary"
        prepend-icon="mdi-link-box-variant-outline"
        size="large"
        @click="openLink(repo.homepage)"
      >
        View Site
      </v-btn>
      <v-btn
        class="mx-2 my-4"
        color="secondary"
        prepend-icon="mdi-source-branch"
        size="large"
        @click="openLink(repo.html_url)"
      >
        View Source
      </v-btn>
      <v-btn
        class="mx-2 my-4"
        color="success"
        prepend-icon="mdi-source-commit"
        size="large"
      >
        View Commits
        <CommitHistory :lookup="props.lookup" :name="repo.name" />
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
import LanguageBreakdown from './LanguageBreakdown.vue'
import { openLink } from '@/utils'

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
