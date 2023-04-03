<template>
  <div>
    <b-pagination 
      v-on:change="onPageChange" 
      :value="currentPage" 
      :total-rows="dataLength" 
      :per-page="10"
      :limit="5"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      aria-controls="my-table" 
      pills>
    </b-pagination>
  </div>
</template>

<script>

export default {
  name: 'DataPagination',
  mounted() {
    this.$store.dispatch('getData');
  },
  computed: {
    data() {
      return this.$store.getters.dataArray
    },
    dataLength() {
      return this.$store.getters.dataLengthValue;
    },
    currentPage() {
      return this.$store.getters.currentPageValue;
    }
  },
  methods: {
    onPageChange(value) {
      this.$store.dispatch('updatePage', value);
      this.$store.dispatch('getData');
    }
  },
}
</script>
