<template>
  <div class="content">
    <span class="bor b1"></span>
    <span class="bor b2"></span>
    <span class="bor b3"></span>
    <span class="bor b4"></span>
    <div
      class="def"
      ref="myChart"></div>
  </div>
</template>

<script>
import config from '@/mixins/config.js';

const xData = ['饼干\n薯片', '蜜饯\n糖巧', '面包\n糕点', '泡面\n素食', '豆肉\n熟食', '果冻\n罐头', '礼盒', '品肆\n名酒', '果汁\n饮料', '牛奶\n乳饮'];
const data1 = [700, 500, 200, 220, 240, 90, 260, 250, 400, 380];
const data2 = [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000];
const option = {
  title: {
    text: '分类分布图',
    textStyle: {
      color: '#fff',
      fontSize: 18,
    },
    x: '3%',
    y: '3%',
  },
  backgroundColor: '#131f41',
  color: ['#1da6ed'],
  grid: {
    left: '5%',
    right: '5%',
    bottom: '5%',
    containLabel: true,
  },
  xAxis: [{
    type: 'category',
    data: xData,
    axisTick: { alignWithLabel: true },
    nameTextStyle: { color: '#82b0ec' },
    axisLine: {
      lineStyle: {
        color: '#002e71',
      },
    },
    axisLabel: {
      textStyle: {
        fontSize: 10,
        color: '#ccc',
      },
    },
  }],
  yAxis: [{
    type: 'value',
    min: 0,
    max: 1000,
    position: 'left',
    axisLabel: {
      textStyle: {
        color: '#ccc',
      },
      formatter: '{value}',
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#002e71',
      },
    },
    splitLine: {
      show: false,
    },
  }],
  series: [{
    name: '', // 头部
    type: 'pictorialBar',
    symbolSize: [10, 5],
    symbolOffset: [0, -2.5],
    z: 12,
    symbolPosition: 'end',
    itemStyle: {
      color: '#163F7A',
      opacity: 1,
    },
    data: data2,
  }, {
    type: 'bar',
    barWidth: 10,
    barGap: '-100%',
    z: 0,
    itemStyle: {
      color: '#163F7A',
      opacity: 0.7,
    },
    data: data2,
  }, {
    type: 'pictorialBar',
    symbolSize: [10, 5],
    symbolOffset: [0, -2.5],
    symbolPosition: 'end',
    z: 12,
    data: data1,
  }, {
    type: 'pictorialBar',
    symbolSize: [10, 5],
    symbolOffset: [0, 2.5],
    z: 12,
    data: data1,
  }, {
    type: 'bar',
    itemStyle: {
      normal: {
        opacity: 0.7,
      },
    },
    barWidth: 10,
    data: data1,
    markLine: {
      silent: true,
      symbol: 'none',
      label: {
        position: 'middle',
        formatter: '{b}',
      },
    },
  },
  {
    type: 'effectScatter',
    silent: true,
    tooltip: { show: false },
    zlevel: 3,
    symbolSize: [10, 5],
    symbolPosition: 'end',
    showEffectOn: 'render',
    rippleEffect: {
      brushType: 'stroke',
      color: '#3cefff',
      scale: 4,
    },
    itemStyle: { color: '#3cefff' },
    hoverAnimation: true,
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  }],
};

export default {
  name: 'Bar',
  mixins: [config],
  data() {
    return {
      option,
    };
  },
  mounted() {
    this.$nextTick(() => {
      const divChart = this.$refs.myChart;
      this.myChart = this.$echarts.init(divChart);
      this.myChart.setOption(this.option);
    });
  },
};
</script>

<style lang="less" scoped>
.def {
  width: 480px;
  height: 250px;
}
</style>
