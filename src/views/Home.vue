<template>
  <div
    ref="store"
    class="home">
    <!-- <div class="Test">
      <custom
        value="10.01"
        color="#0CD3DB" />
      <custom
        value="20.02"
        color="#2fff5b" />
      <custom
        value="30.03"
        color="#fd1010" />
    </div> -->
    <div class="Test test2">
      <def-map />
      <div class="abs temp1">
        <def-bar />
      </div>
      <div class="abs temp2">
        <def-demo1 />
      </div>
    </div>
  </div>
</template>

<script>
// import Custom from 'comps/Custom';
import DefMap from 'comps/Map';
import DefBar from 'comps/Bar';
import DefDemo1 from 'comps/Demo1';
import { displayApp } from '@/utils/index.js';

export default {
  name: 'Home',
  components: {
    // Custom,
    DefMap,
    DefBar,
    DefDemo1,
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
  position: relative;
  justify-content: space-between;
  &.test2 {
    margin-top: 50px;
  }
  .temp1 {
    top: 0;
    right: 0;
    width: 550px;
    height: 270px;
    background: #131f41;
  }
  .temp2 {
    right: 0;
    bottom: 0;
    width: 550px;
    height: 250px;
    background: #131f41;
  }
}
</style>
