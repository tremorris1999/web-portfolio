<template>
  <div class="stacked-bar d-flex justify-center mt-8">
    <canvas
      ref="graphCanvas"
      height="50"
      :style="`border-color: ${borderColor}`"
      width="1000"
    ></canvas>
  </div>
  <div class="mx-auto my-4 d-flex justify-space-evenly flex-wrap">
    <v-badge v-for="(value, i) in dataSet" :key="i" :color="value.color" inline>
      <p class="mr-2 my-2">{{ value.name }}</p>
    </v-badge>
  </div>
</template>
<script lang="ts" setup>
import { BarChartSample, RepoLookup } from '@/types'
import { PropType, onMounted, ref } from 'vue'
import { github } from '@/api'
import { useTheme } from 'vuetify'

const props = defineProps({
  lookup: {
    type: Object as PropType<RepoLookup>,
    required: true,
  },
})

const dataSet = ref<BarChartSample[]>([])
const graphCanvas = ref<HTMLCanvasElement>()
const { current } = useTheme()
const borderColor = current.value.dark ? '#FFF6' : '#0006'

onMounted(async () => {
  const languages = await github.getLanguages(props.lookup)
  const data = Object.entries(languages).map(([key, value]) => {
    return {
      name: key,
      count: value,
      color: getLanguageColor(key),
    }
  })

  const total = data.reduce((acc, cur) => acc + cur.count, 0)
  dataSet.value = data
    .map((d) => ({ ...d, percent: d.count / total }))
    .sort((a, b) => b.count - a.count)

  drawStackedBarChart(dataSet.value, graphCanvas.value)
})

const getLanguageColor = (language: string) => {
  switch (language) {
    case 'JavaScript':
      return '#f1e05a'
    case 'TypeScript':
      return '#2b7489'
    case 'HTML':
      return '#e34c26'
    case 'CSS':
      return '#563d7c'
    case 'Python':
      return '#3572A5'
    case 'Java':
      return '#b07219'
    case 'C++':
      return '#f34b7d'
    case 'C#':
      return '#178600'
    case 'C':
      return '#555555'
    case 'PHP':
      return '#4F5D95'
    case 'Shell':
      return '#89e051'
    case 'Ruby':
      return '#701516'
    case 'Go':
      return '#00ADD8'
    case 'Rust':
      return '#dea584'
    case 'Swift':
      return '#ffac45'
    case 'Kotlin':
      return '#F18E33'
    case 'Dart':
      return '#00B4AB'
    case 'Vue':
      return '#2c3e50'
    case 'PowerShell':
      return '#012456'
    case 'Perl':
      return '#0298c3'
    case 'Lua':
      return '#000080'
    case 'Makefile':
      return '#427819'
    case 'SCSS':
      return '#c6538c'
    default:
      return '#000000'
  }
}

const drawStackedBarChart = (
  data: BarChartSample[],
  canvas: HTMLCanvasElement | undefined
) => {
  if (!canvas) return

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  const xMax = canvas.width
  const yMax = canvas.height
  let x = 0
  for (let i = 0; i < data.length; i++) {
    let xDistance = data[i].percent * xMax - 1
    if (i === data.length - 1) xDistance += 1
    ctx.fillStyle = data[i].color
    ctx.fillRect(x, 0, xDistance, yMax)
    x += data[i].percent * xMax
  }
}
</script>

<style scoped>
.stacked-bar :deep() canvas {
  width: 100%;
  border-radius: 10px;
  border: 2px solid;
}
</style>
