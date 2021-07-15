<template>
  <div class="content">
    <span class="bor b1"></span>
    <span class="bor b2"></span>
    <span class="bor b3"></span>
    <span class="bor b4"></span>
    <div class="one">
      <h3>累计报盘金额</h3>
      <div class="list">
        <div class="item">
          <div class="o1">6月</div>
          <div class="o2">
            <div
              class="line"
              style="width:85%;" />
          </div>
          <div class="o3">61938195.00</div>
        </div>
        <div class="item">
          <div class="o1">5月</div>
          <div class="o2">
            <div
              class="line"
              style="width:68%;" />
          </div>
          <div class="o3">56316950.00</div>
        </div>
        <div class="item">
          <div class="o1">4月</div>
          <div class="o2">
            <div
              class="line"
              style="width:70%;" />
          </div>
          <div class="o3">59947755.00</div>
        </div>
        <div class="item">
          <div class="o1">3月</div>
          <div class="o2">
            <div
              class="line"
              style="width:64%;" />
          </div>
          <div class="o3">43624095.00</div>
        </div>
        <div class="item">
          <div class="o1">2月</div>
          <div class="o2">
            <div
              class="line"
              style="width:90%;" />
          </div>
          <div class="o3">77228350.00</div>
        </div>
        <div class="item">
          <div class="o1">1月</div>
          <div class="o2">
            <div
              class="line"
              style="width:88%;" />
          </div>
          <div class="o3">74667450.00</div>
        </div>
        <div class="item">
          <div class="o1">12月</div>
          <div class="o2">
            <div
              class="line"
              style="width:68%;" />
          </div>
          <div class="o3">45050655.00</div>
        </div>
      </div>
    </div>
    <div class="one one1">
      <h3>本周报盘金额</h3>
      <div class="list">
        <div
          class="item"
          v-for="(item, index) in list"
          :key="index">
          <div class="o1a">{{ item.key }}</div>
          <div class="o2">
            <div
              class="line1"
              :style="`width:${item.width}%;`" />
          </div>
          <div class="o3">{{ item.val }}.00</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import xlsx from 'xlsx';
import axios from 'axios';

export default {
  name: 'Demo1',
  data() {
    return {
      list: [],
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
            const workbook = XLSX.read(data, { type: 'binary', cellDates: true });
            const wsname = workbook.SheetNames[2]; // 取第一张表，wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
            const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); // 生成json表格内容，wb.Sheets[Sheet名]获取第一个Sheet的数据
            const excellist = []; // 清空接收数据
            // 编辑数据
            for (let i = 0; i < ws.length; i++) {
              excellist.push(ws[i]);
            }
            let day = new Date().getDay();
            day === 0 ? day = 6 : day -= 1;
            let max = 0;
            Object.keys(excellist[0]).forEach((key) => {
              max = Math.max(excellist[0][key], max);
            });
            console.log('max', max);
            while (this.list.length < 7) {
              switch (day) {
                case 1: this.list.push({ key: '周一', val: excellist[0].mon, width: ((excellist[0].mon / max) * 100) }); break;
                case 2: this.list.push({ key: '周二', val: excellist[0].tus, width: ((excellist[0].tus / max) * 100) }); break;
                case 3: this.list.push({ key: '周三', val: excellist[0].wed, width: ((excellist[0].wed / max) * 100) }); break;
                case 4: this.list.push({ key: '周四', val: excellist[0].thu, width: ((excellist[0].thu / max) * 100) }); break;
                case 5: this.list.push({ key: '周五', val: excellist[0].fri, width: ((excellist[0].fri / max) * 100) }); break;
                case 6: this.list.push({ key: '周六', val: excellist[0].sat, width: ((excellist[0].sat / max) * 100) }); break;
                default: this.list.push({ key: '周日', val: excellist[0].sun, width: ((excellist[0].sun / max) * 100) }); break;
              }
              day++;
              if (day === 7) day = 0;
            }
            console.log('list', this.list);
          } catch {
            return console.warn('读取失败 3');
          }
        };
        fileReader.readAsBinaryString(res.data);
      });
    },
  },
};
</script>

<style lang="less" scoped>

.one {
  width: 50%;
  height: 100%;
  display: flex;
  padding-left: 15px;
  padding-right: 5px;
  flex-direction: column;
  &.one1 {
    padding-left: 5px;
    padding-right: 15px;
  }
  h3 {
    color: #fff;
    font-size: 18PX;
    text-align: left;
    padding-top: 5px;
    padding-bottom: 10px;
  }
  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    .item {
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      .o1 {
        width: 40px;
        color: #084d93;
        text-align: right;
        padding-right: 5px;
      }
      .o1a {
        width: 40px;
        color: #7f794a;
        text-align: right;
        padding-right: 5px;
      }
      .o2 {
        flex: 1;
        position: relative;
        .line {
          position: absolute;
          left: 0;
          top: 50%;
          height: 10px;
          margin-top: -5px;
          background: linear-gradient(to right, #101c4e, #1750b4);
        }
        .line1 {
          position: absolute;
          left: 0;
          top: 50%;
          height: 10px;
          margin-top: -5px;
          background: linear-gradient(to right, #212e45, #7f794a);
        }
      }
      .o3 {
        color: #fff;
        font-size: 12px;
        padding-left: 10px;
      }
    }
  }
}
</style>
