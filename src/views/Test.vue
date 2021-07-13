<template>
  <div>
    <input
      type="file"
      class="my_input"
      @change="importExcel"
      id="upload" />
  </div>
</template>

<script>
import xlsx from 'xlsx';

export default {
  name: 'Test',
  methods: {
    importExcel(e) {
      const files = e.target.files;
      console.log(files);
      if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
        return console.log('上传格式不正确，请上传xls或者xlsx格式');
      }
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
            excellist.push(ws[i]);
          }
          console.log(JSON.stringify(excellist)); // 此时得到的是一个内容是对象的数组需要处理
        } catch {
          return console.warn('读取失败');
        }
      };
      fileReader.readAsBinaryString(files[0]);
    },
  },
};
</script>
