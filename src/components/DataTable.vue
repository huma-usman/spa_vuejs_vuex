<template>
  <div>
    <b-table id="my-table" striped hover :items="data" :per-page="0" :fields="fields">
      <template #cell(view)="row">
        <b-button @click="row.toggleDetails(); fetchSelectedData(row.item.id) ">
          Details
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <b-row class="mb-1">
            <b-col sm="3" class="text-sm-right"><b>Name:</b></b-col>
            <b-col>{{ row.item.name }}</b-col>
          </b-row>
          <b-row class="mb-1">
            <b-col sm="3" class="text-sm-right"><b>Description:</b></b-col>
            <b-col>{{ selectedData.description }}</b-col>
          </b-row>
          <b-row class="mb-1">
            <b-col sm="3" class="text-sm-right"><b>Created at:</b></b-col>
            <b-col>{{ selectedData.date }}</b-col>
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
    fields: ['id', 'value', 'name', 'view'],
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0,10
}

a {
  color: #b9428b;
}
</style>
