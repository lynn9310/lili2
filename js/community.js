var div4=document.getElementById('mDM');
var aUl4=div4.getElementsByTagName('ul');
var ul4=document.getElementById('mDML');
var aLi4=ul4.getElementsByTagName('li');
    for (var i =0; i <aLi4.length; i++) {
        aLi4[i].index=i;  
        aLi4[i].onmouseover=function(){
            for (var j =0; j <aLi4.length; j++) {
                aUl4[j+1].style.display='none';
                aLi4[j].style.color='#666';
                aLi4[j].style.borderLeft='1px solid #eee';
            }
            this.style.color='#f59d00';
            this.style.borderLeft='3px solid #f59d00';
            aUl4[this.index+1].style.display='block';
        }
    }