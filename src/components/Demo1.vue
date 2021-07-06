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
        <div class="item">
          <div class="o1a">周五</div>
          <div class="o2">
            <div
              class="line1"
              style="width:68%;" />
          </div>
          <div class="o3">2329784.00</div>
        </div>
        <div class="item">
          <div class="o1a">周四</div>
          <div class="o2">
            <div
              class="line1"
              style="width:54%;" />
          </div>
          <div class="o3">1640906.00</div>
        </div>
        <div class="item">
          <div class="o1a">周三</div>
          <div class="o2">
            <div
              class="line1"
              style="width:67%;" />
          </div>
          <div class="o3">2254914.00</div>
        </div>
        <div class="item">
          <div class="o1a">周二</div>
          <div class="o2">
            <div
              class="line1"
              style="width:66%;" />
          </div>
          <div class="o3">2118343.00</div>
        </div>
        <div class="item">
          <div class="o1a">周一</div>
          <div class="o2">
            <div
              class="line1"
              style="width:98%;" />
          </div>
          <div class="o3">2904920.00</div>
        </div>
        <div class="item">
          <div class="o1a">周日</div>
          <div class="o2">
            <div
              class="line1"
              style="width:44%;" />
          </div>
          <div class="o3">1982446.00</div>
        </div>
        <div class="item">
          <div class="o1a">周六</div>
          <div class="o2">
            <div
              class="line1"
              style="width:39%;" />
          </div>
          <div class="o3">1346079.00</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo1',
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
