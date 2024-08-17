import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import defaultAxios from '@/modules/CharactersHeight/api/axios'

interface result {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}

interface character {
  count: number,
  next: string,
  previous: string | null
  results: result[]
}

export const useCharactersColumnChartStore = defineStore('CharactersColumnChartStore', () => {
  const characters = ref<character>()
  const fetchCharacters = async () => {
    characters.value = await defaultAxios('')
  }

  const charactersNames = computed(() => characters.value?.results.map((item: result) => item.name))
  const charactersHeight = computed(() => characters.value?.results.map((item: result) => item.height))
  return {
    characters, fetchCharacters, charactersNames, charactersHeight,
  }
})
