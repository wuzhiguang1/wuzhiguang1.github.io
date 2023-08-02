// 给首页文章卡片套上动画
var arr = document.getElementsByClassName("recent-post-item");
for(var i = 0;i<arr.length;i++){
    arr[i].classList.add("wow"); //必要项，添加wow.js标记
    arr[i].classList.add("animate__zoomIn"); //必要项，添加样式动画
  }
// 给侧栏卡片套上动画
var arr = document.getElementsByClassName("card-widget");
for(var i = 0;i<arr.length;i++){
    arr[i].classList.add("wow");
    arr[i].classList.add("animate__zoomIn");
  }
//初始化函数
wow = new WOW({
  boxClass: 'wow',
  // 当用户滚动时显示隐藏框的类名称
  animateClass: 'animate__animated',
  // 触发 CSS 动画的类名称（动画库默认为"animate.css"库）
  offset: 0,
  // 定义浏览器视口底部与隐藏框顶部之间的距离。
  // 当用户滚动并到达此距离时，将显示隐藏的框。
  mobile: true,
  // 在移动设备上打开/关闭wow.js。
  live: true
  // 在页面上检查新的 wow.js元素。
})
wow.init();

// 返回顶部 显示网页阅读进度
window.onscroll = percent; // 执行函数
// 页面百分比
function percent() {
  let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
    b =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
    result = Math.round((a / b) * 100), // 计算百分比
    btn = document.querySelector("#percent"); // 获取图标

  result <= 99 || (result = 99), (btn.innerHTML = result);
}

document.getElementById("page-name").innerText = document.title.split(" | 阿清的小站")[0];


