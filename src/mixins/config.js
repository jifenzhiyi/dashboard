export default {
  created() {
    window.addEventListener('resize', this.resizeChart.bind(this));
  },
  methods: {
    resizeChart() {
      const bodyWidth = document.getElementById('app').clientWidth;
      bodyWidth < 1440 ? this.fontSize = 12 : this.fontSize = 18;
      bodyWidth < 1440 ? this.radius = '90%' : this.radius = '75%';
      console.log('bodyWidth', bodyWidth, 'radius', this.radius);
      this.myChart && this.myChart.resize();
      this.init && this.init();
    },
  },
};
