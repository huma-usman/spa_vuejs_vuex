<template>
  <div>
    <div>
      Sorting By: <b>{{ sortBy }}</b>, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
    </div>
    <b-table id="my-table"
      :bordered="bordered"
      :head-variant="headVariant"
      :items="data"
      :per-page="0"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :class="my-table"
      hover
      caption-top
      responsive
      sort-icon-left>
      <template #table-caption>Data retrieved from an API endpoint</template>
      <template #cell(view)="row">
        <b-button @click=" fetchSelectedData(row.item.id); row.toggleDetails() ">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>
      </template>
      <template #row-details="row">
        <b-card>
          <b-row  class="mb-1">
            <b-col sm="2" class="text-sm-right"><b>{{ row.item.id != selectedData.id ? '': 'Name:' }}</b></b-col>
            <b-col>{{ row.item.id != selectedData.id ? 'Hit the Hide Details button and Show Details again': row.item.name }}</b-col>
            </b-row>
          <b-row  class="mb-1">
            <b-col sm="2" class="text-sm-right"><b>{{ row.item.id != selectedData.id ? '': 'Description:' }}</b></b-col>
            <b-col>{{ row.item.id != selectedData.id ? '':selectedData.description }}</b-col>
          </b-row>
          <b-row class="mb-1">
            <b-col sm="2" class="text-sm-right"><b>{{ row.item.id != selectedData.id ? '': 'Created at:' }}</b></b-col>
            <b-col>{{ row.item.id != selectedData.id ? '':selectedData.date }}</b-col>
          </b-row>
        </b-card>
      </template>
    </b-table>
  </div>
</template>

<script>

export default {
  name: 'DataTable',
  data: () => ({
    sortBy: 'value',
    sortDesc: false,
    fields: [
      { key: 'id', sortable: true },
      { key: 'value', sortable: true },
      { key: 'name', sortable: true },
      { key: 'view', sortable: false }
    ],
   headVariant:'info',
  }),
  computed: {
    data() {
      return this.$store.getters.dataArray
    },
    selectedData() {
      return this.$store.getters.currentSelectedData
    }
  },
  methods: {
    fetchSelectedData(id) {
      this.$store.dispatch('getSelectedData', id);
    }
  }
}
</script>
<style>
  /* Add !important to override other styles */
  .thead-info {
    background-color: rgba(17, 183, 212, 0.575)!important;
  }
  .my-table {
    background-color: rgba(158, 228, 255, 0.87)!important; /* set your desired background color here */
  }
</style>