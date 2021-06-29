export default {
  created() {
    window.addEventListener('resize', this.resizeChart.bind(this));
  },
  methods: {
    resizeChart() {
      this.myChart.resize();
    },
  },
};
