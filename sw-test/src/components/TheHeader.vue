<template>
  <header class="TheHeader">
    <Menubar :model="headerItems">
      <template #item="{ item, props }">
        <router-link
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a
            :href="href"
            v-bind="props.action"
            @click="navigate"
          >
            <span>{{ item.label }}</span>
          </a>
        </router-link>
      </template>
    </Menubar>
  </header>
</template>

<script setup lang="ts">
import Menubar from 'primevue/menubar'
import { ref } from 'vue'

interface headerItem {
  label: string
  route: string
}

const headerItems = ref<headerItem[]>([
  {
    label: 'Characters',
    route: '/',
  },
  {
    label: 'Characters Height',
    route: '/characters-height',
  },
])
</script>

<style scoped lang="scss">
.TheHeader {
  display: flex;
  justify-content: center;
}
</style>
