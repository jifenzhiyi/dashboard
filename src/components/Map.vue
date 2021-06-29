<template>
  <div
    class="def"
    ref="myChart"></div>
</template>

<script>
import { chinaMap, chinaMapOutline, option } from '@/utils/map.js';

export default {
  name: 'Map',
  data() {
    return {
      option,
      chinaMap,
      chinaMapOutline,
    };
  },
  mounted() {
    this.$nextTick(() => {
      const divChart = this.$refs.myChart;
      this.$echarts.registerMap('chinaMap', this.chinaMap);
      this.$echarts.registerMap('chinaMapOutline', this.chinaMapOutline);
      this.myChart = this.$echarts.init(divChart);
      this.myChart.setOption(this.option);
    });
  },
};
</script>

<style lang="less" scoped>
.def {
  width: 800px;
  height: 600px;
  background: #ccc;
}
</style>
