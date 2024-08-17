<template>
  <DataTable
    :value="charactersTableStore.characters?.results"
    tableStyle="width: 60rem"
    lazy
    class="CharactersTable"
  >
    <Column
      field="name"
      header="Name"
      style="width: 10rem"
    ></Column>
    <Column
      field="height"
      header="Height"
      style="width: 10rem"
    ></Column>
    <Column
      field="birth_year"
      header="Birth year"
      style="width: 10rem"
    ></Column>
    <Column
      field="gender"
      header="Gender"
      style="width: 10rem"
    ></Column>
  </DataTable>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { useCharactersTableStore } from '@/modules/CharactersList/components/useCharactersTableStore'

const charactersTableStore = useCharactersTableStore()

onMounted(async () => {
  await charactersTableStore.fetchCharacters(charactersTableStore.paginationCurrentPage)
})

</script>

<style scoped lang="scss">
.CharactersTable{
  display: flex;
  justify-content: center;
  margin: 1rem auto;
}
</style>
