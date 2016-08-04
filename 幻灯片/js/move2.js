  function getstyle(obj,attr){
    if(obj.currentStyle){
     return obj.currentStyle[attr];
    }
    else{
      return getComputedStyle(obj,false)[attr];
    }
  }
  //var timer=null;

   function startMove (obj,json,fn) {
    //var odiv=document.getElementsByTagName('div');不需要获取
    
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
      var bstop=true; //这次运动结束了--假设所以的值都到达了
      for(var attr in json){   //for...in循环，遍历json
        //1.取当前值
        var icur=0;
        if(attr=='opacity'){
          icur=parseInt(parseFloat(getstyle(obj,attr))*100);
        }
        else{
          icur=parseInt(getstyle(obj,attr));
        }
        //2.算速度
        var ispeed=(json[attr]-icur)/8; //目标值减去当前值
        //取整数值
        ispeed=ispeed>0?Math.ceil(ispeed):Math.floor(ispeed);
        //3.检测停止
        if(icur!=json[attr]){
          bstop=false;  //判断是否有某个值没到
        }
       
        if(attr=='opacity'){
            //icur+=ispeed;
            obj.style[attr]=(icur+ispeed)/100;
            obj.style.filter='alpha(opacity:'+(icur+ispeed)+')';
            //document.getElementById('txt1').value=obj.style[attr];
        }
        else{
            obj.style[attr]=icur+ispeed+'px';
        } 
      }
  //如果整个循环结束都没有bstop=false，就是所有值都到达了，清除定时器
      if(bstop){
          clearInterval(obj.timer);

          //检测是否有函数fn,有则清除定时器后在执行
          if(fn){
            fn();
          }
      }
    },30)
     
   }