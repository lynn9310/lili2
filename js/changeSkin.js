        var sBL=document.getElementById('sBL');
            var timers=null;
            sBL.onmouseenter=function(){
                moves(1)
            }
            sBL.onmouseleave=function(){
                moves(-1)
            }
            function moves(x){
                clearInterval(timers);
                timers=setInterval(function(){
                    sBL.style.left=sBL.offsetLeft+x+'px';
                    if(sBL.offsetLeft>=0){
                        clearInterval(timers);
                    }
                    if(sBL.offsetLeft<=-100){
                        clearInterval(timers);
                    }
                },1)
            }
            var aDivs=sBL.getElementsByTagName('div');
            for (var i = 0; i <aDivs.length; i++) {
                aDivs[i].index=i;
                aDivs[i].onclick=function(){
                    localStorage.setItem('Index',(this.index+1));
                    changeSkin.href='css/skin'+(this.index+1)+'.css';
                }
            };
             changeSkin.href='css/skin'+localStorage.Index+'.css';


        window.onscroll=function(){
        var node=document.getElementById('hNavFixed');
        var t=document.documentElement.scrollTop || document.body.scrollTop;
        if(t>=400) {
            node.style.position='fixed';
            node.style.top='0';
            node.style.zIndex='999';
            node.style.height='50px';
            node.style.opacity='0.7';
            sBRA.style.display="block";
        } else {
            node.style.position='static';
            node.style.height='60px';
            node.style.opacity='1';
            sBRA.style.display="none";
        }
    }