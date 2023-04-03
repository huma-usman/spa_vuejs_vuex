<template>
  <div>
    <canvas ref="chart"/>
  </div> 
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'DataChart',
  mounted() {
    this.$store.dispatch('getData');
    this.renderChart();
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
    renderChart() {
      const ctx = this.$refs.chart.getContext('2d');
      if (this.chart) {
      this.chart.destroy();
      }
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Total Value', 'Average Value', 'Number of Items >= 50'],
          datasets: [{
            label: 'Data Summary',
            data: [],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          responsive: true,
          maintainAspectRatio: true
        }
      });
      const data = this.data;
      const numItems = data.length;
      const totalValue = data.reduce((sum, item) => sum + item.value, 0);
      const averageValue = totalValue / numItems;
      const numItemsGreaterThan50 = data.filter((item) => item.value >= 50).length;
      this.chart.data.datasets[0].data = [totalValue,averageValue,numItemsGreaterThan50];
    }
  },
  watch: {
    data() {
      this.renderChart();
    }
  }
}
</script>
