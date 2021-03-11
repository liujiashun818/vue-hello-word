const colors = [
  {
    c1: "#00c7ef",
    c2: "#0AF3FF",
  },
  {
    c1: "#FF8E14",
    c2: "#FFA12F",
  },
  {
    c1: "#AF5AFF",
    c2: "#B62AFF",
  },
  {
    c1: "#25dd59",
    c2: "#29f463",
  },
  {
    c1: "#6E35FF",
    c2: "#6E67FF",
  },
  {
    c1: "#002AFF",
    c2: "#0048FF",
  },
  {
    c1: "#8CD282",
    c2: "#95F300",
  },
  {
    c1: "#3B0EFF",
    c2: "#604BFF",
  },
  {
    c1: "#00BE74",
    c2: "#04FDB8",
  },
  {
    c1: "#4a3ac6",
    c2: "#604BFF",
  },
];



const getData = function () {
  const data = {
    name: "根节点1",
    value: 0,
    list: [],
  };
  for (let i = 1; i <= 10; i++) {
    const obj = {
      name: "节点" + i,
      value: i,
      list: [],
    };
    for (let j = 1; j <= 5; j++) {
      const obj2 = {
        name: `节点1-${i}-${j}`,
        value: 1 + "-" + i + "-" + j,
      };
      // if(j%2==1){
      //   obj2.list=[]
      //   for (let k = 1; k <= 3; k++) {
      //     let obj3 = {
      //       name: `节点1-${i}-${j}-${k}`,
      //       value: 1 + "-" + i + "-" + j+'-'+k,
      //     };
      //     obj2.list.push(obj3);
      //   }
      // }

      obj.list.push(obj2);
    }

    data.list.push(obj);
  }
  var arr = [];
  arr.push(data);
  //   arr=handle(arr,0)
  return arr;
};
var listData = getData();
const handle2 = function (arr, idx, color, category) {
  arr.forEach((item, index) => {
    if (item.name === null) {
      return false;
    }
    // 设置节点大小
    let symbolSize = 10;
    switch (idx) {
      case 0:
        symbolSize = 70;
        break;
      case 1:
        symbolSize = 50;
        break;
      default:
        symbolSize = 10;
        break;
    }

    // 每个节点所对应的文本标签的样式。
    let label = null;
    switch (idx) {
      case 0:
      case 1:
        label = {
          position: "inside",
          rotate: 0,
        };
        break;
      default:
        break;
    }

    // 计算出颜色,从第二级开始
    if (idx === 0) {
      color = colors[0];
    }
    if (idx === 1) {
      color = colors.find((itemm, eq) => eq === index % 10);
      legend.push(item.name);
    }
    // 设置线条颜色
    const lineStyle = {
      color: color.c2,
    };
    // 设置节点样式
    let bgcolor = null;
    if (idx === 0) {
      bgcolor = {
        type: "radial",
        x: 0.5,
        y: 0.5,
        r: 0.5,
        colorStops: [
          {
            offset: 0,
            color: color.c1, // 0% 处的颜色
          },
          {
            offset: 0.8,
            color: color.c1, // 80% 处的颜色
          },
          {
            offset: 1,
            color: "rgba(0, 0, 0, 0.3)", // 100% 处的颜色
          },
        ],
        global: false,
      };
    } else {
      bgcolor = {
        type: "radial",
        x: 0.5,
        y: 0.5,
        r: 0.5,
        colorStops: [
          {
            offset: 0,
            color: color.c1, // 0% 处的颜色
          },
          {
            offset: 0.4,
            color: color.c1, // 0% 处的颜色
          },
          {
            offset: 1,
            color: color.c2, // 100% 处的颜色
          },
        ],
        global: false,
      };
    }
    let itemStyle = null;
    if (item.list && item.list.length !== 0) {
      // 非子节点
      itemStyle = {
        borderColor: color.c2,
        color: bgcolor,
      };
    } else {
      // 子节点
      item.isEnd = true;
      if (item.isdisease === "true") {
        itemStyle = {
          color: color.c2,
          borderColor: color.c2,
        };
      } else {
        itemStyle = {
          color: "transparent",
          borderColor: color.c2,
        };
      }
    }
    // 可以改变来实现节点发光效果，但体验不好
    itemStyle = Object.assign(itemStyle, {
      shadowColor: "rgba(255, 255, 255, 0.5)",
      shadowBlur: 10,
    });

    if (idx == 1) {
      category = item.name;
    }
    let obj = {
      name: item.name,
      symbolSize: symbolSize,
      category: category,
      label,
      color: bgcolor,
      itemStyle,
      lineStyle,
    };
    obj = Object.assign(item, obj);
    if (idx === 0) {
      obj = Object.assign(obj, {
        root: true,
      });
    }
    if (item.list && item.list.length === 0) {
      obj = Object.assign(obj, {
        isEnd: true,
      });
    }
    list.push(obj);
    if (item.list && item.list.length > 0) {
      handle2(item.list, idx + 1, color, category);
    }
  });
};
const handle3 = function (arr, index, color) {
  arr.forEach((item) => {
    if (item.list) {
      item.list.forEach((item2, eq) => {
        if (index === 0) {
          color = colors.find((itemm, eq2) => eq2 == eq % 10);
        }
        let lineStyle = null;
        switch (index) {
          case 0:
            if (item2.list.length > 0) {
              lineStyle = {
                normal: {
                  color: "target",
                },
              };
            } else {
              lineStyle = {
                normal: {
                  color: color.c2,
                },
              };
            }
            break;
          default:
            lineStyle = {
              normal: {
                color: "source",
              },
            };
            break;
        }
        const obj = {
          source: item.name,
          target: item2.name,
          lineStyle,
        };
        links.push(obj);
        if (item2.list && item.list.length > 0) {
          handle3(item.list, index + 1);
        }
      });
    }
  });
};
var categories = listData[0].list.map((item) => {
  return {
    name: item.name,
  };
});
var list = [];
var links = [];
var legend = [];

var legendColor = colors.map((item) => item.c2);

handle2(JSON.parse(JSON.stringify(listData)), 0);
handle3(JSON.parse(JSON.stringify(listData)), 0);
export { categories, legendColor, legend, list, links };
export default colors;