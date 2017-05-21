// flow部分
     
     var flow=document.getElementById('flow');
     var aLiF=flow.getElementsByTagName('li');
     var son=document.getElementsByClassName('son');
     for(var i=0;i<aLiF.length;i++){
        aLiF[i].index=i;
        aLiF[i].onmouseover=function(){
            for(var j=0;j<son.length;j++){
                son[j].style.display='none';
            }
            son[this.index].style.display='block';
        }
    }

    // designer部分 轮播图
       var oUlD=document.getElementById('des');
       var oP1=document.getElementById('cPoint1');
       var aLi2D=oP1.getElementsByTagName('li');
       var aLi1D=document.getElementsByClassName('dess')
       var speed2=aLi1D[0].offsetWidth;
            var timer2=null;
            var iNow2=-1;
            oUlD.style.width=speed2*aLi1D.length+'px';
            clearInterval(timer2);
            timer2=setInterval(roll2,2000);
            roll2();
            function roll2(){
                if(iNow2==aLi1D.length-1){
                    iNow2=0;
                }else{
                    iNow2++;
                }
                oUlD.style.left=-iNow2*speed2+'px';
                for(var i=0;i<aLi1D.length;i++){
                    aLi2D[i].id='';
                }
                aLi2D[iNow2].id='cActive';
            }
            for(var j=0;j<aLi2D.length;j++){
                aLi2D[j].index=j;
                aLi2D[j].onmouseover=function(){
                    clearInterval(timer2);
                    for(var x=0;x<aLi2D.length;x++){
                        aLi2D[x].id='';
                    }
                    this.id='cActive';
                    iNow2=this.index;
                    oUlD.style.left=-iNow2*speed2+'px';
                }
                aLi2D[j].onmouseout=function(){
                    timer2=setInterval(roll2,2000);
                }
            }
            oUlD.onmouseover=function(){
                clearInterval(timer2);
            }
            oUlD.onmouseout=function(){
                timer2=setInterval(roll2,2000);
            }