<template>
  <div>Code will go here</div>
</template>

<script setup>
import { ref } from 'vue'

// Mock data
import memberData from '../data/members.json'
const members = ref(memberData)

// PrimeVue components
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
</script>
