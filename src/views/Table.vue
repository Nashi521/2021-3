<template>
  <div class="componentContainer">
    <div>
      <std-table
        :checkedType="checkedType"
        :dataType="dataType"
        :tableData="tableData"
        :handleSelectionChange="handleSelectionChange"
        :handleSortChange="handleSortChange"
      />
    </div>
  </div>
</template>

<script>
import stdTable from "../components/stdTable";

export default {
  components: {
    "std-table": stdTable
  },
  data() {
    return {
      checkedType: [
        {
          name: "date",
          value: "日期"
        },
        {
          name: "name",
          value: "姓名"
        },
        {
          name: "age",
          value: "年龄"
        }
      ],
      dataType: [
        {
          name: "date",
          value: "日期"
        },
        {
          name: "name",
          value: "姓名"
        },
        {
          name: "age",
          value: "年龄"
        },
        {
          name: "phone",
          value: "电话"
        },
        {
          name: "address",
          value: "地址"
        }
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          age: 18,
          phone: 1002555455,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小二",
          age: 18,
          phone: 198555455,
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          age: 18,
          phone: 1002333455,
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "小明",
          age: 18,
          phone: 1002555455,
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          age: 18,
          phone: 1082555255,
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          age: 18,
          phone: 1232522255,
          address: "上海市普陀区金沙江路 255 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          age: 18,
          phone: 1004655455,
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val);
    },
    handleSortChange(val) {
      console.log(val);
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
