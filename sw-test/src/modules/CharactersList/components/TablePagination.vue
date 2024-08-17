<template>
  <the-pagination
    :itemCount=charactersTableStore.characters?.count
    :itemsPerPage=charactersTableStore.postOnPage
    :currentPage=charactersTableStore.paginationCurrentPage
    @changePage="changePage"
    :pageToShow="5"
  />
</template>

<script setup lang="ts">
import ThePagination from '@/components/ThePagination.vue'
import { useCharactersTableStore } from '@/modules/CharactersList/components/useCharactersTableStore'

const charactersTableStore = useCharactersTableStore()

const changePage = async (page: number) => {
  charactersTableStore.paginationCurrentPage = page
  await charactersTableStore.fetchCharacters(charactersTableStore.paginationCurrentPage)
}
</script>

<style scoped>

</style>
