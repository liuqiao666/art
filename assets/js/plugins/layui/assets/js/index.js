/**
 *  入口文件索引
 *  使用说明：将此文件引入到页面中，可在script标签上定义一个data-main=""属性，
 *  此属性指定页面入口文件。
 *

(function () {

    var entry,
        // 配置所有应用的入口文件，程序将会按照data-main属性中设置的值进行索引查找
        // 如果你在引入此脚本的script标签上没有设置data-main属性，程序将会默认访问home.js文件
        app = {
            home : '{/}home',
            login : '{/}login'
        };

    (function(){

        var dataMain, scripts = document.getElementsByTagName('script'),
            eachScripts = function(el){
                dataMain = el.getAttribute('data-main');
                if(dataMain){
                    entry = dataMain;
                }
            };

        [].slice.call(scripts).forEach(eachScripts);

    })();

    layui.config({
        base: 'assets/lay/modules/'
    }).extend(app).use(entry || 'home');

})();
**/


/**/
layui.use('laydate', function(){
  var laydate = layui.laydate;
  //日期
  laydate.render({
    elem: '#date'
  });
  laydate.render({
    elem: '#date1'
  });
  laydate.render({
    elem: '#date2'
  });
  laydate.render({
    elem: '#date3'
  })
});
layui.use('upload', function(){
  var $ = layui.jquery
  ,upload = layui.upload;
  
  //拖拽上传
  upload.render({
    elem: '#preach'
    ,url: ''
    ,done: function(res){
      console.log(res)
    }
  })
});
layui.use('layedit', function(){
  var layedit = layui.layedit
  ,$ = layui.jquery;
  
  //构建一个默认的编辑器
  var index = layedit.build('LAY_demo1');
});
layui.use(['element','layedit'], function(){
  var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
  //监听导航点击
  element.on('nav(demo)', function(elem){
    //console.log(elem)
    layer.msg(elem.text());
  })
});



// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['艺术团','篮球队','足球队']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'艺术团',
            type:'line',
            stack: '总量',
            data:[12, 13, 11, 14, 9, 23, 10]
        },
        {
            name:'篮球队',
            type:'line',
            stack: '总量',
            data:[20, 18, 19, 23, 9, 13, 10]
        },
        {
            name:'足球队',
            type:'line',
            stack: '总量',
            data:[15, 21, 14, 15, 19, 15, 10]
        }
    ]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

// 指定图表的配置项和数据
   var myChart = echarts.init(document.getElementById('area'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '地区团队组建数量统计',
    subtext: '',
    x: 'center'
},
tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
},
legend: {
    orient: 'vertical',
    left: 'left',
    data: ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '资阳', '乐山', '眉山', '南充', '宜宾', '广安', '达州', '巴中', '雅安', '甘孜藏族自治州', '阿坝藏族羌族自治州', '凉山彝族自治州']
},
series: [{
    name: '地区团队组建数量统计',
    type: 'pie',
    radius: '55%',
    center: ['75%', '55%'],
    data: [
        { value: 350, name: '成都' },
        { value: 590, name: '自贡' },
        { value: 240, name: '攀枝花'},
        { value: 200, name: '泸州' },
        { value: 322, name: '德阳' },
        { value: 590, name: '绵阳' },
        { value: 240, name: '广元'},
        { value: 200, name: '遂宁' },
        { value: 322, name: '内江' },
        { value: 350, name: '资阳' },
        { value: 590, name: '乐山' },
        { value: 240, name: '眉山'},
        { value: 200, name: '南充' },
        { value: 322, name: '宜宾' },
        { value: 590, name: '广安' },
        { value: 240, name: '达州'},
        { value: 200, name: '巴中' },
        { value: 322, name: '雅安' },
        { value: 350, name: '甘孜藏族自治州' },
        { value: 590, name: '阿坝藏族羌族自治州' },
        { value: 240, name: '凉山彝族自治州'}
    ],
    itemStyle: {
        emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};
    // 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('years'));

// 指定图表的配置项和数据
var option = {
    title: {
    text: '年度团队组建数量统计',
    subtext: '',
    x: 'center'
},
color: ['#3398DB'],
tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
},
grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
},
xAxis: [{
    type: 'category',
    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    axisTick: {
        alignWithLabel: true
    }
}],
yAxis: [{
    type: 'value'
}],
series: [{
    name: '团队总量',
    type: 'bar',
    barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220, 200, 334, 390, 330, 220]
    }]
};
    // 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('product'));

// 指定图表的配置项和数据
var option = {
     title: {
        text: '地区获奖数量统计',
        subtext: '',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    	data: ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '资阳', '乐山', '眉山', '南充', '宜宾', '广安', '达州', '巴中', '雅安', '甘孜藏族自治州', '阿坝藏族羌族自治州', '凉山彝族自治州']
    },
    series: [{
        name: '获奖总数',
        type: 'pie',
        radius: '55%',
        center: ['75%', '55%'],
        data: [
		        { value: 50, name: '成都' },
		        { value: 90, name: '自贡' },
		        { value: 40, name: '攀枝花'},
		        { value: 20, name: '泸州' },
		        { value: 22, name: '德阳' },
		        { value: 50, name: '绵阳' },
		        { value: 20, name: '广元'},
		        { value: 10, name: '遂宁' },
		        { value: 22, name: '内江' },
		        { value: 35, name: '资阳' },
		        { value: 59, name: '乐山' },
		        { value: 24, name: '眉山'},
		        { value: 20, name: '南充' },
		        { value: 22, name: '宜宾' },
		        { value: 59, name: '广安' },
		        { value: 24, name: '达州'},
		        { value: 20, name: '巴中' },
		        { value: 22, name: '雅安' },
		        { value: 50, name: '甘孜藏族自治州' },
		        { value: 52, name: '阿坝藏族羌族自治州' },
		        { value: 21, name: '凉山彝族自治州'}
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);