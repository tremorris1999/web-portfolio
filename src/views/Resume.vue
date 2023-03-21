<template>
  <v-card id="resume-card" class="mx-auto" :max-width="`${maxWidth}px`">
    <v-card-title class="text-h5 py-4">Resume</v-card-title>
    <v-row id="zoom-controller" class="mt-2 mb-n12" justify="center">
      <v-btn
        class="mx-2"
        color="primary"
        :disabled="zoom <= 1.0"
        icon="mdi-minus"
        size="small"
        @click="adjustZoom(-0.2)"
      />
      <v-btn
        class="mx-2"
        color="primary"
        :disabled="zoom >= 2.0"
        icon="mdi-plus"
        size="small"
        @click="adjustZoom(0.2)"
      />
    </v-row>
    <vue-pdf-embed
      class="overflow-auto mx-2"
      source="@/../public/Resume.pdf"
      :width="(maxWidth - 20) * zoom"
    />
    <v-card-actions>
      <v-btn
        class="mx-2 my-4"
        color="primary"
        prepend-icon="mdi-download-circle-outline"
        size="large"
        @click="download"
        >Download</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import VuePdfEmbed from 'vue-pdf-embed'
import { useDisplay } from 'vuetify'

const { sm, mdAndUp } = useDisplay()
const zoom = ref(1.0)
const maxWidth = computed(() => (mdAndUp.value ? 1000 : sm.value ? 600 : 350))
const adjustZoom = (change: number) => {
  zoom.value = Math.round((zoom.value + change) * 10) / 10
  console.log(zoom.value)
  if (zoom.value < 1.0) zoom.value = 1.0
  if (zoom.value > 2.4) zoom.value = 2.4
}

const download = () => {
  window.open('@/../public/Resume.pdf', '_blank')
}
</script>

<style>
#zoom-controller {
  position: relative;
  z-index: 1;
}
</style>
