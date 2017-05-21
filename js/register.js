
// 1.实现全选，反选，不选的功能
// 
var aInputT=travelCity.getElementsByTagName('input');
sAll.onclick=function(){
    for(var i=0;i<aInputT.length;i++){
        aInputT[i].checked=true;
    }
}
sInverse.onclick=function(){
    for(var i=0;i<aInputT.length;i++){
        if(aInputT[i].checked==true){
            aInputT[i].checked=false;
        }else{
            aInputT[i].checked=true;
        }
    }
}
sNone.onclick=function(){
    for(var i=0;i<aInputT.length;i++){
        aInputT[i].checked=false;
    }
}
travelBtn.onclick=function(){
    var fName=document.getElementById('First Name').value;
    var lName=document.getElementById('Last Name').value;
    var eAddress=document.getElementById('Email Address').value;
    var mobile=document.getElementById('Mobile').value;
    var pPassword=document.getElementById('Password').value;
    var rPassword=document.getElementById('Repeat Password').value;
    var toWrong=document.getElementsByClassName('reNone');
    // if(!/\w{6,12}/.test(fName)){
    //     for(var i=0;i<toWrong.length;i++){
    //         toWrong[i].style.display='none';
    //     }
    //     toWrong[0].style.display='block';
    // }else if(!/\w{6,12}/.test(lName)){
    //     for(var i=0;i<toWrong.length;i++){
    //         toWrong[i].style.display='none';
    //     }
    //     toWrong[1].style.display='block';
    // }else if (!/^\w{1,20}@[a-zA-Z0-9]{2,5}((\.com)$|(\.cn)$)/.test(eAddress)){
    //     for(var i=0;i<toWrong.length;i++){
    //         toWrong[i].style.display='none';
    //     }
    //     toWrong[2].style.display='block';
    // }else if(!/^1[34578]\d{9}$/.test(mobile)){
    //     for(var i=0;i<toWrong.length;i++){
    //         toWrong[i].style.display='none';
    //     }
    //     toWrong[3].style.display='block';
    // }else if(!/[0-9a-zA-Z]{6,12}/.test(pPassword)){
    //     for(var i=0;i<toWrong.length;i++){
    //         toWrong[i].style.display='none';
    //     }
    //     toWrong[4].style.display='block';
    // }else if(pPassword!=rPassword){
    //     for(var i=0;i<toWrong.length;i++){
    //         toWrong[i].style.display='none';
    //     }
    //     toWrong[5].style.display='block';
    // }
    for(var i=0;i<toWrong.length;i++){
            toWrong[i].style.display='none';
        if(!/\w{6,12}/.test(fName)){
        toWrong[0].style.display='block';
        }
        else if(!/\w{6,12}/.test(lName)){
        toWrong[1].style.display='block';
    }else if (!/^\w{1,20}@[a-zA-Z0-9]{2,5}((\.com)$|(\.cn)$)/.test(eAddress)){     
        toWrong[2].style.display='block';
    }else if(!/^1[34578]\d{9}$/.test(mobile)){   
        toWrong[3].style.display='block';
    }else if(!/[0-9a-zA-Z]{6,12}/.test(pPassword)){ 
        toWrong[4].style.display='block';
    }else if(pPassword!=rPassword){    
        toWrong[5].style.display='block';
    }
    else if(noneRed.checked==false){    
        toWrong[6].style.display='block';
    }else{
        window.open("index.html")
    }
    }
}