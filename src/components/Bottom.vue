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
        <div
          ref='outbox'
          class="list_main">
          <div
            ref="movebox"
            class="sub_main">
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
              <span class="td t8a">{{ item.spec }}</span>
              <span :class="['td', item.valType === 'up' ? 'tup' : 'tdown']">{{ item.val1 }}</span>
              <span :class="['td', item.valType === 'up' ? 'tup' : 'tdown']">{{ item.val2 }}</span>
              <span :class="['td', item.valType === 'up' ? 'tup' : 'tdown']">{{ item.val3 }}</span>
              <span :class="['td', item.valType === 'up' ? 'tup' : 'tdown']">{{ item.val4 }}</span>
              <span :class="['td', item.valType === 'up' ? 'tup' : 'tdown']">{{ item.val5 }}</span>
              <span :class="['td', item.valType === 'up' ? 'tup' : 'tdown']">{{ item.val6 }}</span>
              <span class="td t9">{{ item.num }}</span>
            </div>
            <div v-if="isShow">
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
                <span class="td t8a">{{ item.spec }}</span>
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
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import xlsx from 'xlsx';
import config from '@/mixins/config.js';
// import list from '@/utils/data.js';

export default {
  name: 'Bottom',
  mixins: [config],
  data() {
    return {
      list: [],
      isShow: false,
      animateUp: false,
      marquee: null,
    };
  },
  mounted() {
    this.ReadExcel();
  },
  methods: {
    ReadExcel() {
      axios.get('/test.xls', { responseType: 'blob' }).then((res) => {
        const fileReader = new FileReader();
        fileReader.onload = (ev) => {
          try {
            const data = ev.target.result;
            const XLSX = xlsx;
            const workbook = XLSX.read(data, { type: 'binary' });
            const wsname = workbook.SheetNames[0]; // 取第一张表，wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
            const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); // 生成json表格内容，wb.Sheets[Sheet名]获取第一个Sheet的数据
            const excellist = []; // 清空接收数据
            // 编辑数据
            for (let i = 0; i < ws.length; i++) {
              if (i === 0) console.log(ws[i]);
              ws[i].val1 > 0 ? ws[i].valType = 'up' : ws[i].valType = 'down';
              excellist.push(ws[i]);
            }
            this.list = excellist;
            this.init();
          } catch {
            return console.warn('读取失败');
          }
        };
        fileReader.readAsBinaryString(res.data);
      });
    },
    init() {
      this.marquee && clearInterval(this.marquee);
      const outbox = this.$refs.outbox;
      const moveTarget = this.$refs.movebox;
      moveTarget.style = `transform: translateY(-${0}px)`;
      this.skuWarning && (this.oldCount = this.skuWarning.length);
      if (outbox.offsetHeight > moveTarget.offsetHeight) {
        this.isShow = false;
        return;
      }
      this.isShow = true;
      let initTop = 0;
      this.marquee = setInterval(() => {
        initTop += 1;
        if (initTop >= moveTarget.offsetHeight / 2) {
          initTop = 0;
        }
        moveTarget.style = `transform: translateY(-${initTop}px)`;
      }, 80);
    },
  },
};
</script>

<style lang="less" scoped>
.bottom {
  width: 100%;
  height: 100%;
  display: flex;
  .list {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 20px;
    overflow: hidden;
    flex-direction: column;
    .th {
      width: 100%;
      display: flex;
      span {
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
        &.s5 { width: 60px; }
        &.s6 { width: 90px; }
        &.s7 { width: 70px; }
        &.s8, &.s9 { width: 100px; }
        &.s10 { width: 110px; }
        &.s11 { width: 90px; justify-content: center; }
        &.s12 { flex: 1; }
      }
    }
    .list_main {
      flex: 1;
      width: 100%;
      overflow: hidden;
      .tr {
        width: 100%;
        display: flex;
        margin-bottom: 10px;
        span {
          height: 42px;
          display: flex;
          overflow: hidden;
          position: relative;
          white-space: nowrap;
          align-items: center;
          text-overflow: ellipsis;
          &::after {
            opacity: 0.3;
            width: 100%;
            height: 100%;
            content: ' ';
            top: 0; left: 0;
            position: absolute;
            background: #18264d;
          }
          &.img {
            width: 70px;
            position: relative;
            &::before {
              width: 22px;
              height: 15px;
              content: ' ';
              top: 0; left: 0;
              position: absolute;
              background: url(/images/ico.png) center no-repeat;
              background-size: 100% 100%;
            }
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
            &.t2 { width: 190px; margin-right: 20px; }
            &.t3 { width: 90px; }
            &.t4 { width: 60px; }
            &.t5 { width: 90px; color: #f00; }
            &.t6 { width: 70px; }
            &.t7 { width: 100px; }
            &.t8 { width: 100px; justify-content: center;}
            &.t8a { width: 110px;}
            &.tup { width: 90px; color: #f00; justify-content: center;}
            &.tdown { width: 90px; color: lawngreen; justify-content: center;}
            &.t9 { flex: 1; }
          }
        }
      }
    }
  }
}
</style>
