<template>
  <div class="wapper">
    <!-- <input
      type="file"
      class="my_input"
      @change="importExcel"
      id="upload" /> -->
      <div
        id="temp"
        class="temp">
        <div class="th">
          <span class="s1">优先级</span>
          <span class="s2">字段2</span>
          <span class="s3">字段3</span>
          <span class="s4">字段4</span>
          <span class="s5">字段5</span>
          <span class="s6">操作</span>
        </div>
        <div
          class="td"
          v-for="(item, idx) in list"
          v-drag="{ idx, list }"
          :key="idx">
          <span class="s1">{{ item.idx }}</span>
          <span class="s2">{{ item.title }}</span>
          <span class="s3">{{ item.text }}</span>
          <span class="s4">{{ item.desc }}</span>
          <span class="s5">{{ item.date }}</span>
          <span class="s6">
            <a
              v-show="idx !== 0"
              @click="move('up', idx)">上移</a>
            <a
              v-show="idx !== list.length - 1"
              @click="move('down', idx)">下移</a>
          </span>
        </div>
      </div>
  </div>
</template>

<script>
// import xlsx from 'xlsx';

export default {
  name: 'Test',
  data() {
    return {
      flag: true,
      list: [
        {
          idx: 1, title: '标题1', text: '内容1', desc: '备注1', date: '日期1',
        },
        {
          idx: 2, title: '标题2', text: '内容2', desc: '备注2', date: '日期2',
        },
        {
          idx: 3, title: '标题3', text: '内容3', desc: '备注3', date: '日期3',
        },
        {
          idx: 4, title: '标题4', text: '内容4', desc: '备注4', date: '日期4',
        },
        {
          idx: 5, title: '标题5', text: '内容5', desc: '备注5', date: '日期5',
        },
      ],
    };
  },
  methods: {
    move(pos, index) {
      let temp;
      if (pos === 'up') {
        temp = this.list[index - 1];
        this.$set(this.list, index - 1, this.list[index]);
        this.$set(this.list, index, temp);
      }
      if (pos === 'down') {
        temp = this.list[index + 1];
        this.$set(this.list, index + 1, this.list[index]);
        this.$set(this.list, index, temp);
      }
      this.list.forEach((o, idx) => { o.idx = idx + 1; });
    },
    // importExcel(e) {
    //   const files = e.target.files;
    //   console.log(files);
    //   if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
    //     return console.log('上传格式不正确，请上传xls或者xlsx格式');
    //   }
    //   const fileReader = new FileReader();
    //   fileReader.onload = (ev) => {
    //     try {
    //       const data = ev.target.result;
    //       const XLSX = xlsx;
    //       const workbook = XLSX.read(data, { type: 'binary' });
    //       const wsname = workbook.SheetNames[0]; // 取第一张表，wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
    //       const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); // 生成json表格内容，wb.Sheets[Sheet名]获取第一个Sheet的数据
    //       const excellist = []; // 清空接收数据
    //       // 编辑数据
    //       for (let i = 0; i < ws.length; i++) {
    //         excellist.push(ws[i]);
    //       }
    //       console.log(JSON.stringify(excellist)); // 此时得到的是一个内容是对象的数组需要处理
    //     } catch {
    //       return console.warn('读取失败');
    //     }
    //   };
    //   fileReader.readAsBinaryString(files[0]);
    // },
  },
};
</script>

<style lang="less" scoped>
.wapper {
  width: 100%;
  height: 100%;
  background: #fff;
  .temp {
    width: 1200px;
    display: flex;
    position: relative;
    margin: 100px auto 0;
    flex-direction: column;
    .th, .td {
      width: 100%;
      display: flex;
      background: #fff;
      position: relative;
      box-sizing: border-box;
      border: solid 1px #ccc;
      span {
        width: 200px;
        height: 40px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        justify-content: center;
        border-right: solid 1px #ccc;
        &:last-child { border: 0; }
        a {
          width: 50%;
          height: 100%;
          display: flex;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          &:hover { color: #f00; }
        }
      }
    }
    .td:hover {
      background: #eee;
    }
  }
}
</style>
