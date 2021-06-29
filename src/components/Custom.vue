<template>
  <div
    class="def"
    ref="myChart"></div>
</template>

<script>
import config from '@/mixins/config.js';
import { getCirlPoint } from '@/utils/index.js';

export default {
  name: 'Custom',
  mixins: [config],
  props: ['value', 'color'],
  data() {
    return {
      angle: 0,
      option: {},
      timer: null,
      myChart: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      const divChart = this.$refs.myChart;
      this.myChart = this.$echarts.init(divChart);
      this.init();
      this.draw();
    });
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    draw() {
      this.angle += 2;
      this.myChart.setOption(this.option);
      setTimeout(() => {
        this.timer = setInterval(() => {
          this.draw();
        }, 200);
      }, 1000);
    },
    init() {
      const self = this;
      this.option = {
        backgroundColor: '#061740',
        title: {
          text: `{a|${this.value}}`, // {c|%}
          x: 'center',
          y: 'center',
          textStyle: {
            rich: {
              a: {
                fontSize: '22px',
                color: self.color,
              },
            },
          },
        },
        series: [{
          name: 'ring5',
          type: 'custom',
          coordinateSystem: 'none',
          renderItem(params, api) {
            return {
              type: 'arc',
              shape: {
                cx: api.getWidth() / 2,
                cy: api.getHeight() / 2,
                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
                startAngle: (0 + self.angle) * Math.PI / 180,
                endAngle: (90 + self.angle) * Math.PI / 180,
              },
              style: {
                stroke: self.color,
                fill: 'transparent',
                lineWidth: 1.5,
              },
              silent: true,
            };
          },
          data: [0],
        }, {
          type: 'custom',
          coordinateSystem: 'none',
          renderItem(params, api) {
            return {
              type: 'arc',
              shape: {
                cx: api.getWidth() / 2,
                cy: api.getHeight() / 2,
                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
                startAngle: (180 + self.angle) * Math.PI / 180,
                endAngle: (270 + self.angle) * Math.PI / 180,
              },
              style: {
                stroke: self.color,
                fill: 'transparent',
                lineWidth: 1.5,
              },
              silent: true,
            };
          },
          data: [0],
        }, {
          type: 'custom',
          coordinateSystem: 'none',
          renderItem(params, api) {
            return {
              type: 'arc',
              shape: {
                cx: api.getWidth() / 2,
                cy: api.getHeight() / 2,
                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                startAngle: (270 - self.angle) * Math.PI / 180,
                endAngle: (40 - self.angle) * Math.PI / 180,
              },
              style: {
                stroke: self.color,
                fill: 'transparent',
                lineWidth: 1.5,
              },
              silent: true,
            };
          },
          data: [0],
        }, {
          type: 'custom',
          coordinateSystem: 'none',
          renderItem(params, api) {
            return {
              type: 'arc',
              shape: {
                cx: api.getWidth() / 2,
                cy: api.getHeight() / 2,
                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                startAngle: (90 - self.angle) * Math.PI / 180,
                endAngle: (220 - self.angle) * Math.PI / 180,
              },
              style: {
                stroke: self.color,
                fill: 'transparent',
                lineWidth: 1.5,
              },
              silent: true,
            };
          },
          data: [0],
        }, {
          type: 'custom',
          coordinateSystem: 'none',
          renderItem(params, api) {
            const x0 = api.getWidth() / 2;
            const y0 = api.getHeight() / 2;
            const r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
            const point = getCirlPoint(x0, y0, r, (90 - self.angle));
            return {
              type: 'circle',
              shape: {
                cx: point.x,
                cy: point.y,
                r: 3,
              },
              style: {
                stroke: self.color, // 粉
                fill: self.color,
              },
              silent: true,
            };
          },
          data: [0],
        }, {
          type: 'custom',
          coordinateSystem: 'none',
          renderItem(params, api) {
            const x0 = api.getWidth() / 2;
            const y0 = api.getHeight() / 2;
            const r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
            const point = getCirlPoint(x0, y0, r, (270 - self.angle));
            return {
              type: 'circle',
              shape: {
                cx: point.x,
                cy: point.y,
                r: 3,
              },
              style: {
                stroke: self.color, // 绿
                fill: self.color,
              },
              silent: true,
            };
          },
          data: [0],
        }, {
          type: 'pie',
          radius: ['53%', '30%'],
          silent: true,
          clockwise: true,
          startAngle: 80,
          z: 0,
          zlevel: 0,
          label: {
            normal: {
              position: 'center',

            },
          },
          data: [{
            value: this.value,
            name: '',
            itemStyle: {
              normal: {
                color: { // 完成的圆环的颜色
                  colorStops: [{
                    offset: 0,
                    color: self.color, // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: self.color, // 100% 处的颜色
                  }],
                },
              },
            },
          },
          {
            value: 100 - this.value,
            name: '',
            label: {
              normal: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                color: '#173164',
              },
            },
          },
          ],
        }, {
          name: '',
          type: 'gauge',
          radius: '64%',
          center: ['50%', '50%'],
          startAngle: 0,
          endAngle: 360,
          splitNumber: 8,
          hoverAnimation: true,
          axisTick: {
            show: false,
          },
          splitLine: {
            length: 60,
            lineStyle: {
              width: 5,
              color: '#061740',
            },
          },
          axisLabel: { show: false },
          pointer: { show: false },
          axisLine: { lineStyle: { opacity: 0 } },
          detail: { show: false },
          data: [{
            value: 0,
            name: '',
          }],
        }],
      };
      this.myChart.setOption(this.option);
    },
  },
};
</script>

<style lang="less" scoped>
.def {
  width: 300px;
  height: 300px;
  background: #ccc;
}
</style>
