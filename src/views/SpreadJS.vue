<template>
  <div class="componentContainer gc-scrollbar-thin">
    <h3>表格数据绑定</h3>

    <div class="spreadContainer">
      <gc-spread-sheets
        :newTabVisible="newTabVisible"
        :tabStripVisible="tabStripVisible"
        :tabStripRatio="tabStripRatio"
        :tabNavigationVisible="tabNavigationVisible"
        :scrollbarShowMax="scrollbarShowMax"
        :scrollbarMaxAlign="scrollbarMaxAlign"
        :showHorizontalScrollbar="showHorizontalScrollbar"
        :showVerticalScrollbar="showVerticalScrollbar"
        :allowUserZoom="allowUserZoom"
        :allowUserResize="allowUserResize"
        :grayAreaBackColor="grayAreaBackColor"
        :backColor="backColor"
        :hostClass="hostClass"
      >
        <gc-worksheet :dataSource="dataSource">
          <gc-column :width="'100'" :dataField="'name'"></gc-column>
          <gc-column :width="'100'" :dataField="'code'"></gc-column>
          <gc-column :width="'100'" :dataField="'state'"></gc-column>
          <gc-column :width="'100'" :dataField="'grade'"></gc-column>
        </gc-worksheet>
      </gc-spread-sheets>
    </div>
    <div class="test-btn-list">
      <el-button @click="getData">获取表格数据</el-button>
    </div>
  </div>
</template>
<script>
import "@grapecity/spread-sheets-vue";
import DataService from "../static/dataService";
// import * as GC from '@grapecity/spread-sheets';
// import Excel from '@grapecity/spread-excelio';
// import Charts from '@grapecity/spread-sheets-charts';

export default {
  data() {
    return {
      newTabVisible: true,
      tabStripVisible: true,
      tabStripRatio: true,
      tabNavigationVisible: true,
      scrollbarShowMax: true,
      scrollbarMaxAlign: true,
      showHorizontalScrollbar: true,
      showVerticalScrollbar: true,
      allowUserZoom: true,
      allowUserResize: true,
      grayAreaBackColor: "#E4E4E4",
      backColor: "#ffffff",
      dataSource: DataService.getGradeData(),
      hostClass: "spread-host"
    };
  },
  methods: {
    getData() {
      console.log(this.dataSource);
    }
  }
};
</script>
<style scoped>
.componentContainer {
  position: absolute;
  padding: 10px;
  left: 242px;
  top: 0;
  bottom: 20px;
  right: 3px;
  overflow-y: auto;
  overflow-x: hidden;
}
.spreadContainer {
  position: absolute;
  top: 90px;
  padding: 10px;
  /*width: 100%;*/
  /*height: 240px;*/
  left: 10px;
  right: 10px;
  bottom: 150px;
  box-shadow: 0 0 20px grey;
}
.test-btn-list {
  /*padding: 20px;*/
  position: absolute;
  bottom: 0px;
  height: 130px;
}
.spread-host {
  width: 100%;
  height: 100%;
}
</style>
