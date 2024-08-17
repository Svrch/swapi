import { ref } from 'vue'
import { defineStore } from 'pinia'
import defaultAxios from '@/modules/CharactersList/api/axios'

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

export const useCharactersTableStore = defineStore('CharactersTableStore', () => {
  const characters = ref<character>()
  const fetchCharacters = async (page: Number) => {
    characters.value = await defaultAxios(`?page=${page}`)
  }
  const paginationCurrentPage = ref<number>(1)
  const postOnPage = ref<number>(10)

  return {
    characters,
    fetchCharacters,
    paginationCurrentPage,
    postOnPage,
  }
})
