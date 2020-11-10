var prev = document.getElementById("kyrie-prev");
var next = document.getElementById("kyrie-next");

var items = document.getElementsByClassName("kyrie-item")  //取得的值是陣列

var index = 0;


// 按鈕函式:下一張
function btnNext() {
    index++;                            //遞增編號
    if(index == items.length) {
        index=0;                        //next如果編號超出範圍就從0開始
    }
    showItem();                         //呼叫寫好的方法
}
// 按鈕函式:上一張
function btnPrev() {
    index--;
    if(index == -1) {
        index = items.length -1 ;       ////prev如果編號超出範圍就從0開始
    }
     showItem();                         //呼叫寫好的方法
}

next.onclick = btnNext; //點擊函式
prev.onclick = btnPrev;

function showItem() {
    //清除items裡面的kyrie-active
    for(var i = 0; i < items.length; i++) {
        items[i].classList.remove("kyrie-active");
    }

    items[index].classList.add("kyrie-active"); //點選到的套用顯示的css kyrie-active
}

// getAttribute 抓取html屬性
var duration = document.getElementById("kyrie-slider").getAttribute("data-slider-duration");
console.log(duration)

// 計時器 (動作,時間)
setInterval(btnPrev , duration);
