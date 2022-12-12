// 因为是头部使用 必须加一个Windows监听事件
window.addEventListener('load', function () {
        const nav = document.querySelectorAll(".nav-content");
        // const nav=document.getElementsByClassName("nav-content");  同样效果
        const nav_p = nav.item(0)// 第一个
        const nav_c = nav.item(1)// 第二个

        /* -------------------错误使用 用户体验感不好 ----------------------*/
// nav_p悬浮状态 nav_c显示
//     nav_p.addEventListener('mouseover', function () {
//         nav_c.style.visibility = "inherit";
//     })
//     // 鼠标离开 nav_c隐藏
//     nav_p.addEventListener('mouseout', function () {
//         nav_c.style.visibility = "hidden";
//     })
        /*------------------------------*/
// nav悬浮状态 nav_c显示
        document.querySelector(".nav").addEventListener('mouseover', function () {
            nav_c.style.visibility = "inherit";
        })
        // 鼠标离开 nav_c隐藏
        document.getElementsByClassName("nav")[0].addEventListener('mouseout', function () {
            nav_c.style.visibility = "hidden";
        })
        // 监听滚动条事件
        window.addEventListener('scroll', function (c) {
            console.log(c);
        })
    }
)