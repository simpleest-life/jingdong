$(function() {
//送至北京
	var topl=$(".topl")[0];
	var topyqz=$(".topyqz")[0];
    var baisek=$(".baisek")[0];
    	topl.onmouseover=function(){
    		topyqz.style.display="block";
            baisek.style.display="block";
        }
        topyqz.onmouseover=function(){
        	topyqz.style.display="block";
            baisek.style.display="block";
        }
        topyqz.onmouseout=function(){
        	topyqz.style.display="none";
            baisek.style.display="none";
        }
    	topl.onmouseout=function(){
    		topyqz.style.display="none";
            baisek.style.display="none";
    	}
// //关注京东
    var guanzhuj=$(".guanzhuj")[0];
	var guanzhuj2=$(".guanzhuj2")[0];
    var guanzhujb=$(".guanzhujb")[0];
    	guanzhuj.onmouseover=function(){
    		guanzhuj2.style.display="block";
            guanzhujb.style.display="block";
        }
        guanzhuj2.onmouseover=function(){
        	guanzhuj2.style.display="block";
            guanzhujb.style.display="block";
        }
        guanzhuj2.onmouseout=function(){
        	guanzhuj2.style.display="none";
            guanzhujb.style.display="none";
        }
    	guanzhuj.onmouseout=function(){
    		guanzhuj2.style.display="none";
            guanzhujb.style.display="none";
    	}
// //手机京东
    var guanzhujs=$(".guanzhujs")[0];
    var guanzhuj3=$(".guanzhuj3")[0];
    var guanzhusj=$(".guanzhusj")[0]; 
        guanzhujs.onmouseover=function(){
            guanzhuj3.style.display="block";
            guanzhusj.style.display="block";
        }
        guanzhuj3.onmouseover=function(){
            guanzhuj3.style.display="block";
            guanzhusj.style.display="block";
        }
        guanzhuj3.onmouseout=function(){
            guanzhuj3.style.display="none";
            guanzhusj.style.display="none";
        }
        guanzhujs.onmouseout=function(){
            guanzhuj3.style.display="none";
            guanzhusj.style.display="none";
        }
//客户服务
    var guanzhukh=$(".guanzhukh")[0];
    var guanzhuk=$(".guanzhuk")[0];
    var guanzhujb3k=$(".guanzhujb3k")[0];
        guanzhukh.onmouseover=function(){
            guanzhuk.style.display="block";
            guanzhujb3k.style.display="block";
        }
        guanzhuk.onmouseover=function(){
            guanzhuk.style.display="block";
            guanzhujb3k.style.display="block";
        }
        guanzhuk.onmouseout=function(){
            guanzhuk.style.display="none";
            guanzhujb3k.style.display="none";
        }
        guanzhukh.onmouseout=function(){
            guanzhuk.style.display="none";
            guanzhujb3k.style.display="none";
        }
// //网站导航
    var wangzd=$(".wangzd")[0];
    var wangzdz=$(".wangzdz")[0];
    var guanzhujb4=$(".guanzhujb4")[0];
        wangzd.onmouseover=function(){
            wangzdz.style.display="block";
            guanzhujb4.style.display="block";
        }
        wangzdz.onmouseover=function(){
            wangzdz.style.display="block";
            guanzhujb4.style.display="block";
        }
        wangzdz.onmouseout=function(){
            wangzdz.style.display="none";
            guanzhujb4.style.display="none";
        }
        wangzd.onmouseout=function(){
            wangzdz.style.display="none";
            guanzhujb4.style.display="none";
        }
// //我的京东
    var wodej=$(".wodej")[0];
    var wojdz=$(".wojdz")[0];
    var guanzhujb5=$(".guanzhujb5")[0]
        wodej.onmouseover=function(){
            wojdz.style.display="block";
            guanzhujb5.style.display="block";
        }
        wojdz.onmouseover=function(){
            wojdz.style.display="block";
            guanzhujb5.style.display="block";
        }
        wojdz.onmouseout=function(){
            wojdz.style.display="none";
            guanzhujb5.style.display="none";
        }
        wodej.onmouseout=function(){
            wojdz.style.display="none";
            guanzhujb5.style.display="none";
        }
// //左侧导航家用电器



    var  jiayongdq=$(".jiayongdq");
    var  jiayo=$(".jiayo");
    for(var i=0;i<jiayongdq.length;i++){
        jiayongdq[i].index=i;
        jiayongdq[i].onmouseover=function(){
            for(i=0;i<jiayo.length;i++){
            jiayo[i].style.display="none";
        }
            jiayo[this.index].style.display="block"
            jiayongdq[this.index].style.display="block";
        
    }
         jiayongdq[i].onmouseout=function(){
         jiayo[this.index].style.display="none";

        }
    }

		// //开始大图片轮播
		var banner = $(".bannerc")[0];
		var imgs = $(".bannerda");
		var left = $("#xiaoyu");
		var right = $("#dayu");
		var yuans = $(".yuandat");
		var t = setInterval(move, 1000);
		var n = 0;
		var next = 0;
		var flag = true;
       
		function move() {
			if (!flag) {
				return;
			}
			flag = false;
			next = n + 1;
			if (next >= imgs.length) {
				next = 0;
			}
			for (var i = 0; i < imgs.length; i++) {
				yuans[i].style.background = "#3E3E3E";
				imgs[i].style.zIndex = 0;
			}
			imgs[n].style.opacity = 1;
			imgs[next].style.opacity = 0
			yuans[next].style.background = "red";
			imgs[next].style.zIndex = 1;
			animate(imgs[n], {
				opacity: 0
			}, 1000);
			animate(imgs[next], {
				opacity: 1
			}, 1000, function() {
				flag = true
			})
			n = next;
		}

		function move1() {
			if (!flag) {
				return;
			}
			flag = false;
			next = n - 1;
			if (next < 0) {
				next = 0;
			}
			for (var i = 0; i < imgs.length; i++) {
				yuans[i].style.background = "#3E3E3E";
				imgs[i].style.zIndex = 0;
			}
			imgs[n].style.opacity = 1;
			imgs[next].style.opacity = 0
			yuans[next].style.background = "red";
			imgs[next].style.zIndex = 1;
			animate(imgs[n], {
				opacity: 0
			}, 1000);
			animate(imgs[next], {
				opacity: 1
			}, 1000, function() {
				flag = true
			})
			n = next;
		}
		for (var i = 0; i < yuans.length; i++) {
			yuans[i].index = i;
			yuans[i].onmouseover = function() {
				for (var i = 0; i < imgs.length; i++) {
					yuans[i].style.background = "#ccc";
				}
				imgs[n].style.opacity = 1;
				imgs[this.index].style.opacity = 0;
				yuans[this.index].style.background = "red";
				imgs[this.index].style.zIndex = 1;
				animate(imgs[n], {
					opacity: 0
				}, 1000);
				animate(imgs[this.index], {
					opacity: 1
				}, 1000, function() {
					flag = true;
				});
				n = this.index;
			}
		}
		banner.onmouseover = function() {
			clearInterval(t);
            left.style.display="block";
            right.style.display="block";
		}
		banner.onmouseout = function() {
			t = setInterval(move, 1000);
            left.style.display="none";
            right.style.display="none";
		}
		left.onclick = function() {
			move1();
		}
		right.onclick = function() {
			move();
		}

//节点轮播



//开始Banner下面的所有轮播
  var box=$(".q");
  for(var i=0;i<box.length;i++){
    lunbo(box[i]);
  }

//楼层跳转


    var floor = $(".fuzhuang");//获取楼层
    var lis = $(".navcelis");//获取左边浮动表
    var boxx = $(".navce")[0];//获取左边浮动表框
    var cw = document.documentElement.clientWidth;//获取浏览器宽度
    var ch = document.documentElement.clientHeight;//获取浏览器高度
    var bh = boxx.offsetHeight;//获取左边浮动表框高度
    boxx.style.top = (ch - bh) / 2 + "px";//设置左边浮动表框高度
    var flagt=true;
    var flag1=true;
    var sign=true;
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;//给浮动表每一个按钮进行编号
        lis[i].onclick = function() {
            sign=false;
            // var obj = document.documentElement.scrollTop ? document.documentElement : document.body;//处理兼容性问题
            var top = floor[this.index].offsetTop;//获取所要出现楼层到body顶部的距离
            // obj.scrollTop = top;
            animate(document.documentElement,{scrollTop:top},300,function () {
                sign=true;
            })//设置滚动条到顶部距离
            animate(document.body,{scrollTop:top},300,function () {
                sign=true;
            })//设置滚动条到顶部距离
            for (var i = 0; i < lis.length; i++) {//设置按钮的颜色和文字颜色
                lis[i].style.background = "#fff"
                lis[i].style.color = "#666"
                lis[i].innerHTML=i+1+"F";
            }
            lis[this.index].style.color = "#fff" //按钮变色，文字变色
            lis[this.index].style.background = "#B61B1F"
            var aa = lis[this.index].getAttribute("aa");
            lis[this.index].innerHTML=aa;
        }
    }
    
    window.onscroll=function(){//滚动条事件
        if(!sign){
            return
        }
        var obj = document.documentElement.scrollTop ? document.documentElement : document.body;
        for (var i = 0; i < floor.length; i++) {
            if (obj.scrollTop >= (floor[i].offsetTop-ch)) {//按钮变色，文字变色
                for (var j = 0; j < lis.length; j++) {
                    lis[j].style.background = "#fff"
                    lis[j].style.color = "#666"
                    lis[j].innerHTML=j+1+"F";
                }
                var aa = lis[i].getAttribute("aa");
                lis[i].innerHTML=aa;
                lis[i].style.color = "#fff"//按钮变色，文字变色
                lis[i].style.background = "#B61B1F"
                var imgss = $("img", floor[i]);
                for (var k = 0; k < imgss.length; k++) {
                    var aa = imgss[k].getAttribute("aa");
                    imgss[k].src = aa;
                }
            }   
        }
        if (obj.scrollTop >= (floor[0].offsetTop - ch)) {//开关控制
            if (flagt) {
                flagt = false;
                animate(boxx, {opacity: 1}, 300, function() {flag1 = true;})
            } 
        }else {
                if (flag1) {
                flag1 = false;
                animate(boxx, {opacity: 0}, 300, function() {flagt = true;})
            } 
        }
    }

//轮播
    var ul=$(".lunbok")[0];      //获取页面中的相关元素
    var lis1=$(".lunbot1");
    var lt=$("#xiaoyu1");
    var rt=$("#dayu1");
    var width=parseInt(getStyle(lis1[0],"width"));//获取宽度属性
    var t8=setInterval(dong,2000);
    var flag=true;   //开关思想
    function dong(){
        if(!flag){
            return;
        }
        flag=false;
        var lif=getFirst(ul);     //获取第一个节点
        animate(ul,{left:-4*width},1000,function(){   //动画效果
                  ul.appendChild(lif);     //把第一个节点放到页面的最后，
                  ul.style.left=0;          //把大框往前一个图片的宽度
                   flag=true;
        })                                        //回调函数
    }
    function dong1(){
        if(!flag){
            return;
        }
        flag=false;
        var lif=getFirst(ul); //获取第一个节点
        var lil=getLast(ul);  //获取最后一个节点
        insertBefore(lil,lif);  //把最后一个节点放在第一个节点之前
        ul.style.left=-4*width+"px";//整个框移动
        animate(ul,{left:0},1000,function(){
            flag=true;
        });   //动画效果
                                     
    }
    $(".lunbo")[0].onmouseover=function(){  //鼠标效果
            clearInterval(t8);
    }
    $(".lunbo")[0].onmouseout=function(){
             t8=window.setInterval(dong,2000);
    }
    lt.onclick=function(){        //右点击事件         
            dong();
    }
    rt.onclick=function(){
            dong1();
    }



//选项卡

   var ehand=$('.fuzhuang')
   var floors=$('.qw');
  for(var i=0; i<ehand.length; i++){
      xuanxiang(ehand[i],floors[i])
  }

  




})
