<template>
  <div class="bottom">
    <div class="content">
      <span class="bor b1"></span>
      <span class="bor b2"></span>
      <span class="bor b3"></span>
      <span class="bor b4"></span>
      <div class="list">
        <div class="th"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
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
  }
}
</style>
