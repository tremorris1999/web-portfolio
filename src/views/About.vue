<template>
  <v-card class="mx-auto" max-width="700px">
    <v-card-title
      class="text-h3 font-weight-black my-2 px-8 pt-8 d-none d-sm-flex"
      >Trevor Morris</v-card-title
    >
    <v-card-title
      class="text-h4 font-weight-black my-2 px-8 pt-8 d-flex d-sm-none"
      >Trevor Morris</v-card-title
    >
    <v-card-subtitle class="text-h6 px-8"
      >Full-Stack Software Engineer</v-card-subtitle
    >
    <v-img class="my-4 px-8" :src="statsUri" />
    <v-card-text class="px-8 multiline">
      <p class="mb-8">
        I am a junior full-stack engineer working for Trans-System, Inc., a
        small corporation in the transport industry around
        <v-chip
          class="mx-2"
          color="primary"
          prepend-icon="mdi-map-marker"
          size="small"
          text="Spokane, WA"
          text-color="white"
          variant="elevated"
          @click="externalLinks['spokane']"
        />.
      </p>
      <p class="mb-8">
        In my daily work, I work in a .NET backend stack with a Vue frontend.
        Typically, I build applications and APIs for internal use by our
        company's diverse departments using technologies like Microsoft SQL
        Server, ASP.NET, Vue 3, Vuetify 3, Vite, and more.
      </p>
      <p class="mb-8">
        In June 2022, I graduated from
        <v-chip
          class="mx-2"
          color="red"
          prepend-icon="mdi-map-marker"
          size="small"
          text="Eastern Washington University"
          text-color="white"
          variant="elevated"
          @click="externalLinks['ewu']"
        />
        with a Bachelor of Science in Computer Science and a minor in
        Mathematics. During my time at EWU, I focused mainly on discrete
        mathematics, GPU computing, and graphics computing. However, I also
        gained formative exposure to various other topics, including data
        structures, algorithms, operating systems, web development, and more,
        all of which have sparked my interest in widening my engineering
        purview.
      </p>
      <p class="mb-8">
        Outside work, I love exploring and learning new concepts, tools, and
        technologies through hands-on experimentation and implementation. Today,
        I find myself exploring the world of Rust and working with bleeding-edge
        front-end technologies like the
        <v-chip
          class="mx-2"
          color="secondary"
          prepend-icon="mdi-code-json"
          size="small"
          text="Bun.sh"
          text-color="white"
          variant="elevated"
          @click="externalLinks['bun']"
        />
        JavaScript runtime and
        <v-chip
          class="mx-2"
          color="purple"
          prepend-icon="mdi-file-code"
          size="small"
          text="Qwik"
          text-color="white"
          variant="elevated"
          @click="externalLinks['qwik']"
        />
        JavaScript framework. am genuinely passionate about expanding my
        skillset and finding new ways to challenge myself as I pursue this
        career and head down the road of many future discoveries and lessons.
      </p>
      <p>
        I am always seeking new opportunities to expand my programming skillset
        and experience. If you are a recruiter, hiring manager, or just want to
        collaborate on a project, I welcome you to review my resume and contact
        me; I look forward to the journey.
      </p>
    </v-card-text>
    <v-card-actions class="px-8 py-4">
      <v-btn
        class="px-2"
        color="primary"
        prepend-icon="mdi-file-document"
        size="large"
        to="/resume"
        >Resume</v-btn
      >
      <v-btn
        class="px-2"
        color="secondary"
        prepend-icon="mdi-card-account-mail"
        size="large"
        @click="externalLinks['email']"
        >Contact Me</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import { externalLinks } from '@/router/external'
import { toQueryString } from '@/utils'

const statsOptions = {
  username: 'tremorris1999',
  show_icons: true,
  count_private: true,
  hide_border: true,
  border_radius: 0,
  title_color: '1867C0',
  text_color: '5CBBF6',
  icon_color: '1867C0',
  custom_title: 'Github Stats',
}

const statsUri = `https://github-readme-stats.vercel.app/api?${toQueryString(
  statsOptions
)}`
</script>

<style>
.multiline p {
  line-height: 2rem;
}
</style>
