<template>
  <div class="ThePagination">
    <button
      @click="$emit('changePage', charactersTableStore.paginationCurrentPage = 1)"
      class="ThePagination__button"
    >
      <<
    </button>
    <button
      @click="$emit('changePage', charactersTableStore.paginationCurrentPage <= 1 ? charactersTableStore.paginationCurrentPage : charactersTableStore.paginationCurrentPage -= 1)"
      class="ThePagination__button"
    >
      <
    </button>
    <button
      v-for="page in pagesToShow(pagesArr, charactersTableStore.paginationCurrentPage, pageToShow)"
      :key="page"
      @click="$emit('changePage', page)"
      :class="['ThePagination__button', {'ThePagination__button--active':page === charactersTableStore.paginationCurrentPage} ]"
    >
      {{ page }}
    </button>
    <button
      @click="$emit('changePage', charactersTableStore.paginationCurrentPage >= totalPage ? charactersTableStore.paginationCurrentPage : charactersTableStore.paginationCurrentPage += 1)"
      class="ThePagination__button"
    >
      >
    </button>
    <button
      @click="$emit('changePage', charactersTableStore.paginationCurrentPage = totalPage)"
      class="ThePagination__button"
    >
      >>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useCharactersTableStore } from '@/modules/CharactersList/components/useCharactersTableStore'

const charactersTableStore = useCharactersTableStore()

defineEmits(['changePage'])

const props = defineProps({
  itemCount: {
    type: Number,
    default: 5,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    default: 5,
  },
  currentPage: {
    type: Number,
    default: 1,
    required: true,
  },
  pageToShow: {
    type: Number,
    default: 5,
    required: false,
  },
})

const totalPage = computed<number>(() => (Math.ceil(props.itemCount / props.itemsPerPage)))

const pagesArr = computed<number[]>(() => (Array.from({ length: totalPage.value }, (_, i) => i + 1)))

const pagesToShow = (pages: number[], currentPage: number, pageToShow: number) => {
  const left = Math.floor(currentPage - pageToShow / 2)
  const right = Math.floor(currentPage + pageToShow / 2)

  let arrToShow = pages.slice(left, right)

  if (left < 0) { arrToShow = Array.from({ length: pageToShow }, (_, i) => i + 1) }
  if (right > totalPage.value) {
    arrToShow = Array.from({ length: pageToShow }, (_, i) => i + totalPage.value - pageToShow + 1)
  }
  return arrToShow
}

</script>

<style scoped lang="scss">
.ThePagination {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem auto;
  &__button {
    background-color: white;
    border: none;
    cursor: pointer;
    border-radius: 100%;
    min-height: 2rem;
    min-width: 2rem;
    font-size: 1.1rem;
    font-family: Cambria, serif;
    &--active{
      background-color: var(--p-content-hover-background);
    }
}
  &__button:hover {
    background-color: var(--p-content-hover-background);
  }

}
</style>
