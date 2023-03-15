<template>
  <v-container v-resize="onResize">
    <v-navigation-drawer
      :expand-on-hover="width < 1280"
      permanent
      :rail="width < 1280"
    >
      <v-list-item title="Trevor Morris">
        <template v-slot:prepend>
          <v-avatar class="ml-n4" size="x-large">
            <Logo />
          </v-avatar>
        </template>
      </v-list-item>
      <v-list>
        <v-list-item
          class="text-h6"
          prepend-icon="mdi-home"
          title="About"
          to="/about"
        />
        <v-list-item
          class="text-h6"
          prepend-icon="mdi-list-status"
          title="Projects"
          to="/projects"
        />
        <v-list-item
          class="text-h6"
          prepend-icon="mdi-file-document"
          title="Resume"
          to="/resume"
        />
        <v-list-item
          class="text-h6"
          prepend-icon="mdi-github"
          title="GitHub"
          @click="externalLinks['github']"
        />
        <v-list-item
          class="text-h6"
          prepend-icon="mdi-linkedin"
          title="LinkedIn"
          @click="externalLinks['linkedin']"
        />
        <v-list-item
          class="text-h6"
          prepend-icon="mdi-card-account-mail"
          title="Contact Me"
          @click="externalLinks['email']"
        />
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Logo from '@/components/LogoSvg.vue'
import { externalLinks } from '@/router/external'
const width = ref(window.innerWidth)
const onResize = () => {
  width.value = window.innerWidth
}
</script>
