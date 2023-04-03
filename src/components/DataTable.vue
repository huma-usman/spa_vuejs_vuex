<template>
  <div>
    <b-table id="my-table" :items="values" :per-page="0" :fields="fields">
      <template #cell(view)="row">
        <b-button v-model="row.detailsShowing" @click="row.toggleDetails">
          Details
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Name:</b></b-col>
            <b-col>{{ row.item.name }}</b-col>
            <b-col>{{ row.item.description }}</b-col>
            <b-col>{{ row.item.date }}</b-col>
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
    values() {
      return this.$store.getters.dataArray
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
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
