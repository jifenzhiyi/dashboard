<template>
  <div class="bottom">
    <div class="content">
      <span class="bor b1"></span>
      <span class="bor b2"></span>
      <span class="bor b3"></span>
      <span class="bor b4"></span>
      <div class="list">
        <div class="th">
          <span class="s1">商品图</span>
          <span class="s2">商品代码</span>
          <span class="s3">商品名称</span>
          <span class="s4">分类</span>
          <span class="s5">产地</span>
          <span class="s6">是否临期</span>
          <span class="s7">保质期</span>
          <span class="s8">生产日期</span>
          <span class="s9">到期天数</span>
          <span class="s10">箱规</span>
          <span class="s11">涨幅%</span>
          <span class="s11">箱价</span>
          <span class="s11">涨跌</span>
          <span class="s11">供货价</span>
          <span class="s11">门店零售</span>
          <span class="s11">官方零售</span>
          <span class="s12">库存</span>
        </div>
        <div :class ="{ 'animate-up': animateUp }">
          <div
            v-for="item in list"
            :key="item.id"
            class="tr">
            <span class="img">
              <img :src="item.src" />
            </span>
            <span class="td t1">{{ item.id }}</span>
            <span class="td t2">{{ item.name }}</span>
            <span class="td t3">{{ item.type }}</span>
            <span class="td t4">{{ item.from }}</span>
            <span class="td t5">{{ item.isEnd }}</span>
            <span class="td t6">{{ item.maxTime }}</span>
            <span class="td t7">{{ item.startTime }}</span>
            <span class="td t8">{{ item.endTime }}</span>
            <span class="td t8">{{ item.spec }}</span>
            <span :class="['td', item.valType === 'up' ? 'tup' : 'tdown']">{{ item.val1 }}</span>
            <span :class="['td', item.valType === 'up' ? 'tup' : 'tdown']">{{ item.val2 }}</span>
            <span :class="['td', item.valType === 'up' ? 'tup' : 'tdown']">{{ item.val3 }}</span>
            <span :class="['td', item.valType === 'up' ? 'tup' : 'tdown']">{{ item.val4 }}</span>
            <span :class="['td', item.valType === 'up' ? 'tup' : 'tdown']">{{ item.val5 }}</span>
            <span :class="['td', item.valType === 'up' ? 'tup' : 'tdown']">{{ item.val6 }}</span>
            <span class="td t9">{{ item.num }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
  data() {
    return {
      list: [
        {
          src: '/images/i1.png',
          id: '6940188808965',
          name: '甘源咸蛋黄味夏威夷果仁65g',
          type: '坚果炒货',
          from: '中国',
          isEnd: '临期',
          maxTime: '240天',
          startTime: '2021-01-22',
          endTime: '81天',
          spec: '65g*32袋/箱',
          valType: 'up',
          val1: '4.00%',
          val2: '90.00',
          val3: '3.20',
          val4: '2.80',
          val5: '8.00',
          val6: '8.80',
          num: 410,
        },
        {
          src: '/images/i2.png',
          id: '6922888161137',
          name: '亿旺海苔夹心卷蛋黄味126g',
          type: '面包糕点',
          from: '中国',
          isEnd: '临期',
          maxTime: '360天',
          startTime: '2021-02-15',
          endTime: '255天',
          spec: '126g*15袋/箱',
          valType: 'down',
          val1: '-6.00%',
          val2: '128.00',
          val3: '-7.50',
          val4: '8.50',
          val5: '19.80',
          val6: '29.90',
          num: 230,
        },
        {
          src: '/images/i3.png',
          id: '8934760212606',
          name: 'Tipo面包干奇亚籽味90g',
          type: '面包糕点',
          from: '中国',
          isEnd: '临期',
          maxTime: '360天',
          startTime: '2020-11-20',
          endTime: '138天',
          spec: '90g*32包/箱',
          valType: 'down',
          val1: '-2.00%',
          val2: '120.00',
          val3: '-1.92',
          val4: '3.74',
          val5: '6.90',
          val6: '12.90',
          num: 460,
        },
        {
          src: '/images/i4.png',
          id: '6952096701696',
          name: '小梅的零食西梅200',
          type: '蜜饯糖巧',
          from: '中国',
          isEnd: '临期',
          maxTime: '360天',
          startTime: '2020-11-01',
          endTime: '11天',
          spec: '200g*12罐/箱',
          valType: 'down',
          val1: '-2.00%',
          val2: '82.00',
          val3: '-1.92',
          val4: '6.84',
          val5: '13.80',
          val6: '18.00',
          num: 460,
        },
        {
          src: '/images/i5.png',
          id: '6958770001526',
          name: '莫小仙自热火锅(麻辣嫩牛)270g',
          type: '泡面素食',
          from: '中国',
          isEnd: '临期',
          maxTime: '270天',
          startTime: '2020-12-10',
          endTime: '68天',
          spec: '270g*12盒/箱',
          valType: 'up',
          val1: '4.00%',
          val2: '261.00',
          val3: '9.00',
          val4: '14.50',
          val5: '17.90',
          val6: '29.90',
          num: 250,
        },
        {
          src: '/images/i6.png',
          id: '6924160715465',
          name: '无穷酱卤鸡爪75g',
          type: '肉豆熟食',
          from: '中国',
          isEnd: '临期',
          maxTime: '360天',
          startTime: '2020-11-20',
          endTime: '138天',
          spec: '75g*30包/箱',
          valType: 'down',
          val1: '10.00%',
          val2: '99.00',
          val3: '9.00',
          val4: '3.30',
          val5: '4.90',
          val6: '16.80',
          num: 70,
        },
      ],
      animateUp: false,
    };
  },
  // mounted() {
  //   setTimeout(this.move, 4000);
  // },
  // methods: {
  //   move() {
  //     this.animateUp = true;
  //     setTimeout(() => {
  //       this.list.push(this.list[0]);
  //       this.list.shift();
  //       this.animateUp = false;
  //       setTimeout(this.move, 4000);
  //     }, 0);
  //   },
  // },
};
</script>

