

    //1 banner部分 轮播图
    // 
        var oDivMB=document.getElementById('mB');
        var aUl1=oDivMB.getElementsByTagName('ul');
        var aLi11=aUl1[0].getElementsByTagName('li');
        var aLi12=aUl1[1].getElementsByTagName('li');
        var speed1=aLi11[0].offsetWidth;
        var timer1=null;
        var iNow1=-1;
        aUl1[0].style.width=speed1*aLi11.length+'px';
        clearInterval(timer1);
        timer1=setInterval(roll,2000);
        roll();
        function roll(){
            if(iNow1==aLi11.length-1){
                iNow1=0;
            }else{
                iNow1++;
            }
            aUl1[0].style.left=-iNow1*speed1+'px';
            for(var i=0;i<aLi11.length;i++){
                aLi12[i].className='border11';
            }
            aLi12[iNow1].className='border12';
        }
        for(var j=0;j<aLi12.length;j++){
            aLi12[j].index=j;
            aLi12[j].onmouseover=function(){
                clearInterval(timer1);
                for(var x=0;x<aLi12.length;x++){
                    aLi12[x].className='border11';
                }
                this.className='border12';
                    iNow1=this.index;
                    aUl1[0].style.left=-iNow1*speed1+'px';
                }
                aLi12[j].onmouseout=function(){
                    timer1=setInterval(roll,2000);
                }
            }

        // 2 content2部分 选项卡
        // 
        var aLi2=select1.getElementsByTagName('li');
        var aDiv2=document.getElementsByClassName('content2-6');
        for(var i=0;i<aLi2.length;i++){
            aLi2[i].index=i;
            aLi2[i].onclick=function(){
                for(var j=0;j<aDiv2.length;j++){
                    aDiv2[j].style.display='none';
                }
                aDiv2[this.index].style.display='block';
            }
        }

        //3 Guide部分 无缝滚动原理 轮播图
        //
        var gGo=document.getElementById('gGo'); 
        var timer3=null;
        roll3();
        gGo.innerHTML+=gGo.innerHTML;
        gGo.style.width=2920+'px';
        function roll3(){
            clearInterval(timer3);
            timer3=setInterval(function(){
                gGo.style.left=gGo.offsetLeft-1+'px';
                if(gGo.offsetLeft<-gGo.offsetWidth/2){
                    gGo.style.left=-1+'px';
                }
            },10);
        }
        gGo.onmouseover=gRight.onmouseover=gLeft.onmouseover=function(){
            clearInterval(timer3);
        }
        gGo.onmouseout=gRight.onmouseout=gLeft.onmouseout=function(){
            timer3=setInterval(function(){
                gGo.style.left=gGo.offsetLeft-1+'px';
                if(gGo.offsetLeft<-gGo.offsetWidth/2){
                    gGo.style.left=-1+'px';
                }
            },10);
                
        gLeft.onclick=function(){
            clearInterval(timer3);
            gGo.style.left=gGo.offsetLeft-174+'px';
        }
        gRight.onclick=function(){
            clearInterval(timer3);
            gGo.style.left=gGo.offsetLeft+174+'px';
        }
    }







        
   