console.log(document.querySelector("body"));
console.dir(document.querySelectorAll("body script div"))
console.log(document.querySelectorAll("body script div"));
console.log(document.querySelectorAll("body script"));
console.log(document.querySelector("#coming"));
// console.log(document.querySelectorAll(".navMain"));

const mask = document.querySelector('.mask')
const searchInp = document.querySelector('.search input')
const searchBtn = document.querySelector('.search .btn')

function saBlock() {
    mask.style.display = 'block'
    searchInp.style.width = '80%'
    searchBtn.style.display = 'block'
}

function saNone() {
    mask.style.display = 'none'
    searchInp.style.width = '90%'
    searchBtn.style.display = 'none'
}

// 获取焦点盒子变窄、遮罩层和按钮显示，点击按钮隐藏恢复
searchInp.addEventListener('focus', saBlock)
searchBtn.addEventListener('click', saNone)

// 轮播图
var mySwiper = new Swiper(".swiper", {
    // 循环
    loop: true,
    // 自动轮播
    autoplay: true,
    // 分页器
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        bulletClass: "swbtn",
        bulletActiveClass: 'swbtnbg',
    },
});

// axios
axios.defaults.baseURL = "https://test-h5-api.ixook.com";
axios
    .get("/index")
    .then(function (res) {
        const resdd = res.data.data
        // console.log(resdd);
        const theater = document.querySelector(".theater");
        const coming = document.querySelector(".coming");
        const tbody = document.querySelector(".tbody");
        const test = {
            // swiper
            swiper: resdd.swiper,
            // 正在热映
            theater: resdd.theater,
            // 即将上映
            coming: resdd.coming,
            // 那年今日
            tbody: resdd.today,
            // 文章资讯
            article: resdd.article,
        };
        // console.log(resdd.coming);

        // 正在热映
        theater.innerHTML = template("theater", test);
        // 即将上映
        coming.innerHTML = template("coming", test);
        // 那年今日
        tbody.innerHTML = template("tbody", test);
    })
    .catch(function (error) {
        console.log(error);
    });