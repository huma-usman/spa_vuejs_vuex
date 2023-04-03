<template>
  <div>
    <template>
      <data-Table />
    </template>
    <data-pagination />
    <data-chart />
  </div>
</template>

<script>
import DataTable from './components/DataTable.vue'
import DataPagination from './components/DataPagination.vue'
import DataChart from './components/DataChart.vue'

export default {
  name: 'App',
  components: {
    DataTable,
    DataPagination,
    DataChart
  }
}
</script>