<style lang="less" scoped>
.bottom {
  width: 100%;
  height: 100%;
  display: flex;
  background: #122041;
  .list {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    overflow: hidden;
    .th {
      width: 100%;
      display: flex;
      span {
        // flex: 1;
        height: 50px;
        color: #fff;
        display: flex;
        font-size: 18px;
        overflow: hidden;
        text-align: left;
        align-items: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        &.s1 { width: 70px; }
        &.s2 { width: 134px; }
        &.s3 { width: 210px; }
        &.s4 { width: 90px; }
        &.s5, &.s7 { width: 60px; }
        &.s6 { width: 80px; }
        &.s8, &.s9, &.s10 { width: 105px; }
        &.s11 { width: 90px; }
        &.s12 { flex: 1; }
      }
    }
    .tr {
      width: 100%;
      display: flex;
      margin-bottom: 10px;
      span {
        height: 42px;
        display: flex;
        overflow: hidden;
        white-space: nowrap;
        align-items: center;
        background: #18264d;
        text-overflow: ellipsis;
        &.img {
          width: 70px;
          position: relative;
          img {
            width: 46px;
            height: 42px;
            display: flex;
          }
        }
        &.td {
          color: #fff;
          position: relative;
          &.t1 { width: 134px; }
          &.t2 { width: 210px; }
          &.t3 { width: 90px; }
          &.t4, &.t6 { width: 60px; }
          &.t5 { width: 80px; color: #f00; }
          &.t7, &.t8 { width: 105px; }
          &.tup { width: 90px; color: #f00; }
          &.tdown { width: 90px; color: lawngreen; }
          &.t9 { flex: 1; }
        }
      }
    }
  }
}
</style>
