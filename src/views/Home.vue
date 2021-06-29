<template>
  <div
    ref="store"
    class="home">
    <p>这里是一个新的页面</p>
    <div class="Test">
      <custom
        value="10.01"
        color="#0CD3DB" />
      <custom
        value="20.02"
        color="#2fff5b" />
      <custom
        value="30.03"
        color="#fd1010" />
    </div>
    <div class="Test test2">
      <def-map />
      <def-bar />
    </div>
  </div>
</template>

<script>
import Custom from 'comps/Custom';
import DefMap from 'comps/Map';
import DefBar from 'comps/Bar';
import { displayApp } from '@/utils/index.js';

export default {
  name: 'Home',
  components: {
    Custom,
    DefMap,
    DefBar,
  },
  mounted() {
    this.$refs.store.ondblclick = () => {
      displayApp.isFullScreen() ? displayApp.exitFullScreen() : displayApp.fullScreen();
    };
  },
};
</script>

<style lang="less" scoped>
.Test {
  width: 1400px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  &.test2 {
    margin-top: 50px;
  }
}
</style>
