var prev = document.getElementById("kyrie-prev");
var next = document.getElementById("kyrie-next");

var items = document.getElementsByClassName("kyrie-item")  //取得的值是陣列

var index = 0;


// 按鈕函式:下一張
function btnNext() {
    index++;                            //遞增編號
    if (index == items.length) {
        index = 0;                        //next如果編號超出範圍就從0開始
    }
    showItem();                         //呼叫寫好的方法
    reset();                            //呼叫寫好的方法
    switchbtn();

}
// 按鈕函式:上一張
function btnPrev() {
    index--;
    if (index == -1) {
        index = items.length - 1;      ////prev如果編號超出範圍就從0開始
    }
    showItem();                       //呼叫寫好的方法
    reset();                          //呼叫寫好的方法    
    switchbtn(); 
    
}

next.onclick = btnNext; //點擊函式
prev.onclick = btnPrev;


//寫完方法要上去呼叫這個方法
function showItem() {
    //清除items裡面的kyrie-active
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("kyrie-active");
    }

    items[index].classList.add("kyrie-active"); //點選到的套用顯示的css kyrie-active
}

// getAttribute 抓取html屬性
var duration = document.getElementById("kyrie-slider").getAttribute("data-slider-duration");
console.log(duration);

// 設定間隔呼叫函式 (函式名稱 , 時間)
var auto = setInterval(btnNext, duration);

//寫完方法要上去呼叫這個方法
function reset() {
    clearInterval(auto);
    auto = setInterval(btnNext, duration);
}


// 點選小黑點到指定圖片
var btns = document.getElementsByClassName("kyrie-button");
for (var i = 0; i < btns.length; i++) {
    // 匿名函式 function() {}
    btns[i].onclick = function () {
        index = this.getAttribute("data-slider-item") - 1;
        showItem();
        reset();
        switchbtn();
    }
}

// 移動到哪張圖片小黑點跟著動
function switchbtn() {
    //清除items裡面的kyrie-active
    for (var i = 0; i < items.length; i++) {
        btns[i].classList.remove("kyrie-button-active");
    }

    btns[index].classList.add("kyrie-button-active"); //點選到的套用顯示的css kyrie-active
}