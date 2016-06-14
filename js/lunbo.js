	function lunbo(obj){
		var b=$(".b",obj);   //图片
		var c=$(".c",obj);   //圆
		var r=$(".r",obj)[0];//右
		var l=$(".l",obj)[0];//左
		var w=obj.offsetWidth;
		var x=0;
		var y=0;
		var flag=true;
		var t1=setInterval(dong,2000);
		function dong(){
			if(!flag){
				return;
			}
			flag=false;
			y=x+1;
			if(y>=b.length){
					y=0;
				}
			for(var i=0;i<b.length;i++){
				c[i].style.background="#3D3A3A";
			}
			b[y].style.zIndex=1;
			c[y].style.background="#B61B1F";
			b[y].style.left=w+"px";
			animate(b[x],{left:-w},1000);
			animate(b[y],{left:0},1000,function(){flag=true});
			x=y;
		}
		function dong1(){
			if(!flag){
				return;
			}
			flag=false;
			y=x-1;
			if(y<0){
					y=b.length-1;
				}
			for(var i=0;i<b.length;i++){
				c[i].style.background="#3D3A3A";
			}
		    b[y].style.zIndex=1;
			c[y].style.background="#B61B1F";
			b[y].style.left=-w+"px";
			animate(b[x],{left:w},1000);
			animate(b[y],{left:0},1000,function(){flag=true});
			x=y;
		}
		obj.onmouseover=function(){
			clearInterval(t1);
			l.style.display="block";
            r.style.display="block";
		}
		obj.onmouseout=function(){
			t1=setInterval(dong,2000);
			l.style.display="none";
            r.style.display="none";
		}
		r.onclick=function(){
			dong();
		}
		l.onclick=function(){
			dong1();
		}
		for(var i=0;i<b.length;i++){
			c[i].index=i;
			c[i].onclick=function(){
				if(this.index>x){
					for(var j=0;j<b.length;j++){
						c[j].style.background="#3D3A3A";
					}
					b[this.index].zIndex=1;
					c[this.index].style.background="#B61B1F";
					b[this.index].style.left=w+"px";
					animate(b[x],{left:-w},1000);
					animate(b[this.index],{left:0},1000);
					x=this.index;
				}else if(this.index<x){
					for(var j=0;j<b.length;j++){
						c[j].style.background="#3D3A3A";
					}
					c[this.index].style.background="#B61B1F";
					b[this.index].style.left=-w+"px";
					b[this.index].zIndex=1;
					animate(b[x],{left:w},1000);
					animate(b[this.index],{left:0},1000);
					x=this.index;
				}else{
					return;
				}
			}
		}
	}

//选项卡
    function xuanxiang(obj,ooo){
   	var tab=$('.fwen1',obj)
   	var lxs=$('.lxs',ooo)
   
   	for(var i=0;i<tab.length;i++){
        tab[i].index=i;
		tab[i].onmouseover=function(){
			for (var j = 0; j <tab.length; j++) {
				lxs[j].style.zIndex=0;
				lxs[j].style.display='none'
				tab[j].classList.remove('qq');
			};
			tab[this.index].classList.add('qq')

			lxs[this.index].style.zIndex=1;
			lxs[this.index].style.display="block";
	   }
   }
   }
   
