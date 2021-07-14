<template>
  <div class="item">
    <div class="content">
      <span class="bor b1"></span>
      <span class="bor b2"></span>
      <span class="bor b3"></span>
      <span class="bor b4"></span>
      <div class="info">
        <!-- <h3>&nbsp;{{ data.value }}</h3> -->
        <p>&nbsp;</p>
        <div class="desc" v-html="data.desc" />
      </div>
      <div
        class="cur"
        :val="data.value">
        <custom :value="data.value" :color="data.color" />
      </div>
    </div>
  </div>
</template>

<script>
import Custom from 'comps/Custom';

export default {
  name: 'Item',
  props: ['data'],
  components: { Custom },
};
</script>

<style lang="less" scoped>
.item {
  width: 410px;
  height: 160px;
  display: flex;
  position: relative;
  margin-bottom: 15px;
  background: #122041;
  .cur {
    width: 160px;
    height: 160px;
    top: 0;
    right: -5px;
    position: absolute;
  }
  .info {
    height: 160px;
    display: flex;
    overflow: hidden;
    padding-top: 10px;
    padding-left: 20px;
    flex-direction: column;
    h3 {
      opacity: 0.7;
      color: #2ff8ff;
      font-size: 24px;
      text-align: left;
    }
    .desc {
      opacity: 0.7;
      color: #fff;
      text-align: left;
      line-height: 26px;
    }
  }
}
</style>
