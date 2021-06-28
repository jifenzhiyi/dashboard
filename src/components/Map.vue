<template>
  <div
    class="def"
    ref="myChart"></div>
</template>

<script>
export default {
  name: 'Map',
  mounted() {
    this.$nextTick(() => {
      const divChart = this.$refs.myChart;
      this.myChart = this.$echarts.init(divChart);
      this.init();
      this.draw();
    });
  },
};
</script>

<style lang="less" scoped>
.def {
  margin: 0;
  width: 700px;
  height: 700px;
  background: #ccc;
}
</style>
