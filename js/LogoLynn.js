
var oWfgd=document.getElementsByClassName('wfgd2')[0];
var aWfgd=oWfgd.getElementsByTagName('li');
var oDji=document.getElementsByClassName('zyan')[0];
var aP=oDji.getElementsByTagName('p');
    var timer3=null;
    var timer7=null;
    var speed2=-aWfgd[0].offsetWidth;
    var h=0;
       oWfgd.innerHTML+=oWfgd.innerHTML;
       oWfgd.style.width=aWfgd[0].offsetWidth*aWfgd.length+'px';
       timer3=setInterval(hun,1000);
        function hun(){
            if(h>parseInt(aWfgd.length-1)/2-1){
                h=0;
            }else{
                h++;
            }
          oWfgd.style.left=h*speed2-aWfgd[0].offsetWidth+'px';
        }
     aP[0].onclick=function(){
         clearInterval(timer3);
         clearTimeout(timer7);
         timer7=setTimeout(function(){
         timer3=setInterval(hun,1000);
         },2000)
            if(h>parseInt(aWfgd.length-1)/2-1){
                h=0;
            }else{
                h++;
          oWfgd.style.left=h*speed2-aWfgd[0].offsetWidth+'px';   
     }
 }
      aP[1].onclick=function(){
         clearInterval(timer3);
         clearTimeout(timer7);
         timer7=setTimeout(function(){
         timer3=setInterval(hun,1000);
         },2000)
            if(h>parseInt(aWfgd.length-1)/2-1){
                h=0;
            }else{
                h++;
          oWfgd.style.left=h*speed2-aWfgd[0].offsetWidth+'px';   
     }
 }
   
var oSxdul=document.getElementsByClassName('daa-ul')[0];
var aSxdli=oSxdul.getElementsByTagName('li');
var oSxxul=document.getElementsByClassName('xt-ul')[0];
var aSxxli=oSxxul.getElementsByTagName('li');
var timer4=null;
var ee=aSxdli[0].offsetHeight;
var f=-1;
        timer4=setInterval(fun,1000);
         fun();
         function fun(){
     if(f==aSxdli.length-1){
        f=0;
     }else{
        f++;
     }
     oSxdul.style.top=-ee*f+'px';
        for(var g=0;g<aSxxli.length;g++){
               aSxxli[g].id='';
           }
              aSxxli[f].id='active';
   }
    for(var g=0;g<aSxxli.length;g++){
        aSxxli[g].index=g;

        aSxxli[g].onmouseout=function(){
             timer4=setInterval(fun,1000)
        }
        aSxxli[g].onmouseover=function(){
          // alert(aSxxli.length)
            clearInterval(timer4);
            for(var g=0;g<aSxxli.length;g++){
                aSxxli[g].id='';
            }
            this.id='active';
            f=this.index;
            oSxdul.style.top=-ee*f+'px';
        }
    }


var check=document.getElementById('check');
check.onclick=function(){
    // var pattern=/^\w@[a-zA-Z0-9]{2,5}((\.com)$|(\.cn)$)/;
    var email= document.getElementById("email").value;
    var content=document.getElementById('content').value;
    if(!/^\w{1,20}@[a-zA-Z0-9]{2,5}((\.com)$|(\.cn)$)/.test(email)){
      alert("请输入正确的邮箱格式");
    }else if(content==''){
      alert("内容不能为空")
    }else{
      alert("提交成功！")
    }
}

click2.onclick=function(){
  click2.value="";
}






