<template>
  <div>
    <el-table
      :data="ntableData"
      stripe
      border
      @selection-change="handleSelectionChange"
      @sort-change="handleSortChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <template v-for="(item, index) in ncheckedType">
        <el-table-column
          :prop="item.name"
          :label="item.value"
          :key="index"
          sortable
        />
      </template>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot="header" slot-scope>
          <el-button size="mini" @click="reheaer()">
            显示表项
          </el-button>
        </template>
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">
            查看
          </el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="选择显示表项"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <template>
        <el-checkbox-group v-model="ncheckedType" :min="2">
          <el-checkbox
            v-for="(item, index) in ndataType"
            :label="item"
            :key="index"
            :disabled="index < 3"
          >
            {{ item.value }}
          </el-checkbox>
        </el-checkbox-group>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    checkedType: Array,
    dataType: Array,
    tableData: Array,
    handleSelectionChange: Function,
    handleSortChange: Function
  },
  data() {
    return {
      ncheckedType: this.checkedType,
      ndataType: this.dataType,
      ntableData: this.tableData,
      centerDialogVisible: false,
      multipleSelection: []
    };
  },
  methods: {
    reheaer() {
      this.centerDialogVisible = true;
      console.log(this.checkedType);
    }
  }
};
</script>
