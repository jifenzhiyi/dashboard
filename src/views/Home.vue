<template>
  <div class="home">
    <h1>首页</h1>
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
  </div>
</template>

<script>
import Custom from 'comps/Custom';

export default {
  name: 'Home',
  components: {
    Custom,
  },
};
</script>

<style lang="less" scoped>
.Test {
  width: 1200px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
}
</style>
