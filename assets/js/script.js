/* 获取header元素对象 */
const header = document.querySelector('.header')
// 监听文档的滚动
window.addEventListener('scroll',function(){
    if (this.scrollY > 100) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
})



// tab栏切换
const lis = document.querySelectorAll('.section3 .container-box .navtop li')
const divs = document.querySelectorAll('.section3 .container-box .content')
// 遍历给每个li元素添加点击事件
lis.forEach(function(li,index){
    li.addEventListener('click',function(){
        // 先清除其他li样式
        lis.forEach(function(item){
            item.classList.remove('active')
        })
        // 再设置自己的样式
        this.classList.add('active')
        // 先清除其他div样式
        divs.forEach(function(item){
            item.style.display = 'none'
        })
        // 再设置当前的div显示样式
        divs[index].style.display = 'block'
    })
})



// 加载地图
let map = new AMap.Map('map', {
    center: [114.408074,30.464974], 
    zoom: 18, 
    viewMode: '3D',
})
// 添加点
let marker = new AMap.Marker({
    position: new AMap.LngLat(114.408074,30.464974)
})
map.add(marker)



// 开屏动画
