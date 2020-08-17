<template>
  <div>
    <div id="echartsMain" style="width: 600px;height:400px;"></div>
    <el-table
      :data="tableData"
      height="200px"
      max-height="250"
      :stripe="false"
      :border="true"
      :show-header="true"
      class-name="getClass"
      style="width: 500px"
    >
      <el-table-column label="date" prop="date"></el-table-column>
      <el-table-column label="Name" prop="name">
        <template slot-scope="scope">
          <div slot="reference" class="kkkkk">
            <div class="kkkkk">{{ scope.row.name }}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="address">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="kkkkk">
              <div class="kkkkk">{{ scope.row.address }}</div>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="控制台">
        <template slot-scope="scope">
          <div slot="reference" class="ffff" v-if="scope.row.name === true">
            <div class="ffff">
              <el-link href="https://baidu.com" target="_blank" type="primary">go</el-link>
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { 
  categories,
  legendColor,
  legend,
  list,
  links 
  } from '../util.js';
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: true,
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: false,
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: true,
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: false,
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    }
  },
  // 不支持异步，所以就用watch
  computed: {
    checkAll: {
      get() {
        return this.products.every((item) => item.isSelected)
      },
    },
    fullName() {
      return this.firstName + this.varName + this.lastName
    },
  },
  watch: {
    wathValue(newValue, oldValue) {
      console.log(`newValue:${newValue}`)
      console.log(`oldValue:${oldValue}`)
    },
  },
  created() {},
  mounted() {
    // this.drawLine()
  },
  methods: {
    drawLine() {
      let option = {
        backgroundColor: '#000', //
        toolbox: { // 工具栏
          show: false,
          left: 'right',
          right: 20,
          top: 'bottom',
          bottom: 20,
        },
        color: legendColor,
        legend: {
          show: true, 
          data: legend,
          textStyle: {
            color: '#fff',
            fontSize: 10,
          },
          // inactiveColor: "#fff",
          icon: 'circle',
          type: 'scroll',//可滚动翻页的图例。当图例数量较多时可以使用。
          orient: 'vertical',
          left: 'right',
          right: 20,
          top: 20,
          bottom: 80,
          // itemWidth: 12,
          // itemHeight: 12,
          pageIconColor: '#00f6ff',
          pageIconInactiveColor: '#fff',
          pageIconSize: 12,
          pageTextStyle: {
            color: '#fff',
            fontSize: 12,
          },
        },
        selectedMode: 'false',
        bottom: 20,
        left: 0,
        right: 0,
        top: 0,
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            name: '知识图谱',
            type: 'graph',
            hoverAnimation: true,
            layout: 'force',
            force: {
              repulsion: 300,
              edgeLength: 100,
            },
            nodeScaleRatio: 0.6,
            draggable: true,
            roam: true,
            symbol: 'circle',
            data: list,
            links: links,
            categories: categories,
            focusNodeAdjacency: true,
            scaleLimit: {
              //所属组件的z分层，z值小的图形会被z值大的图形覆盖
              min: 0.5, //最小的缩放值
              max: 9, //最大的缩放值
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 8],
            label: {
              normal: {
                show: true,
                position: 'right',
                color: '#fff',
                distance: 5,
                fontSize: 10,
              },
            },
            lineStyle: {
              normal: {
                width: 1.5,
                curveness: 0,
                type: 'solid',
              },
            },
          },
        ],
      }
      let myChart = this.$echarts.init(document.getElementById('echartsMain'))
      myChart.setOption(option)
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    getClass() {
      return 'ggggggggggggggg'
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kkkkk {
  width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
  -o-text-overflow: hidden;
  cursor: pointer;
}
</style>
