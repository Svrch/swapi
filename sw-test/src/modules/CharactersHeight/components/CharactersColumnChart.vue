<template>
  <div class="CharactersColumnChart">
    <Chart
      type="bar"
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import Chart from 'primevue/chart'
import { useCharactersColumnChartStore } from '@/modules/CharactersHeight/components/useCharactersColumnChartStore'

const charactersColumnChart = useCharactersColumnChartStore()

const chartData = ref()
const chartOptions = ref()

const setChartData = () => ({
  labels: charactersColumnChart.charactersNames,
  datasets: [
    {
      label: 'Characters Height',
      data: charactersColumnChart.charactersHeight,
      backgroundColor: ['rgba(249, 115, 22, 0.2)', 'rgba(6, 182, 212, 0.2)', 'rgb(107, 114, 128, 0.2)', 'rgba(139, 92, 246 0.2)'],
      borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'],
      borderWidth: 1,
    },
  ],
})
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--p-text-color')
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color')
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color')

  return {
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  }
}

onMounted(async () => {
  await charactersColumnChart.fetchCharacters()
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})

</script>
<style scoped lang="scss">
.CharactersColumnChart{
  margin: 1rem auto;
}

</style>
