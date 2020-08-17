<template>
  <div id="ddd">
      <p>
        <input class="blue" type="text" v-model="firstTime" />
        {{firstTime}}
      </p>

    <Select style="width:200px" @on-change="changMonth">
      <Option v-for="item in month" :value="item.value" :key="item.value">{{ item.value }}</Option>
    </Select>
    <ul>
      <li v-for="item in list" :key="item">第{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeList: [],
      month: [
        {
          value: '1',
        },
        {
          value: '7',
        },
        {
          value: '10',
        },
      ],
      firstTime: '',
      list: [],
      timer: null,
    }
  },
  created() {},
  mounted() {
    this.getTime()
  },
  watch:{
      firstTime(newValue){
        this.getList(newValue)
      }
  },
  methods: {
    getTime() {
      this.timeList = [
        '2016,06.11 11:11',
        '2017,16.22 22:22',
        '2018,06.33 33:33',
        '2019,06.44: 44:44',
      ]

      setTimeout(() => {
        this.firstTime = this.timeList[0]
        this.getList(this.firstTime)
      }, 10)
      clearInterval(this.timer)
      // 每4秒请求一次
      const _this = this
      this.timer = setInterval(() => {
        let len = _this.timeList.length
        for (let i = 0; i < len; i++) {
          if (_this.timeList[i] === _this.firstTime) {
            let next = i + 1
            if (i === len - 1) {
              next = 0
            } else {
              next = i + 1
            }
            _this.firstTime = _this.timeList[next]
            console.log('i', i)
            break
          }
        }
      }, 4000)
    },
    getList() {
      setTimeout(() => {
        let a = [1, 2, 3, ...[this.firstTime]]
        console.log('a',a )
        this.list = a
        console.log('get: firstTime', this.firstTime, this.monthValue)
      }, 200)
    },
    changMonth(v) {
      this.monthValue = v
      this.firstTime = this.timeList[0]
      this.getList()
    },
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
}
</script>

<style>
.blue {
  color: green;
  font-size: 30px;
  font-weight: 500;
}
</style>