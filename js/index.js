//时间与日期
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var Date = date.getDate();
var Week = date.getDay();
var arr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
var oSpan = document.querySelector("span")

oSpan.innerHTML = "您好，欢迎来到红叶旅游！今天是" + year + "年" + month + "月" + Date + "日" + arr[Week];
//轮播图

var imgs = document.querySelectorAll('.imgs li');
var nums = document.querySelectorAll('.nums li');
var num = 2,
	a = 0;

function show(num) {
	for(var j = 0; j < nums.length; j++) {
		nums[j].className = '';
		imgs[j].className = '';
	}
	nums[num].className = 'border';
	imgs[num].className = 'animated bounceOut';
}
show(num);
for(var i = 0; i < nums.length; i++) {
	nums[i].index = i;
	nums[i].onmouseover = function() {
		show(this.index);
		a = this.index;
	}
}
var time = setInterval(name, 3000)

function name() {
	a++;
	if(a == nums.length) {
		a = 0;
	}
	show(a);
}
for(var i = 0; i < imgs.length; i++) {
	imgs[i].onmouseover = function() {
		clearInterval(time);
	}
	imgs[i].onmouseout = function() {
		time = setInterval(name, 3000);
	}
}
//滚动图
 var oDiv = document.getElementById ('run');    
       var t,o;    
       var speed = 0;    
       var funny = function ()    
       {    
           t && clearInterval(t);    
           t = setInterval (function ()    
           {    
                speed -= 200/11;    
                if(speed<-200){    
                    speed=0;    
                    oDiv.appendChild (oDiv.children[0]);  
                    t && clearInterval(t);    
                    t = null;    
                    o && clearTimeout(o);    
                    o=setTimeout(funny,1000);    
                    }    
               oDiv.style.left = speed + "px";    
           }, 60);    
       }    
        funny ();    