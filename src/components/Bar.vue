<template>
  <div
    class="def"
    ref="myChart"></div>
</template>

<script>
const data = [700, 500, 200, 220, 240, 90, 260, 250, 400, 380];
const option = {
  title: {
    text: '分类分布图',
    textStyle: {
      color: '#fff',
      fontSize: 14,
    },
    x: '2%',
    y: '2%',
  },
  backgroundColor: '#181F4E',
  color: ['#1da6ed'],
  tooltip: {
    formatter(a) {
      return `${a.name.replace('\n', '')}:${a.data}`;
    },
  },
  grid: {
    left: '5%',
    right: '5%',
    bottom: '5%',
    containLabel: true,
  },
  xAxis: [{
    type: 'category',
    data: ['饼干\n薯片', '蜜饯\n糖巧', '面包\n糕点', '泡面\n素食', '豆肉\n熟食', '果冻\n罐头', '礼盒', '品肆\n名酒', '果汁\n饮料', '牛奶\n乳饮'],
    axisTick: { alignWithLabel: true },
    nameTextStyle: { color: '#82b0ec' },
    axisLine: {
      lineStyle: {
        color: '#ccc',
      },
    },
    axisLabel: {
      textStyle: {
        color: '#ccc',
      },
    },
  }],
  yAxis: [{
    type: 'value',
    axisLabel: {
      textStyle: {
        color: '#ccc',
      },
      formatter: '{value}',
    },
    axisLine: {
      lineStyle: {
        color: '#ccc',
      },
    },
    splitLine: {
      show: false,
    },
  }],
  series: [{
    type: 'pictorialBar',
    symbolSize: [10, 5],
    symbolOffset: [0, -2.5],
    symbolPosition: 'end',
    z: 12,
    data,
  }, {
    type: 'pictorialBar',
    symbolSize: [10, 5],
    symbolOffset: [0, 2.5],
    z: 12,
    data,
  }, {
    type: 'bar',
    itemStyle: {
      normal: {
        opacity: 0.7,
      },
    },
    barWidth: '10',
    data,
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
  width: 550px;
  height: 270px;
  background: #ccc;
}
</style>
