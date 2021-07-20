import Vue from 'vue';

Vue.directive('drag', (el, obj) => {
  const odiv = el;
  odiv.onmousedown = () => {
    el.style.zIndex = 10;
    const temp = document.getElementById('temp');
    const list = obj.value.list; // 获取当前列表
    const childH = temp.children[0].clientHeight;
    const disY = childH * (obj.value.idx + 1);
    el.style.cursor = 'pointer';
    odiv.style.top = `${disY}px`;
    el.style.position = 'absolute';

    document.onmousemove = (event) => {
      const top = event.clientY - temp.offsetTop;
      odiv.style.top = `${top}px`;
    };

    document.onmouseup = (event) => {
      const top = event.clientY - temp.offsetTop;
      const item = list[obj.value.idx]; // 获取当前选中的行
      if (top > temp.clientHeight) {
        // 1.将数据拖到尾部
        list.splice(obj.value.idx, 1);
        list.push(item);
      } else if (top < childH) {
        // 2.将数据拖到顶部
        list.splice(obj.value.idx, 1);
        list.unshift(item);
      } else {
        // 3.插入中间位置
        list.splice(obj.value.idx, 1);
        let now = Math.floor(top / 23) - 1;
        if (now > 0) now -= 1;
        const arr1 = list.slice(0, now);
        const arr2 = list.slice(now, list.length);
        const newList = [...arr1, item, ...arr2];
        newList.forEach((o, idx) => { list[idx] = o; });
      }
      list.forEach((o, idx) => { o.idx = idx + 1; });
      odiv.style.top = null;
      odiv.style.left = null;
      odiv.style.cursor = null;
      odiv.style.zIndex = null;
      document.onmouseup = null;
      document.onmousemove = null;
      el.style.position = 'relative';
    };
  };
});